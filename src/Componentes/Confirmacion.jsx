import { useNavigate } from "react-router-dom";
import "../index.css";

function Confirmacion() {
  const navigate = useNavigate();

  return (
    <div className="confirmacion-contenedor">
      <div className="confirmacion-card">
        <h1>🎉 ¡Compra confirmada!</h1>
        <p>
          Gracias por tu pedido 🛒.  
          Tu compra ha sido procesada correctamente y recibirás un correo con los detalles del envío.
        </p>

        <div className="confirmacion-icono">✅</div>

        <button
          className="btn-volver"
          onClick={() => navigate("/")}
        >
          Volver al inicio 🏠
        </button>
      </div>
    </div>
  );
}

export default Confirmacion;
