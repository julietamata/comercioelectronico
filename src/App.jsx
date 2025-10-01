import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <header class="navbar">
    <div class="logo">Mi comercio electrónico</div>
    <nav class="nav-links">
      <a href="#">Inicio</a>
      <a href="#">Carrito</a>
      <a href="#">Favoritos</a>
      <a href="#">Usuario</a>
      <a href="#">Búsqueda</a>
    </nav>
  </header>  
        
      <div class="container">
    
    <aside class="sidebar">
      <h3>Categorías</h3>
      <ul>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
        <li><a href="#">Categoría 4</a></li>
        <li><a href="#">Categoría 5</a></li>
      </ul>
    </aside>

   
    <main class="main-content">
      <h2>Productos por categoría </h2>
      <div class="products">
        <div class="product-card">
          
          <h4>Producto 1</h4>
          <p>$25.00</p>
          <button>Agregar al carrito</button>
        </div>
        <div class="product-card">
          
          <h4>Producto 2</h4>
          <p>$40.00</p>
          <button>Agregar al carrito</button>
        </div>
        <div class="product-card">
          
          <h4>Producto 3</h4>
          <p>$15.00</p>
          <button>Agregar al carrito</button>
        </div>

        <div class="product-card">
          
          <h4>Producto 4</h4>
          <p>$15.00</p>
          <button>Agregar al carrito</button>
        </div>

      </div>
    </main>
  </div>
      
    </>
  )
}

export default App
