import { useParams } from "react-router-dom";
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../Componentes/carritocontext.jsx";
import "../index.css"; // asegúrate de tener el CSS del toast aquí

function Producto() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { idProducto } = useParams();

  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState(false);
  const [tipo, setTipo] = useState(""); // exito o error

  const mostrarNotificacion = (texto, tipoNoti) => {
    setMensaje(texto);
    setTipo(tipoNoti);
    setVisible(true);
  };

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Simulación de productos
  const productos = [
    {
      id: 1,
      nombre: "Conjunto deportivo",
      precio: "$450",
      descripcion: "Conjunto cómodo y casual para cualquier ocasión.",
      imagen: imagen1,
    },
    {
      id: 2,
      nombre: "Blusa roja",
      precio: "$220",
      descripcion: "Blusa elegante para eventos casuales o formales.",
      imagen: imagen2,
    },
    {
      id: 3,
      nombre: "Abrigo blanco",
      precio: "$799",
      descripcion: "Abrigo para invierno con diseño moderno.",
      imagen: imagen3,
    },
  ];

  const producto = productos.find((p) => p.id == idProducto);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    mostrarNotificacion(`"${producto.nombre}" fue agregado al carrito.`, "exito");
  };

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
          <button className="btn-carrito" onClick={handleAgregar}>
            🛒 Agregar al carrito
          </button>
          <button className="btn-favoritos">Agregar a favoritos ❤️</button>
        </div>
      </div>

      {/* Notificación flotante */}
      <div className={`notificacion ${visible ? "mostrar" : ""} ${tipo}`}>
        {mensaje}
      </div>
    </div>
  );
}

export default Producto;
