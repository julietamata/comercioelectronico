import { useContext } from "react";
import { FavoritosContext } from "./FavoritosContext";
import { Link } from "react-router-dom";

function Favoritos() {
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);

  if (favoritos.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>
      No tienes favoritos todavía ❤️
    </h2>;
  }

  return (
    <div className="categoria-grid-page">
      <h1 className="categoria-grid-titulo">Tus favoritos ❤️</h1>

      <div className="categoria-grid">
        {favoritos.map((producto) => (
          <div key={producto.id} className="categoria-grid-item">

            <img src={producto.imagen} alt={producto.nombre} className="categoria-grid-img" />

            <button
              className="favorito-btn"
              onClick={() => toggleFavorito(producto)}
            >
              ❤️
            </button>

            <div className="categoria-grid-info">
              <h3>{producto.nombre}</h3>
              <p className="precio">{producto.precio}</p>
            </div>

            <Link to={`/producto/${producto.id}`} className="categoria-grid-btn">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
