import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Pago() {
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState("");
  const [datosTarjeta, setDatosTarjeta] = useState({
    numero: "",
    nombre: "",
    vencimiento: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!metodo) {
      alert("Por favor selecciona un método de pago.");
      return;
    }
    alert("✅ Pago procesado correctamente. ¡Gracias por tu compra!");
    navigate("/confirmacion");

  };

  return (
    <div className="pago-contenedor">
      <h1>💳 Método de pago</h1>

      <form className="pago-formulario" onSubmit={handleSubmit}>
        <label>Selecciona un método:</label>
        <select
          value={metodo}
          onChange={(e) => setMetodo(e.target.value)}
          required
        >
          <option value="">-- Selecciona --</option>
          <option value="tarjeta">Tarjeta de crédito / débito</option>
          <option value="paypal">PayPal</option>
          <option value="transferencia">Transferencia bancaria</option>
        </select>

        {metodo === "tarjeta" && (
          <div className="tarjeta-datos">
            <label>Número de tarjeta:</label>
            <input
              type="text"
              maxLength="16"
              placeholder="1234 5678 9012 3456"
              value={datosTarjeta.numero}
              onChange={(e) =>
                setDatosTarjeta({ ...datosTarjeta, numero: e.target.value })
              }
              required
            />

            <label>Nombre en la tarjeta:</label>
            <input
              type="text"
              placeholder="Como aparece en la tarjeta"
              value={datosTarjeta.nombre}
              onChange={(e) =>
                setDatosTarjeta({ ...datosTarjeta, nombre: e.target.value })
              }
              required
            />

            <div className="tarjeta-fila">
              <div>
                <label>Vencimiento:</label>
                <input
                  type="month"
                  value={datosTarjeta.vencimiento}
                  onChange={(e) =>
                    setDatosTarjeta({
                      ...datosTarjeta,
                      vencimiento: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label>CVV:</label>
                <input
                  type="password"
                  maxLength="3"
                  placeholder="123"
                  value={datosTarjeta.cvv}
                  onChange={(e) =>
                    setDatosTarjeta({ ...datosTarjeta, cvv: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn-confirmar">
          Confirmar pago 🛍️
        </button>
      </form>
    </div>
  );
}

export default Pago;
