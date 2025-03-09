import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router';
import { PostPreviewProvider } from "./context/PostPreviewContext";
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PostPreviewProvider>
            <Router>
                <App />
            </Router>
        </PostPreviewProvider>
    </StrictMode>
)