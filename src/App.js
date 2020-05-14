import React from "react";
import Fullscreen from "./screens/Fullscreen";
import Cursor from "./assets/Cursor";
import About from "./screens/About";
import "./App.css";
import { Router } from "@reach/router";

const App = () => {
  const hover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("grow");
  };
  const unHover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("grow");
  };

  return (
    <div
      className="App"
      onMouseMove={(e) => {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }}
    >
      <Cursor />
      <Router basepath={process.env.PUBLIC_URL}>
        <Fullscreen default path="/Home" hover={hover} unHover={unHover} />
        <About path="/About" hover={hover} unHover={unHover} />
      </Router>
    </div>
  );
};

export default App;
