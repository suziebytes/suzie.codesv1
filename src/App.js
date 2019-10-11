import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  const [work, setWork] = useState();

  return (
    <div>
      <Landing />
      <AboutMe />
      <Portfolio work={work} setWork={setWork} />
      <Contact />
    </div>
  );
}

export default App;
