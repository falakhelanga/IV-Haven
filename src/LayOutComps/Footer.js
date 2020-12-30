import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper bg-dark w-100 py-5 ">
      <div className="footer_container container ">
        <h1 className="text-center">Contact</h1>
        <div className="contact_content">
          {/******** ADRESS ***********/}
          <div className="contact_div">
            <div className="address_div">
              <h2 className="mb-2">Our Branches:</h2>
              <h4 className="mb-1  text-uppercase">Centurion</h4>
              <p>184 Panorama Road</p>
              <h4 className="mb-1 text-uppercase mt-2">Hartebeesport</h4>
              <p>110 Scot Street</p>
              <h4 className="mb-1 text-uppercase mt-2">Pretoria West</h4>
              <p>170 Roux Street Denville</p>
            </div>
          </div>

          {/******** PHONE ***********/}
          <div className="contact_div">
            <div className="address_div">
              <h2 className="mb-2">Phone:</h2>
              <h4 className="mb-1  text-uppercase">Centurion</h4>
              <p>067 068 8951</p>
              <h4 className="mb-1 text-uppercase mt-2">Hartebeesport</h4>
              <p>083 529 9486</p>
              <h4 className="mb-1 text-uppercase mt-2">Pretoria West</h4>
              <p>073 905 6417</p>
            </div>
          </div>

          {/******** EMAIL ***********/}
          <div className="contact_div">
            <div className="address_div">
              <h2 className="mb-2">Email:</h2>
              <h4 className="mb-1  text-uppercase">Centurion</h4>
              <p>ivhavenbusiness@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
