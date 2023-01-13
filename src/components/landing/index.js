import React from "react";
import "./style.css";

import ram3 from "./resources/rampf3.JPG";
import ram4 from "./resources/rampf5.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
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
