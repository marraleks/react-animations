import React from 'react'
import './BurgerOverlay.css'

const Burger = (props) => {
    return (
        <>
            <div className={props.open ? 'overlay visible' : 'overlay'}> 
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </>
    )
}

export default Burger;
