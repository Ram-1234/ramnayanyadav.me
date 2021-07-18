import React from 'react'
import imgGallery from './imageGallery.png'
import bookLibrary from './bookLibrary.png'
import weatherApp from './weatherApp.png'
function Project() {
    return (
        <div className="myproject">
        <h3 className="serial-3">__03</h3>
        <p className='projects'>My <br/>Project</p>
        <spna className="image-Gallery-info1">
          <h4 className="project-name">___Walpaper</h4>
          <p className="project-para">It is single page application that contains headerbuttons <br/>
          these buttons contains different types of image<br/>
          each button also represent a individual functional component<br/>
          after pressing any button that type of image is display,<br/>
          in this proejct i have used react-router library to use multiple<br/>
          view in a single just by presing a button..
          </p>
        </spna>
        <img src={imgGallery} alt="experience photo" className="project1" />
        <spna className="image-Gallery-info2">
          <h4 className="project-name">___Book-Library</h4>
          <p className="project-para">It is single page application that contains headerbuttons <br/>
          these buttons contains different types of image<br/>
          each button also represent a individual functional component<br/>
          after pressing any button that type of image is display,<br/>
          in this proejct i have used react-router library to use multiple<br/>
          view in a single just by presing a button..
          </p>
        </spna>
        <img src={bookLibrary} alt="experience photo" className="project2" />
        <spna className="image-Gallery-info3">
          <h4 className="project-name">___Weather App</h4>
          <p className="project-para">It is single page application that contains headerbuttons <br/>
          these buttons contains different types of image<br/>
          each button also represent a individual functional component<br/>
          after pressing any button that type of image is display,<br/>
          in this proejct i have used react-router library to use multiple<br/>
          view in a single just by presing a button..
          </p>
        </spna>
        <img src={weatherApp} alt="experience photo" className="project3" />
    </div>
    )
}

export default Project




