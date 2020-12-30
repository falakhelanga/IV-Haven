import React, { useEffect } from "react";
import Nurse from "./Nurse";
import aos from "aos";
import "aos/dist/aos.css";
import "./Nurses.css";

const Nurses = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="nurses_container" id="nurses">
      <div className="nurses_inner_container container pt-5">
        <h1 className="text-center mb-3">Our Professional Nurses</h1>
        <div className="nurse_div" data-aos="fade-left" data-aos-once="true">
          <Nurse
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempora sit. Nobis, officia ex, optio aut atque quibusdam veritatis
            porro nam voluptate quo rem debitis mollitia quisquam veniam error
            incidunt?"
            name="Nurse Name"
            qual="Nurse Qualification"
          />
          <Nurse
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempora sit. Nobis, officia ex, optio aut atque quibusdam veritatis
            porro nam voluptate quo rem debitis mollitia quisquam veniam error
            incidunt?"
            name="Nurse Name"
            qual="Nurse Qualification"
          />
          <Nurse
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempora sit. Nobis, officia ex, optio aut atque quibusdam veritatis
            porro nam voluptate quo rem debitis mollitia quisquam veniam error
            incidunt?"
            name="Nurse Name"
            qual="Nurse Qualification"
          />
        </div>
      </div>
    </div>
  );
};

export default Nurses;
