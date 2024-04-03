import React from "react";
import menuList from "../helpers/menuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {menuList.map((item) => {
          return (
            <MenuItem
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
            ></MenuItem>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
