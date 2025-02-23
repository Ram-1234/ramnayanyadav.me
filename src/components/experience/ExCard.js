import React, { useEffect, useState } from "react";
import "./style.css";
import Carousel from "../carousel/carousel";
import comechat from "./resources/cometchat.png";
import dsci from "./resources/dsci.png";
import techsagar from "./resources/techsagar.png";
import fyntune from "./resources/fyntune1.png"; 

export const ExperienceCard=({name,responsibility,descreption,date,city, position, id})=>{
  const [logo, setLogo]=useState('');
  const [nob, setNob]=useState(0);

  const nextHandler=()=>{
    if(nob<2){
      setNob((old)=> old+1)
    }else{
      setNob(nob%2);
    }
  }

  useEffect(()=>{
    let timeId = setInterval(nextHandler, 4000);
    return ()=> clearInterval(timeId);
  },[nob])

  useEffect(()=>{
    if(name=='DSCI'){
      setLogo(techsagar);
    }else if(name=="CometChat"){
      setLogo(comechat);
    }else setLogo(fyntune);
  },[name]);

  return (
      <div className={`row col-12 m-2 carousel-mainbox`} style={{display:nob===id?'block':"none"}} id={id}>
        <div className="w-100 experince-card-wrapper">
          <div className="col-lg-6 col-md-12">
              <p className="coursdate">{date}</p>
              <h2>{name}</h2>
              <h4 style={{ color: "#ff7d00", marginBottom: "20px" }}>
                ____{position}, {city}
              </h4>
              <div>Description</div>
              <p className="expe-para">
                {descreption}
              </p>
              <div>Major Project Responsibilities</div>
              <p className="expe-para">
                {responsibility.slice(0,350)}...
              </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={logo} alt="experience-avatar" title="cometchat" className="experienceimg" />
          </div>
        </div>
      </div>
  );
}

