import Head from "next/head";
import Foods from "./components/foods/Foods";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import Style from "../styles/Home.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Mobile from "./components/mobilesidebar/Mobile";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [mobileSideBar, setMobileSideBar] = useCycle(false, true);

  const showSideBar = () => {
    setMobileSideBar(true);
  };
  const hideSideBar = () => {
    setMobileSideBar(false);
  };

  return (
    <div>
      <Head>
        <title>Cook It</title>
        <meta name="description" content="learn to cook" />
        <link rel="icon" href="/assets/Vector.png" />
      </Head>

      <main>
        <div className={Style.searchContainer}>
          <SearchBar setShowSideBar={showSideBar} />
        </div>
        <div>
          <Header />
        </div>
        <div className={Style.sideAndFood}>
          <div className={Style.sidebar}>
            <Sidebar />
          </div>
          <div className={Style.food}>
            <Foods />
          </div>
        </div>
      </main>
      <Mobile mobileSideBar={mobileSideBar} setCloseSidebar={hideSideBar} />
    </div>
  );
}
