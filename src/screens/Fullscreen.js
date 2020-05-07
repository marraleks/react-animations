import React, {useState} from 'react'
import Burger from '../components/Burger/Burger'
import Header from '../components/Header/Header'
import Slideshow from '../components/Slideshow/Slideshow'



const Fullscreen = (props) => {
    const [open, setOpen] = useState(false)
    return(
        <div>
            <Header
                open={open}
                hover={props.hover} 
                unHover={props.unHover}
            />
            <Burger 
                open={open}
                setOpen={setOpen}
                hover={props.hover} 
                unHover={props.unHover}
            />
            <Slideshow
                open={open}
                hover={props.hover} 
                unHover={props.unHover}
            />
            
        </div>
    )
}

export default Fullscreen