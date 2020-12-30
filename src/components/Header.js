import React from "react";
import Button from "./Button";
import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div
        className="background_div"
        style={{
          backgroundImage: "url(/images/hearder1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundAttachment: "fixed",
          height: "100%",
          width: "100%",
          position: "absolute",
          opacity: "0.5",
          right: "0",
          top: "0",
        }}
      ></div>
      <div className="slogan_div  text-center ">
        <div>
          <h1 className="text-capitalize mb-5 ">
            we want you to live longer and prosper
          </h1>
          <Button fullwidth={false}> Book Now </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
