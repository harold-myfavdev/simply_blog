import Arrow from '/src/assets/Arrow.svg?react';
import PostCard from './PostCard';

export default function PostCards(props) {
    const ipfsUrl = "https://ipfs.chainsafe.io/ipfs/";    
    console.log(props);

    const postCards = props.blogs?.map((post)=>(
            <PostCard 
                key={post.postpreview_id}
                arrow={<Arrow />} 
                postImg={ipfsUrl+post.image_cover} 
                postImgAlt={post.image_cover_alt}
                postTitle={post.title}
                postAuthor={post.author}
                // map={post.googleMapsLink}
                postDate={post.publish_at}            
                postDesc={post.description}
            />
        )
    )

    return (
        <>
            {postCards}            
        </>
    )
}