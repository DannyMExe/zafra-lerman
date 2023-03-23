import React from "react";
import PhotoGallery from "../src/components/PhotoGallery";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";

import MaltaPrinceHassan from "../public/pictures/MaltaPrinceHassanIrinaBokova.jpg";
import MaltaRoald from "../public/pictures/MaltaRoald.jpg";
import MaltaWorkshop from "../public/pictures/MaltaWorkshop.jpg";

import Dancers from "../public/homePage/Dancers.jpg";
import DancersClass from "../public/pictures/FigDancers.jpg";

const Container = styled.div`
    padding-top: 45px;
    padding: 0 10px;
    /* position: relative; */
    @media (max-width: 750px) {
        /* padding: 0; */
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        padding: 15px 0;
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
    padding-bottom: 10px;
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

const Background = styled.div`
    position: absolute;
    background-image: url("/homePage/bgSkinny.jpeg");
    background-size: cover;
    background-position: center;
    top: 0;
    bottom: 0;
    height: 400vh;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
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
            id: "tNwHYh5YbZo",
            title: "Period Table: The Elements Dance",
            desc: ``,
        },
        {
            id: "6wLCKkr_yQk",
            title: "The Bondfather",
            desc: `1997 Student Project by Rebekah Lewis & Eddie Sircher`,
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
            id: "6aYn6xjJ3jk",
            title: "The Amazing Story of Becquerel's Strange Discovery",
            desc: "2002 Student Project by Ariel Goldenberg & Omid Keshtkar",
        },
        {
            id: "JQIvWPYkDZM",
            title: "Stratosphere Wars : Chlorine Strikes Back",
            desc: "1999 Student Project by Marcus Jones",
        },
        {
            id: "TdaC5blXZtI",
            title: "Ionic Bondage",
            desc: "1999 Student Project by Joe Nelson.",
        },
        {
            id: "4SiPnGJcI4A",
            title: "Love Story : Sodium & Chlorine",
            desc: "1982 Student Project",
        },
        {
            id: "50cJKmeiRKc",
            title: "The Astounding Madame Curie Chronicles",
            desc: "2003 Student Project by Todd Ripplinger, Omid Keshtkar, Mark Phillips & Ariel Goldenberg",
        },
        {
            id: "7rB_cUls89I",
            title: "Plenty Of Ozone",
            desc: "1995 Student Project",
        },
        {
            id: "UtG9WfKgfks",
            title: "The CFCs (A Band) - A Short History",
            desc: "1993 Student Project by Greg Janssen",
        },
        {
            id: "z05Hn3jO8jI",
            title: "James Bond: Operation Neutrality",
            desc: "1999 Student Project by Ray Bieniasz & Mike Schraut",
        },
    ];

    return (
        <Container>
            {/* <Background></Background> */}
            <h1>Education</h1>
            <SectionContainer>
                <Image src={DancersClass} unoptimized={true} />
                <p>
                    Zafra developed an innovative approach of teaching science
                    at all levels using art, music, dance, drama, animation, and
                    rap. These methods proved to be extremely successful with
                    underprivileged students around the world and received
                    international recognition. In 2000, she adopted the school
                    district of the town of Soweto, South Africa (the birthplace
                    of Mandela and Bishop Tutu). In Chicago&#39;s low-income
                    neighborhoods, she worked with students, teachers and
                    parents and had a tremendous impact on their attitudes
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
            <SectionContainer>
                {/* <Image src={DancersClass} unoptimized={true} /> */}
            </SectionContainer>
            {/* <PhotoGallery images={images} /> */}
            <VideoBar
                videos={[
                    {
                        id: "oThebAJpjbY",
                        title: "Classroom of the Future 2.0",
                        desc: `Student Project by Radek Michalik, Abdias Perez, & Mark Theriault`,
                    },
                ]}
            />
            <VideoBar videos={videos} />
        </Container>
    );
};

export default Education;
