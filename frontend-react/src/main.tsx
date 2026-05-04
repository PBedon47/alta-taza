import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

const root = document.getElementById("root");

if (!root) throw new Error("Root no encontrado");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/">
    <AuthProvider>
    <CartProvider>
      <ScrollToTop />
      <App />
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);