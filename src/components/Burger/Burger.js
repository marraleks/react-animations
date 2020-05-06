import React, {useState} from 'react'
import './burger.css'
import BurgerOverlay from "../BurgerOverlay/BurgerOverlay";

const Burger = (props) => {

    const [open, setOpen] = useState(false)
    console.log(open);
    return (
        <>
           <BurgerOverlay open={open} setOpen={setOpen}/>
            <div 
            onClick={() => setOpen(!open)}
            className='hamburger'
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
