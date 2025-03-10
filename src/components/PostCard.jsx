import { Link } from 'react-router';

export default function PostCard(props) {  

    return (
        <>
            <figure className="postContainer">
                <div className="postImg-wrapper">
                    <img src={props.postImg} alt={props.postImgAlt} className="postImg"/>
                </div>
                <div className="postDetails">
                    <div className="postAuthorDate-wrapper">
                        <p className="postAuthor">{props.postAuthor}</p>
                        <span className="dot"></span>
                        <p className="postDate">{props.postDate}</p>
                    </div>
                    <h2 className="postTitle">
                        {props.postTitle}
                        <Link to={`/blog/${props.postSlug}`} className="arrow">
                            {props.arrow}
                        </Link> 
                    </h2>
                    <p className="postDesc">{props.postDesc}</p>
                </div>
            </figure>
        </>
    )
}