import React from 'react';
import "./style.css";

export const Navbar = () => {
    return (
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <header className="header-div" style={{background: window.innerHeight>150 ? "white":rgb(255,255,255,0.8)}}>
                        <nav class='d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none '>
                            <ul>
                                <li> <a href="#home" className="home">Home</a></li>
                                <li> <a href="#about__page" className="header-about">About</a></li>
                                <li> <a href="#experience__page" className="header-experience">Experience</a></li>
                                <li> <a href="#project__page" className="header-project">Projects</a></li>
                                <li> <a href="#contact__page" className="header-contact">Contact</a></li>
                            </ul>
                        </nav>
                        {/*** mobile view */}
                        <nav class="d-lg-none d-xl-none d-xxl-none d-sm-block d-sm-block navbar bg-body-tertiary fixed-top">
                            <div class="container-fluid">
                                <a class="navbar-brand d-none" href="#"></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                                    <li class="nav-item"> <a href="#home " className="home nav-link active">Home</a></li>
                                    <li class="nav-item"> <a href="#about__page" className="header-about nav-link">About</a></li>
                                    <li class="nav-item"> <a href="#experience__page" className="header-experience nav-link">Experience</a></li>
                                    <li class="nav-item"> <a href="#project__page" className="header-project nav-link">Projects</a></li>
                                    <li class="nav-item"> <a href="#contact__page" className="header-contact nav-link">Contact</a></li>
                                </ul>
                                    <form class="d-none mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </React.Fragment>
    )
}
