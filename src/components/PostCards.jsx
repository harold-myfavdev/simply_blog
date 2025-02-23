import Arrow from '/src/assets/Arrow.svg?react';
import PostCard from './PostCard';

export default function PostCards(props) {

    const postCards = props.blogs?.map((post)=>(
            <PostCard 
                key={post.id}
                arrow={<Arrow />} 
                postImg={post.img.src} 
                postImgAlt={post.img.alt}
                postTitle={post.title}
                postAuthor={post.author}
                map={post.googleMapsLink}
                postDate={post.date}            
                postDesc={post.text}
            />
        )
    )

    return (
        <>
            {postCards}            
        </>
    )
}