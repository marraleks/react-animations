import React from 'react'
import './ScrollContainer.css'


const ScrollContainer = (props) => {
    return (
        <>
            <div className='scrollContainer'
                    onMouseOver={e => {
                        props.hover(e)
                    }}
                    onMouseLeave={e => {
                        props.unHover(e)
                    }}>
                <p className='current'>1</p>
                    <div className='srollSeperator'></div>
                <p className='total'>6</p>
            </div>

        </>
    )
}
export default ScrollContainer;
