import React from "react";
import "./nurse.css";

const Nurse = ({ content, name, qual }) => {
  return (
    <div className="nurse_container">
      <div className="nurse_image ">
        <h3>Nurse Image</h3>
      </div>
      <div className="nurse_content">
        <div className="nurse_content_title">
          <h3 className="text-center text-capitalize">{name}</h3>
          <h4 className="text-center text-capitalize">{qual}</h4>
        </div>
        <div className="nurse_content_paragraph">
          <p>{content}</p>

          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Nurse;
