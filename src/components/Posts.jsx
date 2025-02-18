import Marker from '/src/assets/Marker.svg';
import Post from './Post';
import postsData from '../api/data';

export default function Posts(props) {
    const limit = props.limit == 'none' ? undefined : props.limit;
    const postsDataLimit = postsData.slice(0, limit); /* Limit num of post rendered */ 
    
    const posts = postsDataLimit.map((post)=>(
            <Post 
                key={post.id}
                marker={Marker} 
                postImg={post.img.src} 
                postImgAlt={post.img.alt}
                postTitle={post.title}
                postCountry={post.country}
                map={post.googleMapsLink}
                postDateRange={post.dates}            
                postDesc={post.text}
            />
        )
    )

    return (
        <>
            {posts}            
        </>
    )
}