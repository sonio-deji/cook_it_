import React from "react";
import Style from "./mobile.module.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const sidebarList = [
  {
    id: 1,
    name: "Home",
    image: "/assets/Group.png",
  },
  {
    id: 2,
    name: "Profile",
    image: "/assets/InnerPluginIframe.png",
  },
  {
    id: 3,
    name: "Notifications",
    image: "/assets/InnerPluginIframeOne.png",
  },
  {
    id: 4,
    name: "Uploads",
    image: "/assets/GroupOne.png",
  },
  {
    id: 5,
    name: "Settings",
    image: "/assets/InnerPluginIframeTwo.png",
  },
];
function Mobile(props) {
  return (
    <div>
      <AnimatePresence>
        {props.mobileSideBar && (
          <motion.div
            className={Style.sidebarMain}
            initial={{ width: 0 }}
            animate={{
              width: 380,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <div className={Style.sidebar}>
              <div>
                <div className={Style.close} onClick={props.setCloseSidebar}>
                  <Image
                    src={"/assets/close.png"}
                    width={"28px"}
                    height={"28px"}
                    layout="fixed"
                  />
                </div>
                <div className={Style.userArea}>
                  <div className={Style.userImage}>
                    <Image
                      src={"/assets/Ellipse125.png"}
                      width={"88px"}
                      height={"88px"}
                      layout="fixed"
                    />
                  </div>
                  <h2 className={Style.user}>Kate</h2>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Mobile;
