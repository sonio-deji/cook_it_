import React from "react";
import Style from "./sidebar.module.css";
import Image from "next/image";

const sidebarList = [
  {
    id: 1,
    name: "Home",
    image: "/assets/Group.png",
  },
  {
    id: 2,
    name: "Profile",
    image: "/assets/Inner Plugin Iframe.png",
  },
  {
    id: 3,
    name: "Notifications",
    image: "/assets/Inner Plugin Iframe(1).png",
  },
  {
    id: 4,
    name: "Uploads",
    image: "/assets/Group(1).png",
  },
  {
    id: 5,
    name: "Settings",
    image: "/assets/Inner Plugin Iframe(2).png",
  },
];

function Sidebar(props) {
  return (
    <div>
      <div className={Style.sidebarMain}>
        <div className={Style.sidebar}>
          <div>
            <div className={Style.business}>
              <Image
                src={"/assets/Vector.png"}
                width="43.4px"
                height={"43.4px"}
              />
              <h2 className={Style.cook}>
                Cook <span className={Style.it}>IT</span>
              </h2>
            </div>
            <div className={Style.sidebarSection}>
              {sidebarList.map((sidebar, i) => {
                return (
                  <div key={i}>
                    <div className={Style.sidebarList}>
                      <Image
                        src={sidebar.image}
                        width="26px"
                        height={"26px"}
                        layout="fixed"
                      />
                      <p className={Style.sidebarTitle}> {sidebar.name}</p>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={Style.sidebarFooter}>
            <div className={Style.sidebarFooterList}>
              <Image
                src={"/assets/help.png"}
                width="26px"
                height={"26px"}
                layout="fixed"
              />
              <p className={Style.sidebarTitle}>Help</p>
            </div>
            <hr className={Style.hrOne} />
            <div className={Style.sidebarFooterListTwo}>
              <Image
                src={"/assets/logout.png"}
                width="26px"
                height={"26px"}
                layout="fixed"
              />
              <p className={Style.sidebarTitle}>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
