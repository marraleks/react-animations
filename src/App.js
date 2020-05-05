import React from 'react'
import Fullscreen from "./screens/Fullscreen";
import Cursor from "./components/Cursor"
import "./App.css";

const App = () => {

  const blogHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.add("grow")
  }

  const blogUnHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.remove("grow")
  }


  return(
    <div className="App"
      onMouseMove={e => {
        const cursor = document.querySelector(".cursor")
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
      }}

      // onMouseDown={() => {
      //   const cursor = document.querySelector(".cursor")
      //   cursor.classList.add("mouse-down")
      // }}
      
      // onMouseUp={() => {
      //   const cursor = document.querySelector(".cursor")
      //   cursor.classList.remove("mouse-down")
      // }}
    
      // onMouseLeave={() => {
      //   const cursor = document.querySelector(".cursor")
      //   cursor.classList.add("mouse-left")
      // }}

      // onMouseEnter={() => {
      //   const cursor = document.querySelector(".cursor")
      //   cursor.classList.remove("mouse-left")
      // }}
      > 

      <Cursor/>
      <Fullscreen blogHover={blogHover} blogUnHover={blogUnHover} />
    </div>
  )
}

export default App