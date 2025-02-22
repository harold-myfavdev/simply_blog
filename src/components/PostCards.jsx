import Arrow from '/src/assets/Arrow.svg';
import PostCard from './PostCard';

export default function PostCards(props) {
    console.log(props)
    const postCards = props.blogs?.map((post)=>(
            <PostCard 
                key={post.id}
                arrow={Arrow} 
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
            {postCards}            
        </>
    )
}