import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
      alert("Por favor llena todos los campos.");
      return;
    }

    alert("Registro exitoso (simulado)");
  };

  return (
    <div className="usuario-container">
      <div className="usuario-card">
        <h2>Crear cuenta</h2>

        <form className="usuario-form" onSubmit={handleRegister}>
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="correo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Crea una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="usuario-btn" type="submit">
            Registrarme
          </button>
        </form>

        <p className="usuario-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
