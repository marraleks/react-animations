import React, { useState } from "react";
import Burger from "../components/Burger/Burger";
import Header from "../components/Header/Header";
import styled from "styled-components";

const About = (props) => {
  const H1 = styled.h1`
    margin-left: 20vw;
    margin-top: 10vh;
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

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} hover={props.hover} unHover={props.unHover} />
      <Burger
        open={open}
        setOpen={setOpen}
        hover={props.hover}
        unHover={props.unHover}
      />
      <H1>This is an awesomeprojet</H1>
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </P>
    </div>
  );
};

export default About;
