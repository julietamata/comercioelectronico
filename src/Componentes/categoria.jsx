import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';
import imagen6 from '../assets/imagen6.jpg';
import imagen7 from '../assets/imagen7.jpg';
import imagen8 from '../assets/imagen8.jpg';
import imagen9 from '../assets/imagen9.jpg';
import imagen10 from '../assets/imagen10.jpg';
import imagen11 from '../assets/imagen11.jpg';
import imagen12 from '../assets/imagen12.jpg';

import { useParams, Link } from 'react-router-dom';
import { useContext } from "react";
import { FavoritosContext } from "../Componentes/FavoritosContext.jsx";


function Categoria() {
  const { nombreCategoria } = useParams();
  const { toggleFavorito, favoritos } = useContext(FavoritosContext);

  const esFavorito = (id) => favoritos.some((p) => p.id === id);

  const productos = [
    { id: 1, nombre: "Conjunto deportivo", precio: "$450", imagen: imagen1 },
    { id: 2, nombre: "Blusa roja", precio: "$220", imagen: imagen2 },
    { id: 3, nombre: "Abrigo blanco", precio: "$799", imagen: imagen3 },
    {
    id: 4, nombre: "Camisa gris", precio: "$380",
    imagen: imagen4,
  },
  {
    id: 5,
    nombre: "Saco negro",
    precio: "$720",
   
    imagen: imagen5,
  },
  {
    id: 6,
    nombre: "Chamarra tipo piel",
    precio: "$1260",
   
    imagen: imagen6,
  },
  {
    id: 7,
    nombre: "Conjunto beige",
    precio: "$1340",
    
    imagen: imagen7,
  },
  {
    id: 8,
    nombre: "Crop top blanco",
    precio: "$210",
   
    imagen: imagen8,
  },
  {
    id: 9,
    nombre: "Vestido primaveral",
    precio: "$550",
   
    imagen: imagen9,
  },
  {
    id: 10,
    nombre: "Abrigo beige",
    precio: "$690",
   
    imagen: imagen10,
  },
  {
    id: 11,
    nombre: "Saco largo azul",
    precio: "$899",
  
    imagen: imagen11,
  },
  {
    id: 12,
    nombre: "Suéter crochet",
    precio: "$360",
   
    imagen: imagen12,
  },

  ];


  
   return (
    <div className="categoria-grid-page">
      <h1 className="categoria-grid-titulo">
        {nombreCategoria.charAt(0).toUpperCase() + nombreCategoria.slice(1)}
      </h1>

      <div className="categoria-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="categoria-grid-item">

            <img src={producto.imagen} alt={producto.nombre} className="categoria-grid-img" />

            {/* ❤️ Botón de favorito */}
            <button
              className="favorito-btn"
              onClick={() => toggleFavorito(producto)}
            >
              {esFavorito(producto.id) ? "❤️" : "🤍"}
            </button>

            <div className="categoria-grid-info">
              <h3>{producto.nombre}</h3>
              <p className="precio">{producto.precio}</p>
            </div>

            <Link to={`/producto/${producto.id}`} className="categoria-grid-btn">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categoria;





//  <h2>Productos por categoría </h2>
//       <div class="products">
//         <div class="product-card">
          
//           <h4>Producto 1</h4>
//           <p>$25.00</p>
//           <button>Agregar al carrito</button>
//         </div>
//         <div class="product-card">
          
//           <h4>Producto 2</h4>
//           <p>$40.00</p>
//           <button>Agregar al carrito</button>
//         </div>
//         <div class="product-card">
          
//           <h4>Producto 3</h4>
//           <p>$15.00</p>
//           <button>Agregar al carrito</button>
//         </div>

//         <div class="product-card">
          
//           <h4>Producto 4</h4>
//           <p>$15.00</p>
//           <button>Agregar al carrito</button>
//         </div>

//       </div>