import React, { useState, useEffect, useRef } from "react";
import Burger from "../components/Burger/Burger";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import defaultSlides from "../components/Slideshow/defaultSlides.js";
import { gsap } from "gsap";

const Fullscreen = (props) => {
  const [open, setOpen] = useState(false);
  let background = useRef(null);

  useEffect(() => {
    gsap.to([background], 1, {
      delay: 0,
      ease: "power3.out",
      height: "0",
      stagger: {
        amount: 0.15,
      },
    });
  }, [background]);

  return (
    <div>
      <div
        className="transition-background"
        ref={(el) => (background = el)}
      ></div>
      <Header open={open} hover={props.hover} unHover={props.unHover} />
      <Burger
        open={open}
        setOpen={setOpen}
        hover={props.hover}
        unHover={props.unHover}
      />
      <Slideshow
        slides={defaultSlides}
        open={open}
        hover={props.hover}
        unHover={props.unHover}
      />
    </div>
  );
};

export default Fullscreen;
