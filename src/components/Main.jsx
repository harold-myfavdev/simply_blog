import Posts from './Posts';
import './main.css'

export default function Main() {
    return (
        <main>
            <section className='blog-posts' id='recent-blog-posts'>   
                <h2 className='blog-posts-header'>Recent blog posts</h2>            
                <div className='blog-posts-wrapper blog-preview-1'>
                    <Posts limit={1} />
                </div>
                <div className='blog-posts-wrapper blog-preview-2'>
                    <Posts limit={2} />
                </div>
                <div className='blog-posts-wrapper blog-preview-3'>
                    <Posts limit={1} />
                </div>
            </section>
            <section className='blog-posts' id='all-blog-posts'>
                <h2 className='blog-posts-header'>All blog posts</h2>     
                <div className='blog-posts-wrapper blog-preview-1'>
                    <Posts limit={'none'} />
                </div>
            </section>
        </main>
    )
}