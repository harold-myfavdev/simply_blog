import { useState } from 'react';
import toggleDark from '/src/assets/toggle_dark.png';
import toggleLight from '/src/assets/toggle_light.png';
import './header.css';

export default function Header() {
    const [isActive, setIsActive] = useState("");
    function toggleIsActive() {
        setIsActive((prevValue) =>  prevValue == "" ? "active" : "");        
    }

    return (
        <header className='header'>
            <nav className="navbar">
                <a href="/" className='navbar-brand'>SimplyBlog</a>
                <div className='navbar-burger-menu-wrapper'>
                    <div className={("navbar-burger-menu " + isActive).trim()} onClick={toggleIsActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className='navbar-nav'>
                    <li className="nav-items"><a className="nav-links" href="/blog">Blog</a></li>
                    <li className="nav-items"><a className="nav-links" href="/projects">Projects</a></li>
                    <li className="nav-items"><a className="nav-links" href="/about">About</a></li>
                    <li className="nav-items"><a className="nav-links" href="/newsletter">Newsletter</a></li>                
                </ul>
                <fieldset className='navbar-toggle' aria-label='Choose dark mode or light mode'>
                    <input type="radio" className='navbar-toggle-item' id="light" value="light" name='theme'/>
                    <input type="radio" className='navbar-toggle-item' id="dark" value="dark" name='theme'/>
                    
                    <div className="image-container">
                        <span className='circle'></span>
                        <div className='sun-moon-container'>
                            <span className='moon'></span>
                            <div className='sun'>
                                <span className="sun-ray top"></span>
                                <span className="sun-ray top-right"></span>
                                <span className="sun-ray right"></span>
                                <span className="sun-ray bottom-right"></span>
                                <span className="sun-ray bottom"></span>
                                <span className="sun-ray bottom-left"></span>
                                <span className="sun-ray left"></span>
                                <span className="sun-ray top-left"></span>
                            </div>
                        </div>
                        {/* <img src={toggleLight} id="light-img" alt="Light Mode" />
                        <img src={toggleDark} id="dark-img" alt="Dark Mode" /> */}
                    </div>
                </fieldset>
            </nav>
            <h1 className='header-title'>SIMPLY BLOG</h1>
        </header>
    )
}