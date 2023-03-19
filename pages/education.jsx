import React from "react";
import PhotoGallery from "../src/components/PhotoGallery";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";

import MaltaGroup from "../public/pictures/MaltaGroup.jpeg";
import MaltaPrinceHassan from "../public/pictures/MaltaPrinceHassanIrinaBokova.jpg";
import MaltaRoald from "../public/pictures/MaltaRoald.jpg";
import MaltaWorkshop from "../public/pictures/MaltaWorkshop.JPG";

import Dancers from "../public/homePage/Dancers.jpg";

const Container = styled.div`
    padding: 0 16px;
    @media (max-width: 750px) {
        padding: 0;
    }
    h1 {
        text-align: center;
        font-size: 3rem;
    }

    p {
        font-size: clamp(16px, 2vw, 35px);
        padding-bottom: 25px;
    }

    img {
        width: 100%;
        height: auto;
        align-self: center;
    }
`;

const SectionContainer = styled.div`
    display: flex;
    /* padding-bottom: 20px; */
    p {
        font-size: clamp(16px, 2vw, 35px);
        flex: 0.6;
    }

    img {
        width: 100%;
        height: auto;
        align-self: flex-start;
        flex: 0.4;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Education = () => {
    const images = [
        // { src: MaltaGroup, alt: "" },
        { src: MaltaPrinceHassan, alt: "" },
        { src: MaltaRoald, alt: "" },
        { src: MaltaWorkshop, alt: "" },
        // { src: MaltaGroup, alt: "" },
        { src: MaltaPrinceHassan, alt: "" },
        { src: MaltaRoald, alt: "" },
        { src: MaltaWorkshop, alt: "" },
    ];

    const videos = [
        { id: "", title: "Malta Group", desc: "" },
        { id: "", title: "Malta Group", desc: "" },
        { id: "", title: "Malta Group", desc: "" },
        { id: "", title: "Malta Group", desc: "" },
    ];

    return (
        <Container>
            <h1>Education</h1>
            <SectionContainer>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, aliquam! Ducimus voluptates corporis doloremque
                    exercitationem vitae est veniam libero, accusamus a et
                    delectus unde sed quae sint. Harum illo rem perferendis
                    deserunt assumenda ab magni animi rerum enim temporibus,
                    nisi et architecto dolor modi nihil obcaecati sunt
                    distinctio accusantium iure aspernatur officiis
                    necessitatibus! Corrupti ea assumenda officia nobis
                    dignissimos nisi dolor fuga iste inventore, esse, eos
                    excepturi magnam possimus. Nulla facilis ad ducimus cumque
                    totam omnis, ipsam vitae ratione harum aperiam
                    exercitationem distinctio nisi et. Voluptatem, tenetur
                    maiores. Quidem modi excepturi dolor impedit id ut
                    explicabo, dolore error minus deleniti voluptatibus. Totam
                    unde corrupti dolore consequuntur maxime quidem excepturi
                    sit enim assumenda?
                </p>
                <Image src={Dancers} />
            </SectionContainer>
            <p>
                Iste autem accusantium voluptatum obcaecati, asperiores
                necessitatibus nihil excepturi dolores quae facere incidunt,
                facilis molestiae adipisci sint dolorem esse tempora veritatis.
                Nesciunt modi accusamus, ipsam commodi veritatis libero ea,
                itaque sit repellendus incidunt labore, iste quae cum illum
                explicabo perferendis ad corporis tempore facere quaerat ab.
                Sint magnam voluptatum, nisi nam enim magni dignissimos libero
                et! Ad amet consequuntur ea quam unde, et natus laborum aut sunt
                quo explicabo, obcaecati maxime incidunt reprehenderit rem ut
                facilis. Saepe veniam consectetur asperiores, ipsum laboriosam
                unde corporis laborum modi?
            </p>
            {/* <PhotoGallery images={images} /> */}
            <VideoBar videos={videos} />
        </Container>
    );
};

export default Education;
