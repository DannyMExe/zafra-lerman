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

import RightsImage from "../public/homePage/sakharov.jpg";
import RightsImage2 from "../public/pictures/NikitinInDC2000.jpg";

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

const HumanRights = () => {
    const videos = [
        {
            id: "CKQpQAnJjgk",
            title: "Professor Zafra Lerman with Aleksandr Nikitin on C-SPAN",
            desc: ``,
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
            <h1>Human Rights</h1>
            <SectionContainer>
                <Image src={RightsImage} />
                <p>
                    From 1986 to 2011, Zafra chaired the American Chemical
                    Society's Subcommittee on Scientific Freedom and Human
                    Rights. She worked on human rights cases in the former
                    Soviet Union, Russia, China, Guatemala, Cuba, Peru, South
                    Africa, Iran, and many more. She met with dissidents in most
                    of these countries. After meeting with Andrei Sakharov in
                    1989 (The father of the Soviet hydrogen bomb, who became a
                    champion for disarmament and human rights. He received the
                    Nobel Peace Prize in 1975) and taking his advice, she took a
                    crash course in Russian to facilitate her work with
                    dissidents in the former Soviet Union. At great risk to her
                    safety, she succeeded in preventing executions, releasing
                    prisoners of conscience from jail, and bringing dissidents
                    to freedom. From 1987 until now, she serves as a Vice Chair
                    for Chemistry on the Board of the Committee of Concerned
                    Scientists (CCS), where she continues to be very active in
                    human rights cases.
                </p>
            </SectionContainer>
            <SectionContainer>
                <Image src={RightsImage2} />
                <p>
                    Professor Zafra Lerman appears on C-SPAN to introduce
                    Aleksandr Nikitin, who was a Russian dissident that was
                    arrested by the FSB after publishing an article about
                    spilling nuclear waste from submarines into the sea, on a
                    discussion on Radioactive Contamination in the Former Soviet
                    Union. Aleksandr Nikitin spoke about the problem of nuclear
                    safety in Russia and potential threats from radiation from
                    various sources. Among the topics he addressed were threats
                    from spent submarine reactors, environmental threats posed
                    by poorly maintained facilities, and government secrecy and
                    inaction. He also commented on a recent accident in which a
                    Russian submarine had become incapacitated in the Barents
                    Sea. Recorded August 24th, 2000
                </p>
            </SectionContainer>
            <VideoBar videos={videos} />
        </Container>
    );
};

export default HumanRights;
