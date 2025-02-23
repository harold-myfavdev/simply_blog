import { useEffect, useState } from 'react';
import './header.css';

export default function Header() {
    const [isActive, setIsActive] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    function toggleIsActive() {
        setIsActive((prevValue) =>  prevValue == "" ? "active" : "");        
    }

    function toggleIsDarkMode() {                
        setIsDarkMode(prevValue => !prevValue);        
    }
    
    useEffect(() => {
        isDarkMode ? (document.body.classList.add("darkmode")) : document.body.classList.remove("darkmode")        
    },[isDarkMode])

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
                    <input type="checkbox" className="navbar-toggle-theme" id="toggle-theme" value={isDarkMode ? "dark" : "light"} name='theme'onChange={toggleIsDarkMode}/>
                    <label htmlFor="toggle-theme" className="image-container">
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
                    </label>                    
                </fieldset>
            </nav>
            <h1 className='header-title'>SIMPLY BLOG</h1>
        </header>
    )
}