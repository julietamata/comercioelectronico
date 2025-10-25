import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/home.jsx";
import Categoria from "./Componentes/categoria.jsx";
import Navbar from "./Componentes/navbar.jsx";
import Producto from "./Componentes/Producto.jsx";

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

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
