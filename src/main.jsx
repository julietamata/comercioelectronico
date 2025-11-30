import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CarritoProvider } from "./Componentes/carritocontext.jsx";
import { FavoritosProvider } from "./Componentes/FavoritosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarritoProvider>
      <FavoritosProvider>
      <App />
      </FavoritosProvider>
    </CarritoProvider>
  </StrictMode>
);
