import React from "react";
import Style from "./searchbar.module.css";
function SearchBar() {
  return (
    <div>
      <label>
        <input
          type="search"
          className={Style.search}
          placeholder="search for food"
        />
      </label>

      <button className={Style.searchButton}>Search</button>
    </div>
  );
}

export default SearchBar;
