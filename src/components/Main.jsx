import { useState, useEffect } from 'react';
import PostCards from './PostCards';
import Pagination from './Pagination';
import './main.css'
import CardData from '../api/data';

export default function Main() {
    const [ postCardData, setPostCardData ] = useState([]);
    const [ recentBlog, setRecentBlog ] = useState([])

    useEffect(() => {
        setPostCardData(CardData);                                
    },[]);    
    
    useEffect(() => {
        if (postCardData.length > 0) {
            let recentBlogs = postCardData.slice(0,4);
            setRecentBlog([
                [recentBlogs[0]],
                recentBlogs.slice(1,3),
                [recentBlogs[3]]
            ])            
            console.log(recentBlogs)
            console.log(postCardData)
        }
    },[postCardData])

    console.log(postCardData)
    console.log(recentBlog)

    return (
        <main>
            <section className='blog-posts' id='recent-blog-posts'>   
                <h2 className='blog-posts-header'>Recent blog posts</h2>            
                <div className='blog-posts-wrapper blog-preview-1'>
                    <PostCards blogs={recentBlog[0]}/>
                </div>
                <div className='blog-posts-wrapper blog-preview-2'>
                    <PostCards blogs={recentBlog[1]}/>
                </div>
                <div className='blog-posts-wrapper blog-preview-3'>
                    <PostCards blogs={recentBlog[2]} />
                </div>
            </section>
            <section className='blog-posts' id='all-blog-posts'>
                <h2 className='blog-posts-header'>All blog posts</h2>     
                <div className='blog-posts-wrapper blog-preview-all'>
                    <PostCards blogs={postCardData} />
                </div>
                <Pagination />
            </section>
        </main>
    )
}