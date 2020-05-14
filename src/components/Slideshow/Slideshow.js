import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ScrollContainer from "../ScrollContainer/ScrollContainer";
import { TimelineLite, Power2, gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const hoverImg = () => {
  const cursor = document.querySelector(".cursor");
  cursor.classList.add("imghover");
};
const unHoverImg = () => {
  const cursor = document.querySelector(".cursor");
  cursor.classList.remove("imghover");
};

const Slideshow = (props) => {
  const [curr, setCurr] = useState(0);
  const { length } = props.slides;

  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(imageReveal, 0, {
      width: "100%",
      ease: Power2.easeInOut,
    });
    tl.to(imageReveal, 1.4, {
      width: "0%",
      ease: Power2.easeInOut,
    });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
    tl.restart();
  };

  const goToPrev = () => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
    tl.restart();
  };

  if (!Array.isArray(props.slides) || length <= 0) {
    return null;
  }

  return (
    <div className="fullscreen">
      <div
        className="container"
        onMouseOver={(e) => {
          hoverImg(e);
        }}
        onMouseLeave={(e) => {
          unHoverImg(e);
        }}
      >
        <>
          {props.slides.map((s, i) => (
            <div
              className={i === curr ? "img-container" : ""}
              key={s.number}
              aria-hidden={i !== curr}
            >
              {i === curr && (
                <img
                  ref={(el) => (image = el)}
                  className="image"
                  src={s.image}
                  alt={`${s.number}`}
                />
              )}
            </div>
          ))}
        </>
      </div>

      <div className="slideshow-controls">
        <IoIosArrowBack
          className="left"
          size="30"
          onClick={goToPrev}
          onMouseOver={(e) => {
            props.hover(e);
          }}
          onMouseLeave={(e) => {
            props.unHover(e);
          }}
        />
        <IoIosArrowForward
          className="right"
          size="30"
          onClick={goToNext}
          onMouseOver={(e) => {
            props.hover(e);
          }}
          onMouseLeave={(e) => {
            props.unHover(e);
          }}
        />
      </div>
      <ScrollContainer
        current={{ curr, length }}
        open={props.open}
        hover={props.hover}
        unHover={props.unHover}
      />
    </div>
  );
};

export default Slideshow;
