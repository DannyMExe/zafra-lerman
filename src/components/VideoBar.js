import React, { useEffect, useRef } from "react";
import Youtube from "react-youtube";
import styled from "styled-components";
import { useHorizontalScroll } from "../funcs/useSideScroll";

const VideoContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    overscroll-behavior-inline: contain;
    /* scroll-snap-type: inline mandatory; */ //SCROLL SNAP
    scroll-padding-inline: 5px;

    /* justify-content: space-around; */
    //CAUSES OFF SCREEN LEFT

    iframe {
        padding: 10px;
	aspect-ratio: 16 / 9;
	height: 100%;
	width: 100%;
    }
    /* width: 100%; */
`;

const Video = styled.div`
    align-items: center;
    justify-content: center;

    scroll-snap-align: start;

    p {
        width: 45vw;
        text-align: center;
        margin: auto;
    }
`;

const VideoBar = ({videos}) => {
    const youtubeIds = [
        "6wLCKkr_yQk",
        "RGuMyXOhcLI",
        "SC7ZdAKyl24",
        "boMp0vz_uRk",
        "1dDfRW5v4bI",
        "JQIvWPYkDZM",
        "NUmrQoYKx_4",
        "4SiPnGJcI4A",
    ];

    const scrollRef = useHorizontalScroll();

    const options = {
        
    }

    return (
        <div>
            <VideoContainer ref={scrollRef}>
                {youtubeIds.map((id, idx) => {
                    return (
                        <Video key={idx}>
                            <Youtube videoId={id} opts={options}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Aliquet porttitor lacus luctus accumsan tortor
                                posuere ac ut. Sit amet luctus venenatis lectus.
                                Lorem sed risus ultricies tristique nulla
                                aliquet enim. Habitant morbi tristique senectus
                                et netus et malesuada.
                            </p>
                        </Video>
                    );
                })}
            </VideoContainer>
        </div>
    );
};

export default VideoBar;
