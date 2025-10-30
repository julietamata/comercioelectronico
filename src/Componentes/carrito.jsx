import { useContext } from "react";
import { CarritoContext } from "../Componentes/carritocontext.jsx";

function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  // Calcular total
  const total = carrito.reduce((acc, prod) => {
    const precioNumerico = Number(prod.precio.replace("$", ""));
    return acc + precioNumerico;
  }, 0);

  return (
    <div className="carrito-contenedor">
      <h1>🛍️ Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} width="100" />
              <div className="carrito-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  ❌ Eliminar
                </button>
              </div>
            </div>
          ))}

          <hr />
          <h2>Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}

export default Carrito;
