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
                        key={s.title}
                        aria-hidden={i !== curr}>
                {i === curr && (
                    <img 
                    className="image" 
                    src={s.image} 
                    alt={`${s.title}`} />
                )}
                    {/*
                    <div 
                        className="currentSlide">{s.subtitle}<br/>{props.slides.length}
                    </div>
                    */
                    }
                </div>
                ))}
            </div>

            <div className="slideshow-controls">
                <IoIosArrowBack onClick={goToPrev} size="30"/>
                <IoIosArrowForward onClick={goToNext} size="30"/>
            </div>
            <ScrollContainer
            open={props.open}
            hover={props.hover}
            unHover={props.unHover}/>
        </div>
      )
  }

export default Slideshow