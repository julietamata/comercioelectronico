import { useParams } from "react-router-dom";

import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";
import imagen6 from "../assets/imagen6.jpg";
import imagen7 from "../assets/imagen7.jpg";
import imagen8 from "../assets/imagen8.jpg";
import imagen9 from "../assets/imagen9.jpg";
import imagen10 from "../assets/imagen10.jpg";
import imagen11 from "../assets/imagen11.jpg";
import imagen12 from "../assets/imagen12.jpg";

import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../Componentes/carritocontext.jsx";
import { useFavoritos } from "../Componentes/FavoritosContext.jsx";


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
  {
    id: 4,
    nombre: "Camisa gris",
    precio: "$380",
    descripcion: "Camisa formal",
    imagen: imagen4,
  },
  {
    id: 5,
    nombre: "Saco negro",
    precio: "$720",
    descripcion: "Saco Negro elegante",
    imagen: imagen5,
  },
  {
    id: 6,
    nombre: "Chamarra tipo piel",
    precio: "$1260",
    descripcion: "Chamarra estilo piel sinténtica",
    imagen: imagen6,
  },
  {
    id: 7,
    nombre: "Conjunto beige",
    precio: "$1340",
    descripcion: "Saco y falda beige elegante con caída suave.",
    imagen: imagen7,
  },
  {
    id: 8,
    nombre: "Crop top blanco",
    precio: "$210",
    descripcion: "Top básico para combinar con cualquier estilo.",
    imagen: imagen8,
  },
  {
    id: 9,
    nombre: "Vestido primaveral",
    precio: "$550",
    descripcion: "Vestido fresco con estampado natural.",
    imagen: imagen9,
  },
  {
    id: 10,
    nombre: "Abrigo beige",
    precio: "$690",
    descripcion: "Abrigo beige de pana",
    imagen: imagen10,
  },
  {
    id: 11,
    nombre: "Saco largo azul",
    precio: "$899",
    descripcion: "Saco Azul formal con botones medios",
    imagen: imagen11,
  },
  {
    id: 12,
    nombre: "Suéter crochet",
    precio: "$360",
    descripcion: "Suéter suave con tono pastel tendencia 2025.",
    imagen: imagen12,
  },
];





  const producto = productos.find((p) => p.id == idProducto);
  const { favoritos, toggleFavorito } = useFavoritos();

  const esFavorito = favoritos.some((p) => p.id === producto.id);




  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    mostrarNotificacion(`"${producto.nombre}" fue agregado al carrito.`, "exito");
  };


 return (
  <div className="container product-page">

    <div className="producto-card">

      {/* Imagen del producto */}
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      {/* Información */}
      <div className="producto-info">
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">{producto.precio}</p>
        <p className="producto-descripcion">{producto.descripcion}</p>

        <label className="producto-label">
          Talla:
          <select className="producto-select">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </label>

        <div className="producto-botones">
          <button className="btn-carrito" onClick={handleAgregar}>
            🛒 Agregar al carrito
          </button>

          <button
            className="btn-favoritos"
            onClick={() => {
              toggleFavorito(producto);
              mostrarNotificacion(
                esFavorito
                  ? `"${producto.nombre}" fue eliminado de favoritos.`
                  : `"${producto.nombre}" fue agregado a favoritos ❤️.`,
                "exito"
              );
            }}
          >
            {esFavorito ? "💔 Quitar de favoritos" : "❤️ Agregar a favoritos"}
        </button>




        </div>
      </div>
    </div>

    {/* Notificación flotante (tu toast) */}
    <div className={`notificacion ${visible ? "mostrar" : ""} ${tipo}`}>
      {mensaje}
    </div>
  </div>
);


  
}

export default Producto;
