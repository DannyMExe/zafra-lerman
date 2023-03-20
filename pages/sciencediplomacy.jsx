import React from "react";
import PhotoGallery from "../src/components/PhotoGallery";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";

import MaltaGroup from "../public/pictures/MaltaGroup.jpeg";
import MaltaPrinceHassan from "../public/pictures/MaltaPrinceHassanIrinaBokova.jpg";
import MaltaRoald from "../public/pictures/MaltaRoald.jpg";
import MaltaWorkshop from "../public/pictures/MaltaWorkshop.jpg";
import Link from "next/link";

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
        @media (min-width: 750px) {
            padding-left: 5px;
        }
    }

    img {
        width: 40vw;
        height: auto;
        align-self: flex-start;
        flex: 0.4;
        @media (max-width: 750px) {
            padding-bottom: 20px;
            width: 100%;
        }
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Malta = styled.div`
    border-top: 1px solid #000;
    h2 {
        text-align: center;
        font-size: 3rem;
        padding: 10px 0;
    }
    p {
        text-align: center;
    }
`;

const ScienceDiplomacy = () => {
    const videos = [
        {
            id: "CKQpQAnJjgk",
            title: "Professor Zafra Lerman with Aleksandr Nikitin on C-SPAN",
            desc: `Professor Zafra Lerman appears on C-SPAN to introduce Aleksandr Nikitin on a discussion on Radioactive Contamination in the Former Soviet Union.

        Aleksandr Nikitin spoke about the problem of nuclear safety in Russia and potential threats from radiation from various sources. Among the topics he addressed were threats from spent submarine reactors, environmental threats posed by poorly maintained facilities, and government secrecy and inaction. He also commented on a recent accident in which a Russian submarine had become incapacitated in the Barents Sea. 
        
        Recorded August 24th, 2000`,
        },
        {
            id: "PiM2V7TYpjg",
            title: "Zafra Lerman Acceptance Speech for 2016 Sakharov Award",
            desc: "Zafra Lerman Acceptance Speech for 2016 Sakharov Award",
        },
        // { id: "", title: "Malta Group", desc: "" },
        // { id: "", title: "Malta Group", desc: "" },
    ];

    return (
        <Container>
            <h1>Science Diplomacy</h1>
            <SectionContainer>
                <Image src={MaltaWorkshop} />
                <p>
                    Since 2001, she has been using Science Diplomacy as a Bridge
                    to Peace in the Middle East and is the President of the
                    Malta Conferences Foundation. The Malta Conferences are the
                    only platform in the world which brings together scientists
                    from 15 Middle East countries (Bahrain, Egypt, Iraq, Iran,
                    Israel, Jordan, Kuwait, Lebanon, Oman, Palestine, Qatar,
                    Saudi Arabia, Syria, Turkey, and the United Arab Emirates)
                    with Nobel Laureates to work for 5 days on solving regional
                    problems, establishing cross-border collaborations, and
                    forging relationships that bridge chasms of distrust and
                    intolerance.
                </p>
            </SectionContainer>
            <SectionContainer>
                <Image src={MaltaRoald} />
                <p>
                    Since 2001, she has been using Science Diplomacy as a Bridge
                    to Peace in the Middle East and is the President of the
                    Malta Conferences Foundation. The Malta Conferences are the
                    only platform in the world which brings together scientists
                    from 15 Middle East countries (Bahrain, Egypt, Iraq, Iran,
                    Israel, Jordan, Kuwait, Lebanon, Oman, Palestine, Qatar,
                    Saudi Arabia, Syria, Turkey, and the United Arab Emirates)
                    with Nobel Laureates to work for 5 days on solving regional
                    problems, establishing cross-border collaborations, and
                    forging relationships that bridge chasms of distrust and
                    intolerance.
                </p>
            </SectionContainer>
            <Malta>
                <h2>The Malta Conferences Foundation</h2>
                <p>
                    Visit the website of the Malta Conferences Foundation to
                    learn more{" "}
                    <span>
                        <Link href="https://www.maltaconferencesfoundation.org/">
                            HERE
                        </Link>
                    </span>
                </p>
            </Malta>
            {/* <VideoBar videos={videos} /> */}
        </Container>
    );
};

export default ScienceDiplomacy;
