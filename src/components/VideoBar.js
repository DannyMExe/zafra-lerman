import React, { useEffect, useRef } from "react";
import Youtube from "react-youtube";
import styled from "styled-components";
// import { useHorizontalScroll } from "../funcs/useSideScroll";

const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* overflow-x: scroll;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 5px; */

    /* justify-content: space-around; */
    //CAUSES OFF SCREEN LEFT

    iframe {
        padding: 5px;
        aspect-ratio: 16 / 9;
        height: 100%;
        width: 100%;
        @media (max-width: 750px) {
            padding: 3px;
        }
    }
    /* width: 100%; */
`;

const Video = styled.div`
    width: 33%;
    align-items: center;
    justify-content: center;

    scroll-snap-align: start;

    @media (max-width: 750px) {
        width: 100%;
    }

    .expand {
        height: auto;
    }

    h3 {
        text-align: center;
    }
    p {
        width: 100%;
        text-align: center;
        margin: auto;
        margin-bottom: 20px;
        @media (max-width: 750px) {
            height: 5vh;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .showmore {
        @media (min-width: 750px) {
            display: none;
        }
    }
`;

const VideoBar = ({ videos }) => {
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

    // const scrollRef = useHorizontalScroll();

    const options = {};

    const expand = (e) => {
        e.target.previousElementSibling.classList.toggle("expand");
        console.log(e.target.previousElementSibling);
    };

    return (
        <div>
            <VideoContainer>
                {youtubeIds.map((id, idx) => {
                    return (
                        <Video key={idx}>
                            <Youtube videoId={id} opts={options} />
                            <h3>Video Title</h3>
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
                            {/* MAKE DIV DISPLAY NONE IN DESKTOP */}
                            <p
                                className="showmore"
                                onClick={(e) => {
                                    expand(e);
                                }}
                            >
                                SHOW MORE
                            </p>
                        </Video>
                    );
                })}
            </VideoContainer>
        </div>
    );
};

export default VideoBar;
