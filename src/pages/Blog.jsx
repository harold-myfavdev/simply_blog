import { useParams } from 'react-router';
import { usePostPreview } from '../context/PostPreviewContext';
import PostCards from '../components/PostCards';
import './blog.css';

export default function Blog() {
    const { postCardData } = usePostPreview();    
    const recentBlog = postCardData.slice(0,4);
    const { postSlug } = useParams();        

    return (
        <main>
            <section className='blog-post-main' id='main-blog-posts'>                
                {postSlug ?
                    <PostCards blogs={postCardData.filter(post => post.slug === postSlug)} />
                    :
                    <PostCards blogs={postCardData.slice(0,1)}/>
                }
            </section>
            <section className='blog-posts' id='recent-blog-posts'>   
                <h2 className='blog-posts-header'>Recent blog posts</h2>            
                <div className='blog-posts-wrapper blog-preview-4'>
                    <PostCards blogs={recentBlog}/>
                </div>                
            </section>            
        </main>
    )
}