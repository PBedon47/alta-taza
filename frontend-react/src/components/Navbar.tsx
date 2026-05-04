import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

type NavbarProps = {
  cantidad: number;
  onOpenCart: () => void;
};

function Navbar({ cantidad, onOpenCart }: NavbarProps) {

  const [nombre, setNombre] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLLIElement | null>(null);

  const navigate = useNavigate();

/* CARGAR USUARIO AL INICIAR */
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    setNombre(user?.nombre || null);
    }, []);

    /* ESCUCHAR LOGIN / REGISTER */
    useEffect(() => {
    const updateUser = () => {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        setNombre(user?.nombre || null);
    };

    window.addEventListener("userChanged", updateUser);

    return () => {
        window.removeEventListener("userChanged", updateUser);
    };
    }, []);

  /* CERRAR DROPDOWN AL HACER CLICK FUERA */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("user"); // 👈 clave correcta

    setNombre(null);
    setOpenMenu(false);

    window.dispatchEvent(new Event("userChanged"));

    navigate("/");
    };

  return (
    <nav className="navbar">

      <h1>Alta Taza</h1>

      <ul>

        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>
            Menú
          </NavLink>
        </li>

        {/* USUARIO */}
        <li className="user-section" ref={menuRef}>

          {nombre ? (
            <>
              <div
                className="user-box"
                onClick={(e) => {
                    e.stopPropagation(); 
                    setOpenMenu(!openMenu);
                }}
                >
                <FaUserCircle />
                <span>{nombre}</span>
              </div>

              {openMenu && (
                <div
                    className={`dropdown ${openMenu ? "show" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => navigate("/perfil")}>
                    Mi perfil
                    </button>

                    <button onClick={handleLogout}>
                    Cerrar sesión
                    </button>
                </div>
                )}
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Acceso
            </NavLink>
          )}

        </li>

      </ul>

      {/* CARRITO */}
      <button className="cart-btn" onClick={onOpenCart}>
        <FaShoppingCart />
        <span>{cantidad}</span>
      </button>

    </nav>
  );
}

export default Navbar;