import React, { useState } from 'react';
import './Slideshow.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ScrollContainer from '../ScrollContainer/ScrollContainer'



const hoverImg = () => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.add("imghover")
  } 
  const unHoverImg = () => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.remove("imghover")
  }

  const Slideshow = (props) => {
    
    const [curr, setCurr] = useState(0);
    const { length } = props.slides;
    
    const goToNext = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }
      
    const goToPrev = () => {
        setCurr(curr === 0  ? length - 1 : curr - 1);
    }
  
   
    
    if (!Array.isArray(props.slides) || length <= 0) {
        return null;
    }

      return (
        <div className='fullscreen'>
            <div className='slider'
                onMouseOver={e => {
                    hoverImg(e)
                }}
                onMouseLeave={e => {
                    unHoverImg(e)
                }}>
                   
                {props.slides.map((s, i) => (
                <div
                        className={i === curr ? "slide active" : "slide"}
                        key={s.number}
                        aria-hidden={i !== curr}>
                {i === curr && (
                    <img 
                    className="image"
                    src={s.image} 
                    alt={`${s.title}`} />
                )}
                </div>
                ))}
            </div>

            <div className="slideshow-controls" >
                <IoIosArrowBack className="left" size="30" onClick={goToPrev} 
                    onMouseOver={e => {
                        props.hover(e)
                    }}
                    onMouseLeave={e => {
                        props.unHover(e)
                    }}/>
                <IoIosArrowForward className="right" size="30" onClick={goToNext}
                    onMouseOver={e => {
                        props.hover(e)
                    }}
                    onMouseLeave={e => {
                        props.unHover(e)
                    }}/>
            </div>
            <ScrollContainer
            current={{curr, length}}
            open={props.open}
            hover={props.hover}
            unHover={props.unHover}/>
        </div>
      )
  }

export default Slideshow