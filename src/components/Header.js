import React from 'react'
import './style.css'

export default function Header() {
    return (
        <>
          <div className="header-div">
              <span className="header-about">About</span>
              <span className="header-experience">Experience</span>
              <span className="header-project">Projects</span>
              <span className="header-contact">Contact</span>
          </div>   
        </>
    )
}
