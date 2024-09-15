import React from "react";
import { Navbar } from "../navbar";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { Project } from "../projects/Project";
import { Contact } from "../contacts/Contact";
import { BgBanner } from "../bg-banner";
import { PortFolioTheme } from "../theme";

function Home() {
  const theme = new PortFolioTheme({});
  
  return (
    <>
      <Navbar />
      <BgBanner />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export { Home };
