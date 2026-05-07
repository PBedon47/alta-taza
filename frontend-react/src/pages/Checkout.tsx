import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";
import { useState } from "react";

function Checkout() {

  const {cart, subtotal} = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<"resumen" | "form" | "boleta">("resumen");

  const [formData, setFormData] = useState({
    direccion: "",
    metodo_pago: "efectivo"
  });

  const [orderData, setOrderData] = useState<any>(null);

  const handlePay = () => {

    if (!user) {
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Carrito vacío");
      return;
    }

    // 👉 SOLO CAMBIA DE PASO
    setStep("form");
  };

  const handleConfirmOrder = async () => {

  if (!formData.direccion) {
    alert("Ingresa tu dirección");
    return;
  }  

  const order = {
    user_id: user?.id || null,
    total: subtotal,
    direccion: formData.direccion,
    metodo_pago: formData.metodo_pago,
    items: cart
  };

  const res = await createOrder(order);

  if (res.id) {

    alert("Compra realizada con éxito");

    setOrderData({
      ...order,
      fecha: new Date(),
      user
    });

    setStep("boleta");
  }
};

if (step === "form") {
  return (
    <div className="checkout-form">

      <h1>Datos de entrega</h1>

      <div className="form-group">
        <label>Dirección completa</label>

        <input
          value={formData.direccion}
          onChange={(e) =>
            setFormData({
              ...formData,
              direccion: e.target.value
            })
          }
        />
      </div>

      <div className="form-group">

        <label>Método de pago</label>

        <select
          value={formData.metodo_pago}
          onChange={(e) =>
            setFormData({
              ...formData,
              metodo_pago: e.target.value
            })
          }
        >

          <option value="efectivo">
            Efectivo
          </option>

          <option value="yape">
            Yape
          </option>

        </select>

      </div>

      <button
        className="confirm-btn"
        onClick={handleConfirmOrder}
      >
        Confirmar compra
      </button>

    </div>
  );
}

if (step === "boleta") {
  return (
    <div className="boleta">

      <div className="boleta-header">
        <h1>Alta Taza</h1>
        <p>Boleta de compra</p>
      </div>

      <div className="boleta-info">
        <p><strong>Cliente:</strong> {orderData?.user?.nombre}</p>
        <p><strong>Dirección:</strong> {orderData?.direccion}</p>
        <p>
          <strong>Método de pago:</strong>{" "}
          {orderData?.metodo_pago === "yape"
            ? "Yape"
            : "Efectivo"}
        </p>
        <p>
            <strong>Fecha:</strong>{" "}
            {new Date(orderData?.fecha).toLocaleString()}
          </p>
      </div>

      <div className="boleta-items">
        {orderData?.items?.map((item:any) => (
          <div className="boleta-item" key={item.id}>
            <span>{item.nombre} x {item.quantity || item.cantidad}</span>
            <span>S/ {item.precio * (item.quantity || item.cantidad)}</span>
          </div>
        ))}
      </div>

      <div className="boleta-total">
      <span>Total pagado</span>
      <strong>S/ {Number(orderData.total).toFixed(2)}</strong>
    </div>

    </div>
  );
}

  return (

    <div className="checkout-container">

      <h1 className="checkout-title">
        Resumen de tu pedido
      </h1>

      <div className="checkout-grid">

        {/* 🛒 LISTA */}
        <div className="checkout-left">

          {cart.map((item) => (

            <div key={item.id} className="checkout-item">

              <div>
                <h3>{item.nombre}</h3>
                <p>S/ {item.precio} x {item.quantity}</p>
              </div>

              <div>
                <p>S/ {item.precio * item.quantity}</p>
              </div>

            </div>

          ))}

        </div>

        {/* 💳 RESUMEN */}
        <div className="checkout-right">

          <div className="checkout-card">

            <h2>Total a pagar</h2>

            <h1>S/ {subtotal}</h1>

            <button className="pay-btn" onClick={handlePay}>
              Pagar ahora
            </button>

          </div>

          {/* 👤 SOLO NOMBRE */}
          <div className="user-card">

            <h3>Comprador</h3>

            <p>
              {user?.nombre}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Checkout;