import { useState, useEffect } from 'react';
import './footer.css';

export default function Footer() {
    const [copyrightYear] = useState(new Date().getFullYear())
    async function fetchData() {
        try {
            const response = await fetch("https://myfav.dev/fetch", {
                method: "GET",
                headers: {
                    "Origin": window.location.origin // Ensure it's your allowed domain
                }
            });
    
            if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }
    
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
            <button onClick={fetchData}>Fetch Data</button>
        </footer>
    )
}