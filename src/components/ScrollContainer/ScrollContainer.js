import React from 'react'
import './ScrollContainer.css'


const ScrollContainer = (props) => {
    return (
        <>
            <div className={props.open ? 'scrollContainer active' : 'scrollContainer'}
                    onMouseOver={e => {
                        props.hover(e)
                    }}
                    onMouseLeave={e => {
                        props.unHover(e)
                    }}>
                <p className='current'>{props.current.curr + 1}</p>
                    <div className='srollSeperator'></div>
                <p className='total'>{props.current.length}</p>
            </div>

        </>
    )
}
export default ScrollContainer;
