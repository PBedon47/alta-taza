import { Link, useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";
import { registerUser } from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // guardar usuario

      const handleRegister = async () => {
      const res = await registerUser({
        nombre,
        email,
        password
      });

      if (!res.id) {
        alert("Error al registrar usuario");
        return;
      }

      alert("Usuario creado correctamente");

      navigate("/login");
    };

  return (
    <div className="auth-container">

      <form className="auth-form">

        <div className="auth-logo">
          <FaCoffee />
        </div>

        <h2>Crear cuenta</h2>

        <p className="auth-subtitle">
          Regístrate para guardar tus pedidos
        </p>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Registrarme
        </button>

        <p className="auth-link">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>

      </form>

    </div>
  );
}

export default Register;