import React from 'react'
import Burger from '../components/Burger/Burger'
import Header from '../components/Header/Header'
import ScrollContainer from '../components/ScrollContainer/ScrollContainer'
import Slideshow from '../components/Slideshow/Slideshow'



const Fullscreen = (props) => {
    return(
        <div>
            <Header/>
            <Burger 
                hover={props.hover} 
                unHover={props.unHover}
            />
            <Slideshow/>
            <ScrollContainer
                hover={props.hover} 
                unHover={props.unHover}
            />
        </div>
    )
}

export default Fullscreen