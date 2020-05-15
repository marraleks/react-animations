import React, { useState, useEffect, useRef } from "react";
import Burger from "../components/Burger/Burger";
import Header from "../components/Header/Header";
import styled from "styled-components";
import "./About.scss";
import { gsap } from "gsap";

const H1 = styled.h1`
  margin-left: 20vw;
  font-family: "IntegralCF";
  letter-spacing: 20px;
  color: black;
`;

const P = styled.p`
  margin-left: 20vw;
  margin-top: 50px;
  margin-right: 5vw;
  font-family: "IntegralCF";
  letter-spacing: 40px;
  color: black;
`;

const About = (props) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let lorem = useRef(null);
  let background = useRef(null);

  useEffect(() => {
    gsap.to([background], 1, {
      delay: 0,
      ease: "power3.out",
      width: "0",
      stagger: {
        amount: 0.15,
      },
    });

    gsap.from([line1, line2], 0.8, {
      delay: 0.3,
      ease: "power3.out",
      y: 65,
      stagger: {
        amount: 0.15,
      },
    });
    gsap.from([lorem], 2, {
      delay: 0.5,
      ease: "power3.out",
      opacity: "0",
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2, lorem, background]);

  const [open, setOpen] = useState(false);
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

      <div style={{ marginTop: "10vh" }}>
        <div className="text-wrap">
          <H1 ref={(el) => (line1 = el)}>This is an</H1>
        </div>
        <div className="text-wrap">
          <H1 ref={(el) => (line2 = el)}>awesomeprojet.</H1>
        </div>
        <div>
          <div className="text-wrap">
            <P ref={(el) => (lorem = el)}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
