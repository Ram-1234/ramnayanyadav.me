import React from "react";
import { Header } from "../header/Header";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { Project } from "../projects/Project";
import { Contact } from "../contacts/Contact";
import { Landing } from "../landing";

function Home() {
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
