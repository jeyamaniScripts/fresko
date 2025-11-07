import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import router from "./Router.jsx";
import { CartProvider } from "./provider/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter router={router}>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
