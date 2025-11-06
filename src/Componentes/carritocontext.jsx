import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    console.log("carrito:", nuevoCarrito);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito);
    console.log("carrito actualizado:", nuevoCarrito);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
