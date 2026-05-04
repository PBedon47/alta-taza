import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBox,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Perfil() {

  const [user, setUser] = useState<any>(null);
  const [section, setSection] = useState("perfil");

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "null");

    if (!data) {
      navigate("/login");
    } else {
      setUser(data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("usuarioNombre");
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="perfil-dashboard">

      {/* SIDEBAR */}
      <aside className="perfil-sidebar">

        <div className="perfil-user">
          <FaUserCircle size={50} />
          <h3>{user.nombre}</h3>
        </div>

        <ul>
          <li
            className={section === "perfil" ? "active" : ""}
            onClick={() => setSection("perfil")}
          >
            <FaUserCircle /> Mi cuenta
          </li>

          <li
            className={section === "pedidos" ? "active" : ""}
            onClick={() => setSection("pedidos")}
          >
            <FaBox /> Mis pedidos
          </li>

          <li
            className={section === "config" ? "active" : ""}
            onClick={() => setSection("config")}
          >
            <FaCog /> Configuración
          </li>

          <li onClick={handleLogout}>
            <FaSignOutAlt /> Cerrar sesión
          </li>
        </ul>

      </aside>

      {/* CONTENIDO */}
      <main className="perfil-content">

        {section === "perfil" && (
          <div className="perfil-card-pro">
            <h2>Información personal</h2>

            <div className="perfil-info">
              <p><strong>Nombre:</strong> {user.nombre}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>

            <button>Editar perfil</button>
          </div>
        )}

        {section === "pedidos" && (
          <div className="perfil-card-pro">
            <h2>Mis pedidos</h2>

            <div className="pedido-item">
              <p>Café Latte</p>
              <span>S/ 12.00</span>
            </div>

            <div className="pedido-item">
              <p>Capuccino</p>
              <span>S/ 10.00</span>
            </div>
          </div>
        )}

        {section === "config" && (
          <div className="perfil-card-pro">
            <h2>Configuración</h2>

            <button>Cambiar contraseña</button>
            <button>Notificaciones</button>
          </div>
        )}

      </main>

    </div>
  );
}

export default Perfil;