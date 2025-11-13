import React, { Suspense, lazy } from "react";
import "./App.css";

// Import Components
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Resume from "./component/Resume";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Main Sections */}
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
