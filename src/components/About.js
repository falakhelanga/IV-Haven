import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about_container" id="about">
      <div className="inner_container container text-center pt-5">
        <h1 data-aos="fade-up" data-aos-once="true" className="mb-5">
          About Us
        </h1>
        <div className="about_content">
          <p data-aos="fade-up" data-aos-once="true">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            recusandae expedita quis aliquam ullam ratione voluptas corporis
            consequatur officia quidem! Autem ab repellendus aliquam quaerat
            aperiam corrupti, laudantium pariatur, explicabo, esse odio minus
            ipsam magnam error reprehenderit iste praesentium tempora rerum
            inventore eligendi! Vel, vero facilis quod reprehenderit consectetur
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            recusandae expedita quis aliquam ullam ratione voluptas corporis
            consequatur officia quidem! Autem ab repellendus aliquam quaerat
            aperiam corrupti, laudantium pariatur, explicabo, esse odio minus
            ipsam magnam error reprehenderit iste praesentium tempora rerum
            inventore eligendi! Vel, vero facilis quod reprehenderit consectetur
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
