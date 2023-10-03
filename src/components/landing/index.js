import React from "react";
import "./style.css";

import ram4 from "./resources/rampf3.JPG";

const Landing = () => {
  return (
    <div id="home" className="landing-container">
      <div>
        <img src={ram4} alt="my-avatar" className="ram" />
      </div>
      <div className="status">
        <div className="myname">___Ramnayan Yadav</div>
        <div className="myrole">Frontend Developer</div>
      </div>
    </div>
  );
};

export { Landing };
