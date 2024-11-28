"use client"
import YouTube from "react-youtube";

export default function YouTubeComponet() {
    const opts = {
        width:'100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    return (<>
        <YouTube videoId="igleg-OQRtA" opts={opts} className='w-full' style={{height:'40vh'}}/>
    </>)
}