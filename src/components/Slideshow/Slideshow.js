import React from 'react';
import './Slideshow.css'
import ScrollContainer from '../ScrollContainer/ScrollContainer'

const images = [
    'images/bilde1.jpg',
    'images/bilde2.jpg',
    'images/bilde3.jpg'
]
  const Slideshow = (props) => {
      return (
        <div className='fullscreen'>
            <div className='slideshow'>
                {/* {
                    images.map((each, index) => 
                        <img key={index} style={{height: "100%"}} src={each} />)
                } */}
                <img src={images[0]} alt='test' height='100%'></img>
            </div>
            <ScrollContainer
            open={props.open}
            hover={props.hover}
            unHover={props.unHover}/>
        </div>
      )
  }

export default Slideshow