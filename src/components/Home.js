import React from 'react'
import './style.css'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import ram from './ram2.jpg'

function Home() {
    return (
        <div>
            <Header/>
            <div>
               <img src={ram}  alt="my photo" className="ram" />
               <div className="status">
                <div className="myname">___Ramnayan Yadav</div>
                <div className="myrole">Frontend Developer</div>
                </div>
            </div>
            <About/>
            <Experience/>
            <Project/>
            <Contact/>
        </div>
    )
}

export default Home
