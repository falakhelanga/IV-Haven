import React from "react";
import "./NavBar.css";
import { Image, Container } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

const NavBar = ({ handleClose }) => {
  return (
    <div className="nav_wrapper">
      <Container className="nav_container    " fluid>
        <div className="logo_div d-flex align-items-center ">
          <Image src="/images/logo2.png" alt="logo" fluid className="logo" />
          <h2 className=" ml-2 ">IV Haven and Wellness Clinic</h2>
          <h1 className=" ml-2 ">IV Haven and Wellness Clinic</h1>
        </div>
        <div className="mobile">
          <div className="social_div ml-5">
            <FacebookIcon className="icon ml-3 text-white" />
            <TwitterIcon className="icon ml-3 text-white" />
            <InstagramIcon className="icon ml-3 text-white" />
          </div>

          <MenuIcon
            className="text-white ml-3"
            onClick={() => {
              console.log("object");
              handleClose(false);
            }}
          />
        </div>

        <div className="nav_div ">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
                <Link
                  className="links"
                  to="about"
                  smooth={true}
                  duration={1000}
                >
                  About Us
                </Link>

                <Link
                  className="links"
                  to="service"
                  smooth={true}
                  duration={1000}
                >
                  Our Service
                </Link>
                <Link
                  className="links"
                  to="nurses"
                  smooth={true}
                  duration={1500}
                >
                  Our Nurses
                </Link>
                <a href="#">Specials</a>
                <a href="#">Book Online</a>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="social_div ml-5">
            <FacebookIcon className="icon ml-3" />
            <TwitterIcon className="icon ml-3" />
            <InstagramIcon className="icon ml-3" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
