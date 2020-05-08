import React from 'react'
import styled from 'styled-components'


const CurrentHover = (props) => {

    const BackText = styled.p`
        display: absolute;
        color: rgb(37, 37, 37, 0.3);
        font-family: 'IntegralCF'; 
        font-size: 15rem;
        position: absolute;
        left: ${props.xPos - 200}px;
        top: ${props.yPos - 200}px;
    `
    return(
        <BackText>{props.currentHover}</BackText>
    )
} 

export default CurrentHover