import React from 'react'
import './Header.css'
import Logo from '../../assets/logo/logo.png'


const Header = (props) => {

    const li = [
        "Home",
        "Shop",
        "About"
    ]
    return (
        <>
            <header className={props.open ? 'header active' : 'header'}>
                <nav>
                    <div className='logo'>
                        <img src={Logo} alt='logo' height='40px'/>
                        <p>MounTop</p>
                    </div>
                    <ul className='nav-links'
                        >
                        {
                            li.map(
                                (each, index) => <li className={"li"+index} key={index}
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
