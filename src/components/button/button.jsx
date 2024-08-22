import React from "react";

import "./button.css";

function Button({ type, children, icon }) {
  return (
    <div className={`${icon ? "hasIcon" : ""}`}>
      <button className={`button ${type}`}>{children}</button>
    </div>
  );
}

export default Button;
