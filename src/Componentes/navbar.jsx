import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import home from '../assets/home.svg';
import buscar from '../assets/buscar.svg';
import carrito from '../assets/carrito.svg';
import favoritos from '../assets/favoritos.svg';
import usuario from '../assets/usuario.svg';

function Navbar() {
  const [busquedaActiva, setBusquedaActiva] = useState(false);
  const [texto, setTexto] = useState("");

  const navigate = useNavigate();

  const categoriasValidas = [
    "conjuntos",
    "blusas",
    "abrigos",
    "vestidos",
    "camisas",
    "sacos",
    "sueteres",
    "crop",
    "ropa"
  ];

  const manejarSubmit = (e) => {
    e.preventDefault();

    const normalizado = texto.trim().toLowerCase();

    if (categoriasValidas.includes(normalizado)) {
      navigate(`/categoria/${normalizado}`);
      setTexto("");
      setBusquedaActiva(false);
    } else {
      alert("Categoría no encontrada");
    }
  };

  return (
    <header className="navbar">
      <div className="logo">JYS Fashion</div>

      <nav className="nav-links">
        <Link to="/">
          <img className="iconos" src={home} alt="Inicio" />
        </Link>

        <Link to="/carrito">
          <img className="iconos" src={carrito} alt="Carrito" />
        </Link>

        <Link to="/favoritos">
          <img className="iconos" src={favoritos} alt="Favoritos" />
        </Link>

        <Link to="/login">
          <img className="iconos" src={usuario} alt="Login" />
        </Link>

        {/* 🔍 Ícono que activa la barra */}
        <button
          className="btn-buscar"
          onClick={() => setBusquedaActiva(!busquedaActiva)}
        >
          <img className="iconos" src={buscar} alt="Buscar" />
        </button>

        {/* Barra de búsqueda expandible */}
        <form onSubmit={manejarSubmit} className="search-container">
          <input
            type="text"
            className={`search-input ${busquedaActiva ? "activo" : ""}`}
            placeholder="Buscar categoría..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}

export default Navbar;





// import { Link } from "react-router-dom";
// import home from '../assets/home.svg';
// import buscar from '../assets/buscar.svg';
// import carrito from '../assets/carrito.svg';
// import favoritos from '../assets/favoritos.svg';
// import usuario from '../assets/usuario.svg';

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="logo">JYS Fashion</div>

//       <nav className="nav-links">
//         <Link to="/">
//           <img className="iconos" src={home} alt="Inicio" />
//         </Link>

//         <Link to="/carrito">
//           <img className="iconos" src={carrito} alt="Carrito" />
//         </Link>

//         <Link to="/favoritos">
//           <img className="iconos" src={favoritos} alt="Favoritos" />
//         </Link>

//         <Link to="/login">
//           <img className="iconos" src={usuario} alt="Login" />
//         </Link>

//         <Link to="/buscar">
//           <img className="iconos" src={buscar} alt="Buscar" />
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
