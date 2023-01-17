import React from 'react'
import Youtube from 'react-youtube'
import styled from 'styled-components'

const Container = styled.div`
padding-top: 100px;
h1 {
    text-align: center;
}
display: inline-block;
`;

const VideoContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
iframe {
    padding: 10px;
}
`;

const Video = styled.div`
align-items: center;
justify-content: center;
p {
    width: 640px;
    text-align: center;
    margin: auto;
}
`;

const Gallery = () => {

    const youtubeIds = ['6wLCKkr_yQk', 'RGuMyXOhcLI', 'SC7ZdAKyl24', 'boMp0vz_uRk', '1dDfRW5v4bI', 'JQIvWPYkDZM', 'NUmrQoYKx_4', '4SiPnGJcI4A']

  return (
    <Container>
        <h1>Student Project Videos</h1>
        <VideoContainer>
            {youtubeIds.map(id => {
                return (
                    <Video>
                        <Youtube videoId={id} height='390' width='640'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Sit amet luctus venenatis lectus. Lorem sed risus ultricies tristique nulla aliquet enim. Habitant morbi tristique senectus et netus et malesuada.</p>
                    </Video>
                )
            })}
        </VideoContainer>
    </Container>
  )
}

export default Gallery