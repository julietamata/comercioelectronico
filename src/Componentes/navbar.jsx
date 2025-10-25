import { Link } from "react-router-dom";
import home from '../assets/home.svg';
import buscar from '../assets/buscar.svg';
import carrito from '../assets/carrito.svg';
import favoritos from '../assets/favoritos.svg';
import usuario from '../assets/usuario.svg';

function Navbar() {
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

        <Link to="/usuario">
          <img className="iconos" src={usuario} alt="Usuario" />
        </Link>

        <Link to="/buscar">
          <img className="iconos" src={buscar} alt="Buscar" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
