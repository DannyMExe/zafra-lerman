import React, { useEffect, useRef } from "react";
import Youtube from "react-youtube";
import styled from "styled-components";
// import { useHorizontalScroll } from "../funcs/useSideScroll";

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  .bg {
    /* background-color: rgba(255, 255, 255, 0.5); */
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
    font-size: 1.8em;
    @media (max-width: 750px) {
      font-size: 1.4em;
    }
  }
  p {
    width: 100%;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
    font-size: 1.2em;
    padding-bottom: 0;
    @media (max-width: 750px) {
      height: 5vh;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .showmore {
    border-bottom: 1px solid black;
    @media (min-width: 750px) {
      display: none;
    }
  }
  .home & {
    width: 50vw;
    @media (max-width: 750px) {
      width: 100%;
    }
  }
  .homeTitle {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    width: 50vw;
    @media (max-width: 750px) {
      width: 100vw;
    }
  }
`;

const VideoBar = ({ videos, bg, home }) => {
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
      <VideoContainer className={home ? "home" : ""}>
        {videos.map((video, idx) => {
          return (
            <Video key={idx} id="vid">
              <Youtube videoId={video.id} opts={options} />
              <h3 className={home ? "homeTitle bg" : "bg"}>{video.title}</h3>
              {video.desc ? <p className="bg">{video.desc}</p> : <></>}
              {/* MAKE DIV DISPLAY NONE IN DESKTOP */}
              {/* <p
                                className="showmore"
                                onClick={(e) => {
                                    expand(e);
                                }}
                            >
                                SHOW MORE
                            </p> */}
            </Video>
          );
        })}
      </VideoContainer>
    </div>
  );
};

export default VideoBar;
