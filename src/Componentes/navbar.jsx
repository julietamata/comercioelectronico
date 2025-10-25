import { Link } from "react-router-dom";
import home from '../assets/home.svg'
import buscar from '../assets/buscar.svg'
import carrito from '../assets/carrito.svg'
import favoritos from '../assets/favoritos.svg'
import usuario from '../assets/usuario.svg'


function Navbar() {
  return (
    <nav>


<header class="navbar">
            <div class="logo"> JYS Fashion</div>

            <nav class="nav-links">
            <Link to={"/"}><a href="#"> 
            <img class='iconos' src={home} alt="Inicio" />
            </a></Link> |{" "}
            
            <a href="#"> 
            <img class='iconos' src={carrito} alt="Carrito" />
            </a>
            <a href="#"> 
            <img class='iconos' src={favoritos} alt="Favoritos" />
            </a>
            <a href="#"> 
            <img class='iconos' src={usuario} alt="Usuario" />
            </a>
            <a href="#"> 
            <img class='iconos' src={buscar} alt="Buscar" />
            </a>

            </nav>
        </header>  


      
      <Link to="/productos">Productos</Link>
    </nav>
  );
}

export default Navbar;
