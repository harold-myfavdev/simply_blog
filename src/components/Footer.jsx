import { useState, useEffect } from 'react';
import './footer.css';

export default function Footer() {
    const [copyrightYear] = useState(new Date().getFullYear())
    
    return (
        <footer className='footer'>
            <p className="copyright-text">  &copy; <span className="copyright-year">{copyrightYear}</span></p>
            <ul className='external-links'>
                <li className="external-link-item"><a href="">Twitter</a></li>
                <li className="external-link-item"><a href="">LinkedIn</a></li>
                <li className="external-link-item"><a href="">Email</a></li>
                <li className="external-link-item"><a href="">RSS feed</a></li>
                <li className="external-link-item"><a href="">Add to Feedly</a></li>
            </ul>
        </footer>
    )
}