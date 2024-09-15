import React from "react";
import "./style.css";

function About() {
  return (
    <div className="aboutme">
      <h3 className="serial-1">__01</h3>
      <div className="about_content">
        <div className="about_left">
          <p id="about__page" className="knowabout">
            Know <br />
            About Me
          </p>
          <p className="aboutpara1">
            Hi, I am Ram, Hope you are enjoying your day!
            <br />
            <br />
            I am Frontend Engineer with a strong Frontend skill-set, focus on
            details and passion for building interactive user experiences for the
            web. I have extensive knowledge of Object-Oriented Programming as well
            as significant experience of using modern JS Library & framework such as
            Reactjs Vuejs React native and Angular, nodejs framework such as
            Expressjs.
            <br />
            <br />
            I am proficient in PHP, JS and Java. I like to build things and tinker
            with new technologies. I believe Language or technology is just a tool
            to achieve what is required, hence I am language agnostic and I tend to
            learn new technologies very quickly.
            <br />
            <br />I enjoy a good cup of coffee{" "}
            <strong style={{ color: "#9e2a2b", fontSize: "30px" }}>☕</strong>,
            travelling{" "}
            <strong style={{ color: "#9e2a2b", fontSize: "20px" }}>🚎</strong>,
            origami(art) <strong>🎨</strong> and, watching movies
            <strong style={{ color: "#9e2a2b", fontSize: "20px" }}>🦸</strong>and TV
            shows.
          </p>
          <br />
          <p className="aboutpara1" style={{ color: "#ff7d00" }}>
            Always happy to create - Bold and hovered but some time! 😊
          </p>
        </div>
        <div className="about_right skills">
          <p className="skill">React Js</p>
          <p className="skill">Vuejs</p>
          <p className="skill">React Native</p>
          <p className="skill">JavaScript</p>
          <p className="skill">TypeScript</p>
          <p className="skill">Bootstrap</p>
          <p className="skill">Redux</p>
          <p className="skill">MongoDB</p>
          <p className="skill">Coding & DSA</p>
          <p className="skill">Node.js</p>
          <p className="skill">Express.js</p>
          <p className="skill">jQuery</p>
          <p className="skill">Material UI</p>
          
        </div>
      </div>
      <div className="myresume">
        <a
          href="https://drive.google.com/file/d/1v0p4W7qUzkBqxu57DKwd4o6kX8qTqbs7/view?usp=sharing"
          className="downloadresume"
          download="proposed_file_name"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export { About };
