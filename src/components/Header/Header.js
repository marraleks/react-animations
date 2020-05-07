import React from 'react'
import './Header.css'


const Header = (props) => {

    const li = [
        "lorem",
        "ipsum",
        "ditt"
    ]
    return (
        <>
            <header className={props.open ? 'header active' : 'header'}>
                <nav>
                    <h1>React Fun</h1>
                    <ul className='nav-links'
                        >
                        {
                            li.map(
                                (each, index) => <li key={index}
                                onMouseOver={e => {
                                    props.hover(e)
                                }}
                                onMouseLeave={e => {
                                    props.unHover(e)
                                }}>{each}</li>
                            )
                        }
                    </ul>
                </nav>
            </header>

        </>
    )
}
export default Header;
