export default function Post(props) {  

    return (
        <>
            <figure className="postContainer">
                <div className="postImg-wrapper">
                    <img src={props.postImg} alt={props.postImgAlt} className="postImg"/>
                </div>
                <div className="postDetails">
                    <p className="postLocation">
                        <img src={props.marker} alt="Location Marker" />
                        {props.country}
                        <a href={props.map} className="googleMap">View on Google Maps</a>
                    </p>
                    <h2 className="postTitle">{props.postTitle}</h2>
                    <p className="postDate">{props.postDateRange}</p>
                    <p className="postDesc">{props.postDesc}</p>
                </div>
            </figure>
        </>
    )
}