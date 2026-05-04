import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import {
  lazy,
  Suspense,
  useEffect
} from "react";

import Perfil from "./pages/Perfil";

/* PÁGINAS */

const Home = lazy(() =>
  import("./pages/Home")
);

const Menu = lazy(() =>
  import("./pages/Menu")
);

const Login = lazy(() =>
  import("./pages/Login")
);

const Register = lazy(() =>
  import("./pages/Register")
);

const Checkout = lazy(() =>
  import("./pages/Checkout")
);

const Admin = lazy(() =>
  import("./pages/Admin")
);

function App() {

  const navigate = useNavigate();

  useEffect(() => {

    const navigationEntries =
      window.performance.getEntriesByType("navigation");

    if (
      navigationEntries.length > 0 &&
      (navigationEntries[0] as PerformanceNavigationTiming).type === "reload"
    ) {
      navigate("/");
    }

  }, []);

  return (

    <Suspense fallback={<h2>Cargando...</h2>}>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/perfil" element={<Perfil />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </Suspense>

  );
}

export default App;