import React from 'react'
import Burger from '../components/Burger/Burger'
import ScrollContainer from '../components/ScrollContainer/ScrollContainer'


const Fullscreen = (props) => {
    return(
        <div>
            <ScrollContainer/>
            <Burger 
                hover={props.hover} 
                unHover={props.unHover}
            />
        </div>
    )
}

export default Fullscreen