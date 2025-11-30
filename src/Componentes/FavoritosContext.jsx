import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
    const existe = favoritos.find((p) => p.id === producto.id);
    if (existe) {
      setFavoritos(favoritos.filter((p) => p.id !== producto.id));
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
