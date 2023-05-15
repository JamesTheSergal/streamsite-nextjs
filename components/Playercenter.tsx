'use client'

import React from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function Playercenter() {
    var playUrl = "http://snergal.live:8088/hls/snerg.m3u8";
    const [isStreamLoaded, setIsStreamLoaded] = React.useState(false);
    const [isStreamFailed, setIsStreamFailed] = React.useState(false);
    const [hasStreamEnded, setHasStreamEnded] = React.useState(false);

    const handleReady = () => {
        setIsStreamLoaded(true);
    }

    const handleError = () => {
        setIsStreamFailed(true);
    }

    const handleEnded = () => {
        setHasStreamEnded(true);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                {isStreamLoaded && !isStreamFailed ? <></> : <progress className="progress w-56">Loading...</progress>}
                {isStreamFailed ?
                    <>
                        <img src="blink.gif" className="w-56 shadow-lg" />
                        <p className="text-center">Stream failed to load. Please refresh the page.</p>
                    </>
                : <ReactPlayer url={playUrl} className="w-56 shadow-lg"
                onEnded={handleEnded} onError={handleError}
                 onReady={handleReady} controls={true}
                  playing={true} muted={true}
                  width={"75vw"} height={"75vh"}/>}    
            </div>
        </>
    )
}
