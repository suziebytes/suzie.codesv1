import React from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import GridSample from "./Components/Portfolio/GridSample";

function App() {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Services />
      <GridSample />
      <Contact />
    </div>
  );
}

export default App;
