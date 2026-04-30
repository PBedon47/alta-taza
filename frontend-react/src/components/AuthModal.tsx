import { Link } from "react-router-dom";

type AuthModalProps = {
  onClose: () => void;
};

function AuthModal({ onClose }: AuthModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div
        className="auth-modal"
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <h2>¿Deseas iniciar sesión?</h2>

        <p>Para continuar con tu pedido</p>

        <div className="auth-buttons">
          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>

          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default AuthModal;