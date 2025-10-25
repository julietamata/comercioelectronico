import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      <h3 onClick={() => toggleMenu("tops")}>Tops</h3>
      {activeMenu === "tops" && (
        <ul>
          <li><Link to="/categoria/blusas">Blusas</Link></li>
          <li><Link to="/categoria/chamarras">Chamarras</Link></li>
          <li><Link to="/categoria/crochet">Crochet</Link></li>
          <li><Link to="/categoria/vestidos">Vestidos</Link></li>
        </ul>
      )}

      <h3 onClick={() => toggleMenu("bottom")}>Bottom</h3>
      {activeMenu === "bottom" && (
        <ul>
          <li><Link to="/categoria/faldas">Faldas</Link></li>
          <li><Link to="/categoria/pantalones">Pantalones</Link></li>
          <li><Link to="/categoria/shorts">Shorts</Link></li>
          <li><Link to="/categoria/jeans">Jeans</Link></li>
        </ul>
      )}

      <h3 onClick={() => toggleMenu("accesorios")}>Accesorios</h3>
      {activeMenu === "accesorios" && (
        <ul>
          <li><Link to="/categoria/bolsos">Bolsos</Link></li>
          <li><Link to="/categoria/zapatos">Zapatos</Link></li>
          <li><Link to="/categoria/bisuteria">Bisutería</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
