import React from "react";
import "./style.css";
import ram from "./resources/ram2.jpg";

const Landing = () => {
  return (
    <div>
      <img src={ram} alt="my-avatar" className="ram" />
      <div className="status">
        <div className="myname">___Ramnayan Yadav</div>
        <div className="myrole">Frontend Developer</div>
      </div>
    </div>
  );
};

export { Landing };
