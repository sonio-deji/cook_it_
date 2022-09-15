import React, { useState } from "react";
import Style from "./header.module.css";

const headerSelection = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Popular",
  },
  {
    id: 3,
    title: "Intercontinental",
  },
  {
    id: 4,
    title: "Nigerian Dish",
  },
];

function Header() {
  const [background, setbackground] = useState(false);

  //   const selected = (selectedItem) => {
  //     setbackground({ selectedItem });
  //   };
  return (
    <div className={Style.headerContainer}>
      {headerSelection.map((selection, i) => {
        return (
          <button key={i} className={Style.headerSelection}>
            {selection.title}
          </button>
        );
      })}
    </div>
  );
}

export default Header;
