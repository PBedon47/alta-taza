import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { createOrder } from "../services/api";

function Checkout() {

  const {cart, subtotal} = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

 const handlePay = async () => {

  if (!user) {
    navigate("/login");
    return;
  }

  if (cart.length === 0) {
    alert("Carrito vacío");
    return;
  }

  const currentUser = user;

  const order = {
    user_id: currentUser.id,
    total: subtotal,
    items: cart
  };

  const res = await createOrder(order);

  if (res.id) {
    alert("Compra realizada con éxito");
  }
};



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