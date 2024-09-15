import React from "react";
import "./style.css";

import banner from "../../assets/IMG_7184.JPG";

const BgBanner = () => {
  return (
    <div id="home" className="landing-container">
      <div>
        <img src={banner} alt="my-avatar" className="ram" />
      </div>
      <div className="status">
        <div className="myname">___Ramnayan Yadav</div>
        <div className="myrole">Frontend Developer</div>
      </div>
    </div>
  );
};

export { BgBanner };
