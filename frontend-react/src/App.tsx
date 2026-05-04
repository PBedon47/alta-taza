import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Perfil from "./pages/Perfil";

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

  );
}

export default App;