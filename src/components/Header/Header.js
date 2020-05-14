import React from "react";
import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { navigate } from "@reach/router";

const Header = (props) => {
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
              onClick={() => navigate("Home")}
            />
          </div>
          <ul className="nav-links">
            {li.map((each, index) => (
              <li
                onClick={() => navigate(each)}
                className={"li" + index}
                key={index}
                onMouseOver={(e) => {
                  props.hover(e);
                }}
                onMouseLeave={(e) => {
                  props.unHover(e);
                }}
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
