import React from 'react'
import './style.css'
import Expeimg from './experience1.png'

function Experience() {
    return (
        <div className="experienceme">
            <h3 className="serial-2">__02</h3>
            <p className='experience'>My <br/>Experience</p>
            <p className="coursdate">October 2020-2021</p>
            <div className="bootcamp">
             <h2>Newton School Bootcamp</h2>   
             <h4 style={{color:"#ff7d00",marginBottom:"20px"}}>___Frontend Development</h4>
             <p className="expe-para">Hii I am Ramnayan, I have Six Month Experience in Frontend<br/> 
             With Latest technologies like HTML CSS JavaScript React and Redux.During This Course<br/>
             I have Created many Frontend Applications like weather app todo app Book Library<br/>
             and image Gallery.
             </p>
             <img src={Expeimg} alt="experience photo" className="experienceimg" />
            </div>
        </div>
    )
}

export default Experience
