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
import { waitFor } from '@testing-library/react';



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
               <div className='col-lg-12'>
                    <div className="carousel-box card-box1" onMouseEnter={mouseEneterTopRow} style={{animationPlayState:"pause", animationFillMode: 'forwards'}}>
                        <div class="slider-item">
                            <img class="d-block w-100" src={react} width={200} height={200} alt="react"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={js} width={200} height={200} alt="javascript"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={vue} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={coponent} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={bootstrap} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={nodejs} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={express} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={redux} width={200} height={200} alt="vue.js"/>
                        </div>
                    </div>
                    <div className='carousel-box card-box2'>
                        <div class="slider-item">
                            <img class="d-block w-100" src={pwa} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={html} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={css} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={drupal} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={sementicui} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={prisma} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={jquery} width={200} height={200} alt="vue.js"/>
                        </div>
                        <div class="slider-item">
                            <img class="d-block w-100" src={mongodb} width={200} height={200} alt="vue.js"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
               </div>
            </div>
        </div>
    )
}
            

export  {Swiper};