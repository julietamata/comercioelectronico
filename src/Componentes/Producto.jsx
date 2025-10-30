import { useParams } from "react-router-dom";
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import { useContext } from "react";
import { CarritoContext } from "../Componentes/carritocontext.jsx";


function Producto() {

  const { agregarAlCarrito } = useContext(CarritoContext)
  
  const { idProducto } = useParams();

  // Simulación de productos (más adelante esto vendrá de una API o base de datos)
  const productos = [
    { id: 1, nombre: "Conjunto deportivo", precio: "$450", descripcion: "Conjunto cómodo y casual para cualquier ocasión.", imagen: imagen1 },
    { id: 2, nombre: "Blusa roja", precio: "$220", descripcion: "Blusa elegante para eventos casuales o formales.", imagen: imagen2 },
    { id: 3, nombre: "Abrigo blanco", precio: "$799", descripcion: "Abrigo para invierno con diseño moderno.", imagen: imagen3 },
  ];

  // Encontrar producto según el ID
  const producto = productos.find((p) => p.id == idProducto);

  // Si no existe producto
  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="producto-detalle">
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">{producto.precio}</p>
        <p className="producto-descripcion">{producto.descripcion}</p>

        <label>Talla:</label>
        <select>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>

        <div className="producto-botones">
          
          <button
            className="btn-carrito"
            onClick={() => agregarAlCarrito(producto)}>
            
            Agregar al carrito
          
          </button>


          <button className="btn-favoritos">Agregar a favoritos ❤️</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
