import React from "react";
import "./ScrollContainer.css";

const ScrollContainer = (props) => {
  return (
    <>
      <div
        className={props.open ? "scrollContainer active" : "scrollContainer"}
        onMouseOver={(e) => {
          props.hover(e);
        }}
        onMouseLeave={(e) => {
          props.unHover(e);
        }}
      >
        <div className="current-container">
          <p>0</p>
          <div>
            <p
              className={
                props.current.curr === 0 ? "current active" : "current"
              }
            >
              1
            </p>
            <p
              className={
                props.current.curr === 1 ? "current active" : "current"
              }
            >
              2
            </p>
            <p
              className={
                props.current.curr === 2 ? "current active" : "current"
              }
            >
              3
            </p>
            <p
              className={
                props.current.curr === 3 ? "current active" : "current"
              }
            >
              4
            </p>
          </div>
        </div>
        <div className="srollSeperator"></div>
        <p className="total">0{props.current.length}</p>
      </div>
    </>
  );
};
export default ScrollContainer;
