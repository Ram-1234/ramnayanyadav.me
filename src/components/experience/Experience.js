import React from "react";
import "./style.css";
import Expeimg from "./resources/cometchat.png";

function Experience() {
  return (
    <div id="experience__page" className="experienceme container-fluid">
      <h3 className="serial-2">__02</h3>
      <p className="experience">
        My <br />
        Experience
      </p>
      <p className="coursdate">Dec 2021 - Feb 2023</p>
      <div className="bootcamp">
        <h2>CometChat</h2>
        <h4 style={{ color: "#ff7d00", marginBottom: "20px" }}>
          ___Frontend Developer
        </h4>
        <div className="row">
        <div className="col-lg-6 col-md-12">
          <div>Description</div>
          <p className="expe-para">
            Designed the chat application and a ready-to-use UI Kit using the
            CometChat SDK, which can be used to integrate as a part of any app,
            to enable chat and video calling options.
          </p>
          <div>Major Project Responsibilities</div>
          <p className="expe-para">
            Studying the SDK and customer requirements. Working with cometchat
            UI Kit team as a react developer. I did work on React Native, Vuejs
            cometchat UI Kit Maintaining a sample app and UI Kit for other
            programmers to integrate Guide the team in designing the
            requirements of the customers. Be in the first line in solving
            customer queries by providing technical support.
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={Expeimg} alt="experience-avatar" title="cometchat" className="experienceimg" />
        </div>
        </div>
      </div>
    </div>
  );
}

export { Experience };
