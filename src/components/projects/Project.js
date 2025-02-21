import React from "react";
import "./style.css";
import imgGallery from "./resources/imageGallery.png";
import bookLibrary from "./resources/bookLibrary.png";
import weatherApp from "./resources/weatherApp.png";

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
            <h4 className="project-name">___Walpaper</h4>
            <p className="project-para">
              1. This is my single page react walpaper application that have
              header buttons each individual button have different type of images.
              <br />
              <br />
              2. I tyried to solve the problem of user that no need to think more
              about what type of image user need to search all the buttons is
              available at the front of the user. user just need to press the
              button what type of walpaper user want to display.
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
        <div class="col-lg-6 col-md-12">
          <a href="https://github.com/Ram-1234/walpaper" target="blank">
            <img src={imgGallery} alt="experience photo"/>
          </a>
        </div>
      </div>
      <div className="project-2-div row">
        <div class="col-lg-6 col-md-12">
          <a href="https://github.com/Ram-1234/book-library" target="blank" >
            <img src={bookLibrary} alt="experience photo" className="project2" />
          </a>
        </div>
        <div class="col-lg-6 col-md-12">
          <span className="image-Gallery-info2">
            <h4 className="project-name">___Book-Library</h4>
            <p className="project-para">
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
        <div class="col-lg-6 col-md-12">
          <a href="https://github.com/Ram-1234/weather-city-app" target="blank">
            <img src={weatherApp} alt="experience photo" className="project3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Project };
