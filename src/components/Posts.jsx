import MountFuji from '/src/assets/Mount Fuji.png';
import Marker from '/src/assets/Marker.svg';
import Post from './Post';

export default function Posts() {
    const postsData = [
        {postImg : MountFuji,
         marker : Marker,
         map : "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
         postTitle : "Mount Fuji",
         postStartDAte : "12 Jan, 2021",
         postEndDAte : "24 Jan, 2023",
         postDesc : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        },

        {postImg : MountFuji,
            marker : Marker,
            map : "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
            postTitle : "Mount Fuji",
            postStartDAte : "12 Jan, 2021",
            postEndDAte : "24 Jan, 2023",
            postDesc : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        },

        {postImg : MountFuji,
            marker : Marker,
            map : "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
            postTitle : "Mount Fuji",
            postStartDAte : "12 Jan, 2021",
            postEndDAte : "24 Jan, 2023",
            postDesc : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        },

    ]
    console.log(postsData.length)
    return (
        <>
            {postsData.map((post, i)=>(
                <Post 
                    key={i}
                    postImg={postsData[i].postImg} 
                    marker={postsData[i].marker} 
                    map={postsData[i].map}
                    postTitle={postsData[i].postTitle}
                    postStartDate={postsData[i].postStartDAte}
                    postEndDate={postsData[i].postEndDAte}
                    postDesc={postsData[i].postDesc}
                />
                )
            )}
            
        </>
    )
}