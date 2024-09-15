import React from "react";
import "./style.css";

function Navbar() {
  return (
    <header className="header-div" style={{background: window.innerHeight>650 ? "white":"transparent"}}>
     <nav>
      <ul>
        <li> <a href="#home" className="home">Home</a></li>
        <li> <a href="#about__page" className="header-about">About</a></li>
        <li> <a href="#experience__page" className="header-experience">Experience</a></li>
        <li> <a href="#project__page" className="header-project">Projects</a></li>
        <li> <a href="#contact__page" className="header-contact">Contact</a></li>
      </ul>
     </nav>
    </header>
  );
}

export { Navbar };
