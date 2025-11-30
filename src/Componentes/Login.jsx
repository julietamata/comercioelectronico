import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de login (puedo ayudarte a hacerlo real después)
    if (email === "" || password === "") {
      alert("Por favor llena todos los campos.");
      return;
    }

    alert("Inicio de sesión exitoso (simulado)");
  };

  return (
    <div className="usuario-container">
      <div className="usuario-card">
        <h2>Iniciar Sesión</h2>

        <form className="usuario-form" onSubmit={handleLogin}>
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="usuario-btn" type="submit">
            Entrar
          </button>
        </form>

        <p className="usuario-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
