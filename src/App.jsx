import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/home.jsx";
import Categoria from "./Componentes/categoria.jsx";
import Navbar from "./Componentes/navbar.jsx";
import Producto from "./Componentes/Producto.jsx";
import Carrito from "./Componentes/carrito.jsx";
import Envio from "./Componentes/Envio.jsx";
import Pago from "./Componentes/Pago.jsx";
import Register from "./Componentes/Register.jsx"
import Login from "./Componentes/Login.jsx"
import Favoritos from "./Componentes/Favoritos.jsx";
import Confirmacion from "./Componentes/Confirmacion.jsx";



import Sidebar from "./Componentes/sidebar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-layout">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:nombreCategoria" element={<Categoria />} />
          <Route path="/producto/:idProducto" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/envio" element={<Envio />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favoritos" element={<Favoritos />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
