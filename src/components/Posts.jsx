import MountFuji from '/src/assets/Mount Fuji.png';
import Marker from '/src/assets/Marker.svg';
import Post from './Post';
import postsData from '../api/data';

export default function Posts() {
    console.log(postsData);
    const posts = postsData.map((post)=>(
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