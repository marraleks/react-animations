import React from "react";
import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { navigate } from "@reach/router";

const Header = (props) => {
  const hover = (e) => {
    props.hover(e);
  };

  const unHover = (e) => {
    props.unHover(e);
  };

  const logohover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("logohover");
  };

  const logoUnHover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("logohover");
  };

  const li = ["Shop", "Gallery", "About"];
  return (
    <>
      <header className={props.open ? "header active" : "header"}>
        <nav>
          <div className="logo">
            <img
              src={Logo}
              alt="logo"
              height="40px"
              onMouseOver={logohover}
              onMouseLeave={logoUnHover}
              onClick={() => navigate("Home")}
            />
          </div>
          <ul className="nav-links">
            {li.map((each, index) => (
              <li
                onClick={() => navigate(each)}
                className={"li" + index}
                key={index}
                onMouseOver={hover}
                onMouseLeave={unHover}
              >
                {each}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
