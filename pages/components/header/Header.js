import React, { useState } from "react";
import Style from "./header.module.css";

const headerSelection = ["All", "Popular", "Intercontinental", "Nigerian Dish"];

function Header() {
  const [background, setbackground] = useState(null);

  const selected = (selectedItem) => {
    setbackground(selectedItem);
  };
  return (
    <div>
      {/* <div className="flex">
        {headerSelection.map((selection, i) => {
          return (
            <button
              className={`${Style.headerSelection}`background === selection ? 'bg-black' : 'bg-white' }
              key={i}
              onClick={selected(selection)}
            >
              {selection}
            </button>
          );
        })}
      </div> */}
    </div>
  );
}

export default Header;
