import React, { useEffect } from "react";
import "../index.css"; // si tu CSS principal está ahí

const Notificacion = ({ mensaje, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000); // desaparece en 3 segundos
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div className={`notificacion ${visible ? "mostrar" : ""}`}>
      {mensaje}
    </div>
  );
};

export default Notificacion;
