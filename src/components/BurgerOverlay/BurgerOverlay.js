import React, { useState } from "react";
import "./BurgerOverlay.css";
import CurrentHover from "./CurrentHover";
import { navigate } from "@reach/router";

const Burger = (props) => {
  const [hover, setHover] = useState(false);
  const [currentHover, setCurrentHover] = useState({});
  const [yPos, setyPos] = useState();
  const [xPos, setxPos] = useState();

  const menuLi = ["Home", "Shop", "Gallery", "About"];

  return (
    <>
      <div className={props.open ? "overlay visible" : "overlay"}>
        {hover && (
          <CurrentHover
            currentHover={currentHover.eachLi}
            xPos={xPos}
            yPos={yPos}
          />
        )}
        <div className="burger-content">
          <ul
            onMouseMove={(e) => {
              setxPos(e.clientX);
              setyPos(e.clientY);
            }}
          >
            {menuLi.map((eachLi, index) => (
              <li
                onClick={() => navigate(eachLi)}
                className={eachLi}
                key={index}
                onMouseEnter={() => setHover(true)}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onMouseOver={() => setCurrentHover({ eachLi })}
                onMouseLeave={() => setHover(false)}
              >
                {eachLi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Burger;
