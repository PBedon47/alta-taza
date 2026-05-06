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
    <div className="checkout-container">

      <h1>Datos de entrega</h1>

      <input
        placeholder="Dirección"
        value={formData.direccion}
        onChange={(e) =>
          setFormData({ ...formData, direccion: e.target.value })
        }
      />

      <select
        value={formData.metodo_pago}
        onChange={(e) =>
          setFormData({ ...formData, metodo_pago: e.target.value })
        }
      >
        <option value="efectivo">Efectivo</option>
        <option value="yape">Yape</option>
      </select>

      <button onClick={handleConfirmOrder}>
        Confirmar compra
      </button>

    </div>
  );
}

if (step === "boleta") {
  return (
    <div className="checkout-container">

      <h1>Boleta</h1>

      <p>Cliente: {orderData?.user?.nombre}</p>
      <p>Dirección: {orderData?.direccion}</p>
      <p>Pago: {orderData?.metodo_pago}</p>
      <p>Fecha: {orderData?.fecha?.toString()}</p>

      {orderData?.items?.map((item:any) => (
        <div key={item.id}>
          {item.nombre} x {item.quantity}
        </div>
      ))}

      <h2>Total: S/ {orderData.total}</h2>

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