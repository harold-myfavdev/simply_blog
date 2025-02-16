import Posts from './Posts';
import './main.css'

export default function Main() {
    return (
        <main>
            <section className='blog-posts' id='recent-blog-posts'>   
                <h2>Recent blog posts</h2>            
                <div className='blog-posts-wrapper'>
                    <Posts limit={1} />
                </div>
                <div className='blog-posts-wrapper'>
                    <Posts limit={2} />
                </div>
            </section>
        </main>
    )
}