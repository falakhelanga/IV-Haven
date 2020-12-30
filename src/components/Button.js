import React from "react";
import "./button.css";

const Button = ({ children, fullwidth }) => {
  const classes = ["mybtn"];
  if (fullwidth) {
    classes.push("fullwidth");
  }
  return <div className={classes.join(" ")}>{children}</div>;
};

export default Button;
