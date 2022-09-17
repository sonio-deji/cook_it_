import React from "react";
import Style from "./searchbar.module.css";
import Image from "next/image";
function SearchBar(props) {
  return (
    <div>
      <div className={Style.searchContainer}>
        <div className={Style.inputSection}>
          <label className={Style.label}>
            <input
              type="search"
              className={Style.search}
              placeholder="Search for food"
            />
            <div className={Style.searchIcon}>
              <Image src={"/assets/search.png"} width="28px" height={"28px"} />
            </div>
            <div className={Style.micIcon}>
              <Image src={"/assets/mic.png"} width="19px" height={"19px"} />
            </div>
          </label>

          <button className={Style.searchButton}>Search</button>
        </div>
      </div>
      <div className={Style.userArea}>
        <div className={Style.business}>
          <Image src={"/assets/Vector.png"} width="43.4px" height={"43.4px"} />
          <h2 className={Style.cook}>
            Cook <span className={Style.it}>IT</span>
          </h2>
        </div>
        <svg
          width="27"
          height="34"
          viewBox="0 0 44 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1211 9.52946C22.9788 9.52946 25.0166 10.1068 25.0166 10.1068C30.5371 11.4535 34.4229 16.8666 34.4229 22.9781V39.4281L35.5516 40.6352L36.4947 41.6436H7.50532L8.4484 40.6352L9.57711 39.4281V22.9781C9.57711 16.8667 13.4629 11.4535 18.9834 10.1068C18.9834 10.1068 21.1683 9.52946 21.8789 9.52946M22 0.1875C19.8685 0.1875 18.2389 1.93005 18.2389 4.20937V6.08612C11.0926 7.82932 5.70211 14.8003 5.70211 22.9781V37.725L0.6875 43.0875V45.7687H43.3125V43.0875L38.2979 37.725V22.9781C38.2979 14.8003 32.9073 7.82932 25.761 6.08612V4.20937C25.761 1.93005 24.1315 0.1875 22 0.1875ZM27.0146 48.45H16.9853C16.9853 51.3995 19.2416 53.8125 22 53.8125C24.7584 53.8125 27.0146 51.3995 27.0146 48.45Z"
            fill="black"
          />
        </svg>
        <div className={Style.userImage}>
          <Image
            src={"/assets/Ellipse125.png"}
            width={"66px"}
            height={"66px"}
          />
        </div>
        <h2 className={Style.user}>Kate</h2>
      </div>
      <div className={Style.hamburger} onClick={props.setShowSideBar}>
        <Image
          src={"/assets/hamburger.png"}
          width="46px"
          height={"46px"}
          layout="fixed"
        />
      </div>
    </div>
  );
}

export default SearchBar;
