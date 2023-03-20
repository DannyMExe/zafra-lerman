import React from "react";
import PhotoGallery from "../src/components/PhotoGallery";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";

import MaltaGroup from "../public/pictures/MaltaGroup.jpeg";
import MaltaPrinceHassan from "../public/pictures/MaltaPrinceHassanIrinaBokova.jpg";
import MaltaRoald from "../public/pictures/MaltaRoald.jpg";
import MaltaWorkshop from "../public/pictures/MaltaWorkshop.jpg";

import Dancers from "../public/homePage/Dancers.jpg";

const Container = styled.div`
    padding: 0 16px;
    @media (max-width: 750px) {
        /* padding: 0; */
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        padding: 10px 0;
    }

    p {
        font-size: clamp(16px, 2vw, 35px);
        padding-bottom: 25px;
    }

    img {
        width: 40vw;
        height: auto;
        align-self: center;
        @media (max-width: 750px) {
            width: 100%;
        }
    }
`;

const SectionContainer = styled.div`
    display: flex;
    /* padding-bottom: 20px; */
    p {
        font-size: clamp(16px, 2vw, 35px);
        flex: 0.6;
        @media (min-width: 750px) {
            padding-left: 5px;
        }
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
        {
            id: "6wLCKkr_yQk",
            title: "The Bondfather",
            desc: `1997 Student Project by Rebekah Lewis & Eddie Sircher`,
        },
        {
            id: "RGuMyXOhcLI",
            title: "Enter The Ozone",
            desc: `Student Project by Marcus Jones`,
        },
        {
            id: "SC7ZdAKyl24",
            title: "Bondfellas",
            desc: `Student Project by Skylar Wesby`,
        },
        {
            id: "boMp0vz_uRk",
            title: "Flatland",
            desc: "Student Project by Todd Ripplinger",
        },
        {
            id: "1dDfRW5v4bI",
            title: "Little Boy",
            desc: "Student Project by Todd Ripplinger",
        },
        {
            id: "JQIvWPYkDZM",
            title: "Stratosphere Wars : Chlorine Strikes Back",
            desc: "1999 Student Project by Marcus Jones",
        },
        {
            id: "NUmrQoYKx_4",
            title: "Fossils",
            desc: "Student Project by Jim Orlik",
        },
        {
            id: "4SiPnGJcI4A",
            title: "Love Story : Sodium & Chlorine",
            desc: "1982 Student Project",
        },
    ];

    return (
        <Container>
            <h1>Education</h1>
            <SectionContainer>
                <Image src={Dancers} />
                <p>
                    Zafra developed an innovative approach of teaching science
                    at all levels using art, music, dance, drama, animation,
                    rap. These methods proved to be extremely successful with
                    underprivileged students around the world and received
                    international recognition. In 2000, she adopted the school
                    district of the town of Soweto, South Africa (the birthplace
                    of Mandela and Bishop Tutu). In Chicago&#39;s low-income
                    neighborhoods, she worked with students, teachers and
                    parents and made a tremendous change in their attitudes
                    towards science. Zafra worked with homeless students at
                    night in a dance studio and taught them science through
                    dance. Many of these students graduated from college and two
                    continued for a PhD in biochemistry. She worked with
                    prisoners who succeeded in receiving bachelor&#39;s and
                    master&#39;s degrees. Over 16,000 Chicago public school
                    students and more than 1,000 teachers participated in her
                    programs.
                </p>
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
