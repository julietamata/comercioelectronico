import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import { useParams } from 'react-router-dom';

function Categoria() {
  const { nombreCategoria } = useParams();  // ✅ Ahora sí está bien

  const productos = [
    { id: 1, nombre: "Conjunto deportivo", precio: "$450", imagen: imagen1 },
    { id: 2, nombre: "Blusa roja", precio: "$220", imagen: imagen2 },
    { id: 3, nombre: "Abrigo blanco", precio: "$799", imagen: imagen3 },
  ];

  return (
    <div className="categoria-container">
      <h1>Categoría: {nombreCategoria}</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button className="btn-ver">Ver más</button>
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