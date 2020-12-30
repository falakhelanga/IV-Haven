import React from "react";
import NavBarr from "../components/NavBar";

const NavBar = ({ handleClose }) => {
  return (
    <div>
      <NavBarr handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
