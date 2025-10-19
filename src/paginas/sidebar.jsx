import React, { useState } from "react";


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
          <li><a href="#">Blusas</a></li>
          <li><a href="#">Chamarras</a></li>
          <li><a href="#">Crochet</a></li>
          <li><a href="#">Vestidos</a></li>
        </ul>
      )}

      <h3 onClick={() => toggleMenu("bottom")}>Bottom</h3>
      {activeMenu === "bottom" && (
        <ul>
          <li><a href="#">Faldas</a></li>
          <li><a href="#">Pantalones</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Jeans</a></li>
        </ul>
      )}

      <h3 onClick={() => toggleMenu("accesorios")}>Accesorios</h3>
      {activeMenu === "accesorios" && (
        <ul>
          <li><a href="#">Bolsos</a></li>
          <li><a href="#">Zapatos</a></li>
          <li><a href="#">Bisutería</a></li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
