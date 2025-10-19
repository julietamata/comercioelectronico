import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imagen1 from '../src/assets/imagen1.jpg'
import imagen2 from '../src/assets/imagen2.jpg'
import imagen3 from '../src/assets/imagen3.jpg'
import home from '../src/assets/home.svg'
import buscar from '../src/assets/buscar.svg'
import carrito from '../src/assets/carrito.svg'
import favoritos from '../src/assets/favoritos.svg'
import usuario from '../src/assets/usuario.svg'
import Sidebar from "../src/paginas/sidebar.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <header class="navbar">
    <div class="logo"> JYS Fashion</div>

    <nav class="nav-links">
      <a href="#"> 
      <img class='iconos' src={home} alt="Inicio" />
      </a>
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
        
      
      <div class="container">
    
    
 
    <aside>
        <Sidebar/>
      </aside>
   
    <main class="main-content">
     
    <div>

      
    <img class="imagenes" src={imagen1} alt="" />
    <img class="imagenes" src={imagen2} alt="" />
    <img class="imagenes" src={imagen3} alt="" />
    </div>


    </main>
  </div>
      
    </>
  )
}

export default App
