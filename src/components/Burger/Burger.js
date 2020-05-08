import React from 'react'
import './burger.css'
import BurgerOverlay from "../BurgerOverlay/BurgerOverlay";

const Burger = (props) => {



    return (
        <>
           <BurgerOverlay open={props.open} setOpen={props.setOpen}/>
            <div
            onClick={() => props.setOpen(!props.open)}
            className={!props.open ? 'hamburger' : 'hamburger active'}
            onMouseOver={e => {
                props.hover(e)
            }}
            onMouseLeave={e => {
                props.unHover(e)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Burger;
