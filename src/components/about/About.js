import React from "react";
import "./style.css";

function About() {
  return (
    <div className="aboutme container-fluid about__page pt-5">
      <h3 className="serial-1">__01</h3>
      <div className="about_content row">
        <div className="about_left col-lg-9 col-md-12">
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
            Reactjs Vuejs and React native, nodejs framework such as
            Express.js.
            <br />
            <br />
            I am proficient in Javascript, Responsive design. I like to build things and tinker
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
          <p className="aboutpara1">
            Always happy to create - Bold and hovered but some time! 😊
          </p>
        </div>
        <div className="about_right skills col-lg-3 col-md-12">
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
          <p className="skill">Sementic UI</p>
          <p className="skill">Responsive Design</p>
        </div>
      </div>
      <div className="myresume col-lg-12 text-center">
        <a href="https://drive.google.com/file/d/10JrwSx4K_hRXaF2qYEyI9irem4kl5iDr/view?usp=sharing" target="_blank" rel="noopener" className="downloadresume" download="proposed_file_name" >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export { About };
