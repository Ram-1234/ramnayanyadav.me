import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header-div">
      <a href="#home" className="home">Home</a>
      <a href="#about__page" className="header-about">About</a>
      <a href="#experience__page" className="header-experience">Experience</a>
      <a href="#project__page" className="header-project">Projects</a>
      <a href="#contact__page" className="header-contact">Contact</a>
    </header>
  );
}

export { Header };
