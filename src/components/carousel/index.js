import React,{useEffect, useState} from 'react';
import "./style.css";
import react from "../../assets/react.svg";
import js from "../../assets/js.svg";
import vue from "../../assets/vue.svg";
import coponent from "../../assets/webcomponents.svg";
import bootstrap from "../../assets/bootstrap-logo-shadow.png";
import html from "../../assets/html.jpeg";
import css from "../../assets/css.jpg";
import drupal from "../../assets/drupal.png";
import nodejs from "../../assets/nodejs.jpg";
import express from "../../assets/express.png";
import redux from "../../assets/redux.png";
import sementicui from "../../assets/sementic-ui.png";
import pwa from "../../assets/pwa.webp";
import prisma from "../../assets/prisma.jpg";
import jquery from "../../assets/jquery.png";
import mongodb from "../../assets/mongodb.png";

const Swiper = () => {
    const [data, setData] = useState([]);
    const [enter, setEnter] = useState(false);

   const mouseEneterTopRow=()=>{
   }

  return (
        <div className="container-fluid carousel-main">
            <div className='row'>
                <div className='col-lg-12 tech-title text-center text-light mt-0 pt-0'>
                    <p>Skilled Software Developer</p>
                </div>
               <div className='col-lg-12 scroll-wrap'>
                    <div className="carousel-box primary-carousel  d-flex justify-content-center" onMouseEnter={mouseEneterTopRow} style={{animationPlayState:"pause", animationFillMode: 'forwards'}}>
                        <div class="slider-item">
                            <img class="d-block w-100" src={react} width={200}  title='React.js, javascript library' height={200} alt="react"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={js} width={200}  title='Javascript, backbone of webapp' height={200} alt="javascript"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={vue} width={200}  title='Vue.js, javascript framwork' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={coponent} width={200}  title='UI Component' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={bootstrap} width={200}  title='bootstrap, css framework' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={nodejs} width={200}  title='Node.js® is a free, open-source, cross-platform JavaScript runtime environment' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={express} width={200}  title='Express.js, is node.js library' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={redux} width={200}  title='Redux, state managment library' height={200} alt="vue.js"/>
                        </div>
                    </div>
                    <div className='carousel-box secondry-carousel  d-flex justify-content-center'>
                        <div class="slider-item">
                            <img class="d-block w-100" src={pwa} width={200}  title='PWA, progressive web app' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={html} width={200}  title='HTML, markup language' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={css} width={200}  title='CSS' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={drupal} width={200}  title='Drupal, content managment system' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={sementicui} width={200}  title='Sementic UI, web development code writing style' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={prisma} width={200}  title='Prisma' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={jquery} width={200}  title='JQuery, javascript library ' height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={mongodb} width={200}  title='MONGODB, database system(nosql)' height={200} alt="vue.js"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
               </div>
            </div>
        </div>
    )
}
            

export  {Swiper};