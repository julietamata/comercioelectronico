import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../Componentes/carritocontext.jsx";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const navigate = useNavigate();
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState(false);
  const [tipo, setTipo] = useState("");

  const total = carrito.reduce((acc, prod) => {
    const precioNumerico = Number(prod.precio.replace("$", ""));
    return acc + precioNumerico;
  }, 0);

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

  const handleEliminar = (id) => {
    const producto = carrito.find((p) => p.id === id);
    eliminarDelCarrito(id);
    mostrarNotificacion(`"${producto.nombre}" fue eliminado del carrito.`, "error");
  };

  return (
    <div className="carrito-container">

      <h1 className="carrito-titulo">🛍 Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-lista">
            {carrito.map((producto) => (
              <div key={producto.id} className="carrito-item">
                
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="carrito-img"
                />

                <div className="carrito-info">
                  <h3>{producto.nombre}</h3>
                  <p className="carrito-precio">{producto.precio}</p>

                  <button
                    className="carrito-eliminar"
                    onClick={() => handleEliminar(producto.id)}
                  >
                    ❌ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            Total: <span>${total}</span>
          </div>

          <button
            className="btn-checkout"
            onClick={() => navigate("/envio")}
          >
            🚚 Ir a dirección de envío
          </button>
        </>
      )}

      {/* Notificación flotante */}
      <div className={`notificacion ${visible ? "mostrar" : ""} ${tipo}`}>
        {mensaje}
      </div>
    </div>
  );
}

export default Carrito;
