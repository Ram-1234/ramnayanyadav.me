import React from "react";
import { Header } from "../header/Header";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { Project } from "../projects/Project";
import { Contact } from "../contacts/Contact";
import { Landing } from "../landing";
import { PortFolioTheme } from "../theme";

function Home() {
  const theme = new PortFolioTheme({});
  console.log(theme);
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export { Home };
