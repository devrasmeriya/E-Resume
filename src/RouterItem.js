import React from "react";
import "./styles.css";
// import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

export default function RouterItem() {
  return (
    <div className="Router">
      <About />
      <Skills />
      <Project />
    </div>
  );
}
