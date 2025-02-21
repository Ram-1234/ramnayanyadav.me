import React from "react";
import "./style.css";

import banner from "../../assets/IMG_7184.JPG";

const BgBanner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
        <div id="home" className="landing-container">
          <div> <img src={banner} alt="my-avatar" className="ram" width={1650} height={'auto'} /> </div>
          <div className="status">
            <div className="myname">___Ramnayan Yadav</div>
            <div className="myrole">Frontend Developer</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export { BgBanner };
