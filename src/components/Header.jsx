import { useState } from 'react';
import toggleDark from '/src/assets/toggle_dark.png';
import toggleLight from '/src/assets/toggle_light.png';

export default function Header() {
    const [isChecked, setIsChecked] = useState("checked");
    function handleClick() {
        setIsChecked((prevValue) =>  prevValue == "checked" ? "notChecked" : "checked");
        console.log(isChecked);
        // console.log("im click");
    }

    return (
        <header className='header'>
            <nav className="navbar">
                <a href="/" className='navbar-brand'>SimplyBlog</a>
                <div className='navbar-burger-menu'>
                    <span></span>
                    <span></span>
                    <span></span>
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
                        <img onClick={handleClick} src={toggleLight} id="light-img" alt="Light Mode" />
                        <img onClick={handleClick} src={toggleDark} id="dark-img" alt="Dark Mode" />
                    </div>
                </fieldset>
            </nav>
            <h1 className='header-title'>SIMPLY BLOG</h1>
        </header>
    )
}