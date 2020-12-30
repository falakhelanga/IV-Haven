import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Footer from "./LayOutComps/Footer";
import Main from "./LayOutComps/Main";
import NavBar from "./LayOutComps/NavBar";
import OurService from "./components/OurService";
import Nurses from "./components/Nurses";

const LayOut = () => {
  const [menuClose, setMenuClose] = useState(true);
  const handleClose = (value) => {
    console.log(value);
    setMenuClose(value);
  };
  return (
    <>
      <SideDrawer menuClose={menuClose} handleClose={handleClose} />
      <NavBar handleClose={handleClose} />
      <Main>
        <Header />
        <About />
        <OurService />
        <Nurses />
      </Main>
      <Footer />
    </>
  );
};

export default LayOut;
