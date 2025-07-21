import React, { useEffect, useState } from "react";
import "./style.css";
import comechat from "./resources/cometchat.png";
import dsci from "./resources/dsci.png";
import techsagar from "./resources/techsagar.png";
import fyntune from "./resources/fyntune1.png"; 

export const ExperienceCard=({name,responsibility,descreption,date,city, position, id})=>{
  const [logo, setLogo]=useState('');
  const [readMore, setReadMore]=useState(false);
  const [nob, setNob]=useState(0);
  const [mouseMove, setMouse]=useState(false);

  const nextHandler=()=>{
    if(nob<2){
      setNob((old)=> old+1)
    }else{
      setNob(nob%2);
    }
  }

  const mouseEnter=()=>{
    console.log("mouse enter");
    // setNob(5)
    setMouse(true);
  }

  const mouseLeave=()=>{
    console.log("mouse leave");
    // setNob(0)
    setMouse(false);
  }

  useEffect(()=>{
    let timeId=null;
    timeId = setInterval(nextHandler, 5000);
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
      <div className={`row carousel-mainbox ${nob===id?"element.show":"element"}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id={id}>
          <div className="col-lg-6 col-md-12 col-sm-12 experience-left">
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
                { readMore? responsibility : responsibility.slice(0,480)}{" "}<span className="readmore" onClick={()=>setReadMore(!readMore)} >{readMore? "Read Less":"Read More"}</span>
              </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 experience-right">
            <img src={logo} alt="experience-avatar" title="cometchat" className="experienceimg" />
          </div>
      </div>
  );
}

