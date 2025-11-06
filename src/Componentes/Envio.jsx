import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // asegúrate de tener estilos ahí

function Envio() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Dirección guardada correctamente.");
    navigate("/pago"); // luego agregas la página de pago
  };

  return (
    <div className="envio-page">
      <div className="envio-card">
        <h1>📦 Dirección de envío</h1>
        <form className="envio-form" onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Dirección</label>
          <input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />

          <label>Ciudad</label>
          <input
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />

          <label>Código postal</label>
          <input
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
          />

          <label>Teléfono</label>
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <button className="btn-confirmar" type="submit">
            Continuar al pago 💳
          </button>
        </form>
      </div>
    </div>
  );
}

export default Envio;
