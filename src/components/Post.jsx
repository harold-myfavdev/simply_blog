import MountFuji from '/src/assets/Mount Fuji.png';
import Marker from '/src/assets/Marker.svg';

export default function Post() {
    return (
        <>
            <figure className="postContainer">
                <img src={MountFuji} alt="Mount Fuji" className="postImg"/>
                <div className="postDetails">
                    <p className="postLocation">
                        <img src={Marker} alt="Location Marker" />
                        JAPAN
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="googleMap">View on Google Maps</a>
                    </p>
                    <h2 className="postTitle">Mount Fuji</h2>
                    <p className="postDate"><time datetime="2021-01-12"></time>12 Jan, 2021 - <time datetime="2021-01-24">24 Jan, 2021</time></p>
                    <p className="postDesc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </figure>
            <hr />
        </>
    )
}