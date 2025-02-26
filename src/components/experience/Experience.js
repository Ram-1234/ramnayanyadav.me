import React from "react";
import "./style.css";
import {jsonData} from "./exp-data";
import {ExperienceCard} from "./ExCard";

function Experience() {
  
  return (
    <div id="experience__page" className="experienceme-container container-fluid pt-5">
      <h3 className="serial-2">__02</h3>
      <p className="experience">
        My <br />
        Experience
      </p>
      {jsonData && jsonData.map((item, index)=>{
        return <ExperienceCard
        key={index+1}
        id={index}
            {...item}
        />
      })}
    </div>
  );
}

export { Experience };
