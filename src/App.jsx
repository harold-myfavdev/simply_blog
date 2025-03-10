import { Routes, Route } from 'react-router';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import About from './pages/About';
import Newsletter from './pages/Newsletter';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="blog" >
                    <Route index element={<Blog />} />
                    <Route path=":postSlug" element={<Blog />} />                
                </Route>
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="newsletter" element={<Newsletter/>} />
            </Route>
        </Routes>
    )
}