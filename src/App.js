import React from "react";
import Fullscreen from "./screens/Fullscreen";
import Cursor from "./assets/Cursor";
import "./App.css";

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
      <Fullscreen hover={hover} unHover={unHover} />
    </div>
  );
};

export default App;
