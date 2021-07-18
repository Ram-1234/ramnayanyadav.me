import React from 'react'

export default function About() {
    return (
        <p className="aboutme">
            <h3 className="serial-1">__01</h3>
            <p className='knowabout'>Know <br/>About Me</p>
            <p className="aboutpara1">Hi, I am Ramnayan, Hope you are enjoying your day!<br/><br/>
             I am Frontend Engineer with a strong Frontend skill-set, focus on details and passion for building interactive user experiences for the web. I have extensive knowledge of Object-Oriented Programming as well as significant experience of using modern JS frameworks such as Angular and React, and backend framework such as Expressjs.
             <br/><br/>
             I am proficient in PHP, JS and Java. I like to build things and tinker with new technologies. I believe Language or technology is just a tool to achieve what is required, hence I am language agnostic and I tend to learn new technologies very quickly.
             <br/><br/>
             I enjoy a good cup of coffee, travelling, origami and, watching movies and TV shows.</p>
             <br/><br/>
             <p className="aboutpara1" style={{color:"#ff7d00"}}>Always happy to create - Bold and hovered but some time! 😊</p>
             <div className="skills">
                <p className="skill">JavaScript</p>
                <p className="skill">React Js</p>
                <p className="skill">Angular</p>
                <p className="skill">MongoDB</p>
                <p className="skill">Redux</p>
                <p className="skill">MySql</p>
                <p className="skill">HTML/CSS</p>
                <p className="skill">Java</p>
                <p className="skill">PHP</p>
            </div>
             <a href="https://drive.google.com/file/d/1NjMwgbjjqtBKSdWNMlOt9q4pNYyDUAcj/view?usp=sharing" className="downloadresume" download="proposed_file_name">Download Resume</a>
        </p>
    )
}
