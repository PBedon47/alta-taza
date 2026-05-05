import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Checkout() {

  const {
    cart,
    subtotal
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();

  // 🔐 PROTEGER RUTA
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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

            <button className="pay-btn">
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