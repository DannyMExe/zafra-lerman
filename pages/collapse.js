import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import image from "../public/aboutPhoto.jpg";
import EduImage from "../public/homePage/Dancers.jpg";
import DiplomacyImage from "../public/homePage/GroupPhotoMin.jpg";
import RightsImage from "../public/homePage/sakharov.jpg";
import Collapse from "../src/components/Home/Collapsible";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    /* padding-top: 30px; */
    gap: 15vh;

    h1 {
        font-size: 45px;
        /* margin-top: 30px; */
        padding-bottom: 10%;
        padding-top: 5%;
        max-width: 40vw;
        @media (max-width: 750px) {
            text-align: center;
            position: absolute;
            /* top: 420px; */
            bottom: 30px;
            /* left: 50; */
            color: white;
            font-size: 24px;
            padding: 0 10px;
            max-width: 80vw;
        }
    }
    #bioImg {
        float: left;
        max-width: 50vw;
        height: auto;
        padding-right: 15px;
        padding-left: 15px;

        @media (max-width: 750px) {
            display: block;
            float: none;
            width: 100vw;
            max-width: none;
            margin: auto;
            padding: 0;
        }
    }
    p {
        text-align: left;
        /* font-size: 25px; */
        font-size: clamp(16px, 2vw, 35px);
        /* font-size: 2.5vw; */
        @media (max-width: 750px) {
            font-size: 18px;
        }
        padding: 15px;
        /* padding-left: 15px; */
    }
    .triggerTitle {
        font-size: 36px;
        text-align: center !important;
    }
`;

const Bio = styled.div`
    display: flex;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Parallax = styled(motion.div)`
    position: absolute;
    background-image: url("/homePage/bgSkinny.jpeg");
    background-size: cover;
    background-position: center;
    top: 0;
    height: 400vh;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
`;

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
    const collapsibleInfo = [
        {
            title: "Science Education Through Art, Music, Dance, Drama, Rap and Computer Animation.",
            image: EduImage,
            info: `Zafra developed an innovative approach of teaching science at all levels using art, music, dance, drama, rap, and cultural backgrounds. These methods proved to be extremely successful among underprivileged students around the world and received international recognition. In 2000, she adopted the school district of the town of Soweto, South Africa (the birthplace of Mandela and Bishop Tutu). In Chicago's low-income neighborhoods, she worked with students, teachers and parents and made a tremendous change in their attitudes towards science. She worked with homeless students at night in a dance studio and taught them science through dance (while bringing food too). Many of these students graduated from college and two continued for a PhD in biochemistry. She worked with prisoners who succeeded in receiving bachelor’s and master’s degrees. Over 16,000 Chicago public school students and more than 1,000 teachers participated in her programs.`,
            link: "/education",
        },
        {
            title: "Fighting for Human Rights Around the Globe.",
            image: RightsImage,
            info: `From 1986 to 2011, she chaired the American Chemical Society's Subcommittee on Scientific
            Freedom and Human Rights. She worked on human rights cases in the former Soviet Union, Russia,
            China, Guatemala, Cuba, Peru, South Africa, Iran, and many more. She met with dissidents in most of
            these countries. After meeting Andrei Sakharov in 1989 and taking his advice, she took a crash course in
            Russian to facilitate her work with dissidents in the former Soviet Union. At great risk to her safety, she
            succeeded in preventing executions, releasing prisoners of conscience from jail, and bringing dissidents
            to freedom. From 1987 until now, she serves as a Vice Chair for Chemistry on the Board of the
            Committee of Concerned Scientists (CCS), where she continues to be very active in human rights cases.`,
            link: "/humanrights",
        },
        {
            title: "Science Diplomacy as a Bridge to Peace in the Middle East",
            image: DiplomacyImage,
            info: `Since 2001, she has been using Science Diplomacy as a Bridge to Peace in the Middle East and is
            the President of the Malta Conferences Foundation. The Malta Conferences are the only platform in the
            world which brings together scientists from 15 Middle East countries (Bahrain, Egypt, Iraq, Iran, Israel,
            Jordan, Kuwait, Lebanon, Oman, Palestine, Qatar, Saudi Arabia, Syria, Turkey, and the United Arab
            Emirates) with Nobel Laureates to work for 5 days on solving regional problems, establishing cross-
            border collaborations, and forging relationships that bridge chasms of distrust and intolerance.`,
            link: "/diplomacy",
        },
    ];

    return (
        <Container>
            <Parallax style={{ y }}></Parallax>
            <Bio>
                <Image
                    id="bioImg"
                    src={image}
                    height={500}
                    alt={"Portrait Photo od Dr. Zafra Lerman"}
                />
                <HeaderContainer>
                    <h1>
                        Zafra Lerman is a scientist, educator, and humanitarian
                        recognized for her contributions to science education
                        and science diplomacy.
                    </h1>
                </HeaderContainer>
            </Bio>
            {collapsibleInfo.map((item, index) => {
                return (
                    <Collapse
                        key={index}
                        title={item.title}
                        image={item.image}
                        info={item.info}
                        link={item.link}
                    />
                );
            })}

            {/* <VideoBar />
            <MaltaBar /> */}
        </Container>
    );
};

export default Home;
