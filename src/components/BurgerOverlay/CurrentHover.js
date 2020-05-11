import React from 'react'

const CurrentHover = (props) => {

    const styling = {
        display: "absolute",
        color: "rgb(37, 37, 37, 0.3)",
        fontFamily: 'IntegralCF', 
        fontSize: "15rem",
        position: "absolute",
        left: `${props.xPos - 200}px`,
        top: `${props.yPos - 200}px`,
    }
    return(
        <p style={styling}>{props.currentHover}</p>
    )
} 

export default CurrentHover