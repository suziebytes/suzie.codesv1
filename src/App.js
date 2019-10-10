import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  const [work, setWork] = useState();

  return (
    <div>
      <Landing />
      <AboutMe />
      <Portfolio work={work} setWork={setWork} />
    </div>
  );
}

export default App;
