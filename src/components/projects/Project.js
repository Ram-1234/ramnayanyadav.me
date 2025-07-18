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
        <div class="col-lg-6 col-md-12 pf-project-thumbnail">
          <a href="https://github.com/Ram-1234/walpaper" target="blank">
            <img src={quriousPost} alt="experience photo"/>
          </a>
        </div>
      </div>
      <div className="project-2-div row">
        <div class="img-top col-xll-6 col-xl-6 col-lg-6 d-lg-block d-xl-block d-xll-block d-sm-none d-md-none pf-project-thumbnail">
          <a href="https://github.com/Ram-1234/book-library" target="blank" >
            <img src={bookLibrary} alt="experience photo" className="project2" />
          </a>
        </div>
        <div class="col-lg-6 col-md-12">
          <span className="image-Gallery-info2">
            <h4 className="project-name">___Book-Library</h4>
            <p className="project-para pt-4">
              1. This is my single page react book Library that have features<br />
              I. Search a individual book by just enter book name and press search
              button.You can also filter the books by just dropdown button.
              <br />
              II. Change the background color(theme) of the application that have two
              color black/white.
              <br />
              III. Filter the books by just select the dropdown button display
              only books that you want like- <strong>Story,</strong>{" "}
              <strong>Cultural</strong>,<strong> Historical</strong>,{" "}
              <strong>Faith.</strong>
              <br />
              IV. Get Book descreption by clicking/press on book details button.
              After press, you will get the popup modal that have book name & abouts.<br />

              2. In this appliaction I have tried to solve the problem of user
              Search book efficiently by two way by search the book name otherwise
              filter what type of book want to search like historical, story,
              faith.
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
        <div class="col-lg-6 col-md-12 pf-project-thumbnail">
          <a href="https://github.com/Ram-1234/weather-city-app" target="blank">
            <img src={weatherApp} alt="experience photo" className="project3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Project };
