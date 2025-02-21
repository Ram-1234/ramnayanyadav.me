import React from "react";
//import { Navbar } from "../navbar.js";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { Project } from "../projects/Project";
import { Contact } from "../contacts/Contact";
import { BgBanner } from "../bg-banner";
import { PortFolioTheme } from "../theme";
import { Navbar } from "../navbar/navbar";

function Home() {
  const theme = new PortFolioTheme({});
  
  return (
    <React.Fragment>
        <Navbar />
        <BgBanner />
        <About />
        <Experience />
        <Project />
        <Contact />
    </React.Fragment>
  );
}

export { Home };
