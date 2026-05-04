import { Link, useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {

    const { login } = useAuth();    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
        alert("No existe usuario, regístrate primero");
        return;
    }

    if (storedUser.email === email && storedUser.password === password) {

        login(storedUser);

        navigate("/");

    } else {
        alert("Datos incorrectos");
    }
    };

  return (
    <div className="auth-container">

      <form className="auth-form">

        <div className="auth-logo">
          <FaCoffee />
        </div>

        <h2>Bienvenido</h2>

        <p className="auth-subtitle">
          Inicia sesión para continuar
        </p>

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

        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>

        <p className="auth-link">
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;