import React from 'react'

const Fullscreen = (props) => {

    return(
        <>
            <div className='test'>
                <div className='hei'
                    onMouseOver={e => {
                        props.blogHover(e)
                    }}
                    onMouseLeave={e => {
                        props.blogUnHover(e)
                    }}
                >
                </div>
            </div>
        </>
    )
}

export default Fullscreen