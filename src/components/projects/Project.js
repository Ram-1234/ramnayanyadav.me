import React from "react";
import "./style.css";
import imgGallery from "./resources/imageGallery.png";
import bookLibrary from "./resources/book_library.png";
import weatherApp from "./resources/weatherApp.png";
import quriousPost from "./resources/qurious-post.png"

function Project() {

  return (
    <div id="project__page" className="myproject container-fluid">
      <h3 className="serial-3">__03</h3>
      <p className="projects">
        My <br />
        Projects
      </p>
      <div className="project-1-div row">
        <div class="col-lg-6 col-md-12">
          <span className="image-Gallery-info1">
            <h4 className="project-name">Qurious Post</h4>
            <p className="project-para">
              <strong>1: </strong>Developed a dynamic full-stack web application with robust user authentication, enabling seamless registration, login, post creation, and content browsing.
              <br/>
              <strong>2: </strong>Integrated an AI-powered chat feature on a dedicated route, enriching the user experience with intelligent interaction. 
              <br/>
              <strong>3: </strong>Engineered the frontend using React.js, JavaScript, HTML, CSS, and Bootstrap for a responsive and modern interface.
              <br/>
              <strong>4: </strong>Implemented custom React hooks to streamline logic, enhance reusability, and improve application scalability.
              <br/>
              <strong>5:</strong>Designed and built a custom carousel component to elevate visual engagement and UI interactivity.
              <br/>
              <strong>6: </strong>This project demonstrates my ability to create interactive and feature-rich web applications with optimized performance. 🚀
            </p>
          </span>
        </div>
        <div class="col-lg-6 col-md-12 pf-project-thumbnail mt-3">
          <a href="https://github.com/Ram-1234/walpaper" target="blank">
            <img src={quriousPost} alt="experience photo"/>
          </a>
        </div>
      </div>
      <div className="project-2-div row mb-5 pb-5">
        <div class="img-top col-xll-6 col-xl-6 col-lg-6 d-lg-block d-xl-block d-xll-block d-sm-none d-md-none pf-project-thumbnail">
          <a href="https://github.com/Ram-1234/book-library" target="blank" >
            <img src={bookLibrary} alt="experience photo" className="project2" />
          </a>
        </div>
        <div class="col-lg-6 col-md-12">
          <span className="image-Gallery-info2">
            <h4 className="project-name mb-5">___Book-Library</h4>
            <p className="project-para ">1- This is a single-page React Book Library application featuring a search function to quickly find books by name and a dropdown filter for efficient category-based browsing.</p>
            <p className="project-para ">2- This single-page React Book Library application features intuitive book search by title, category-based filtering through a dropdown (including Story, Cultural, Historical, and Faith), and a customizable light/dark theme toggle for an enhanced user experience.</p>
            <p className="project-para ">3- This application is built using front-end technologies including HTML, CSS, JavaScript, Bootstrap and React.</p>
          </span>
        </div>
        <div class="img-bottom d-xl-none d-xll-none d-lg-none col-md-12 d-sm-block d-md-block">
          <a href="https://github.com/Ram-1234/book-library" target="blank" >
            <img src={bookLibrary} alt="experience photo" className="project2" />
          </a>
        </div>
      </div>
      <div className="project-3-div row">
        <div class="col-lg-6 col-md-12">
          <span className="image-Gallery-info3">
            <h4 className="project-name">___Weather App</h4>
            <p className="project-para">
              1. This is my single page react weather application that provide
              weather information of the city by just search the city name and
              press the Enter button. all the weather information realted to the
              city is display, if city is not found nothing to display. images.
              <br />
              <br />
              2. In this application i have triyed to solve the problem of to
              searching weather information about city, user only need to serach
              only city name.
              <br />
              <br />
              3. In This application i have used the frontend technologies is
              <strong> html</strong> <strong>css</strong> <strong>react</strong>
              <strong> javascript</strong> and javascript.
              <br />
              <br />
            </p>
          </span>
        </div>
        <div class="col-lg-6 col-md-12 pf-project-thumbnail mt-4">
          <a href="https://github.com/Ram-1234/weather-city-app" target="blank">
            <img src={weatherApp} alt="experience photo" className="project3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Project };
