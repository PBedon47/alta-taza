import { Link, useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";

function Login() {

    const { login } = useAuth();    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    const res = await loginUser({ email, password });

    if (!res.token) {
      alert("Credenciales incorrectas");
      return;
    }

    login(res.user);

    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));

    navigate("/");
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