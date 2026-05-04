import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

const root = document.getElementById("root");

if (!root) throw new Error("Root no encontrado");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/">
    <CartProvider>
      <ScrollToTop />
      <App />
    </CartProvider>
  </BrowserRouter>
);