import Arrow from '/src/assets/Arrow.svg?react';
import PostCard from './PostCard';

export default function PostCards(props) {    

    const postCards = props.blogs?.map((post)=>(
            <PostCard 
                key={post.Id}
                arrow={<Arrow />} 
                postImg={post.image_cover} 
                postImgAlt={post.image_cover_alt}
                postTitle={post.title}
                postAuthor={post.author}                
                postDate={post.publish_at}            
                postDesc={post.description}
                postSlug={post.slug}
            />
        )
    )

    return (
        <>
            {postCards}            
        </>
    )
}