import React from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
