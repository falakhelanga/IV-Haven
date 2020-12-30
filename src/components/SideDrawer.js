import React from "react";
import "./sidedrawer.css";
import CloseIcon from "@material-ui/icons/Close";
const SideDrawer = ({ menuClose, handleClose }) => {
  const drawerClass = ["side_drawer_container"];

  if (menuClose) {
    drawerClass.push("closeMenu");
  }

  return (
    <div className={drawerClass.join(" ")}>
      <div className="closeIcon">
        <CloseIcon
          onClick={() => {
            handleClose(true);
          }}
        />
      </div>
      <div className="drawer_nav">
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Obout Us
              </a>
              >
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Our Service
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
