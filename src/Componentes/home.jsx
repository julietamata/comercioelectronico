import Sidebar from "../Componentes/sidebar";
import { Link } from "react-router-dom";
import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'
import imagen4 from '../assets/imagen4.jpg'
import imagen5 from '../assets/imagen5.jpg'
import imagen6 from '../assets/imagen6.jpg'
import imagen7 from '../assets/imagen7.jpg'
import imagen8 from '../assets/imagen8.jpg'
import imagen9 from '../assets/imagen9.jpg'
import imagen10 from '../assets/imagen10.jpg'
import imagen11 from '../assets/imagen11.jpg'
import imagen12 from '../assets/imagen12.jpg'




function Home() { 
    return(

<nav>       
  <div className="container">
    <aside>
      <Sidebar/>
    </aside>

    <main className="main-content">
      <div className="imagenes-home">
        <Link to="/producto/1">
        <img className="imagenes" src={imagen1} alt="Producto 1" />
        </Link>
        <Link to="/producto/2">
        <img className="imagenes" src={imagen2} alt="Producto 2" />
        </Link>
        <Link to="/producto/3">
        <img className="imagenes" src={imagen3} alt="Producto 3" />
        </Link>
        <Link to="/producto/4">
        <img className="imagenes" src={imagen4} alt="Producto 4" />
        </Link>
        <Link to="/producto/5">
        <img className="imagenes" src={imagen5} alt="Producto 5" />
        </Link>
        <Link to="/producto/6">
        <img className="imagenes" src={imagen6} alt="Producto 6" />
        </Link>
        <Link to="/producto/7">
        <img className="imagenes" src={imagen7} alt="Producto 7" />
        </Link>
        <Link to="/producto/8">
        <img className="imagenes" src={imagen8} alt="Producto 8" />
        </Link>
        <Link to="/producto/9">
        <img className="imagenes" src={imagen9} alt="Producto 9" />
        </Link>
        <Link to="/producto/10">
        <img className="imagenes" src={imagen10} alt="Producto 10" />
        </Link>
        <Link to="/producto/11">
        <img className="imagenes" src={imagen11} alt="Producto 11" />
        </Link>
        <Link to="/producto/12">
        <img className="imagenes" src={imagen12} alt="Producto 12" />
        </Link>
       

      </div>
    </main>
  </div> 
</nav>

        )

         }



export default Home;

