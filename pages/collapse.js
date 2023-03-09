import React from "react";
import Image from "next/image";
import image from "../public/aboutPhoto.jpg";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import MaltaBar from "../src/components/MaltaBar";
import { useScroll, motion, useTransform } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Collapsible from "react-collapsible";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* padding-top: 30px; */
    gap: 20vh;

    h1 {
        font-size: 45px;
        /* margin-top: 30px; */
        padding-bottom: 10%;
        padding-top: 5%;
        max-width: 40vw;
        @media (max-width: 750px) {
            text-align: center;
            position: absolute;
            top: 420px;
            left: 0;
            color: white;
            font-size: 24px;
            padding: 0 10px;
        }
    }
    img {
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
`;

const Education = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 30px; */
    height: 100%;
    width: 80vw;
    /* justify-content: center; */

    /* background-image: url("/homePage/Dancers.jpg");
    background-size: cover;
    background-position: center; */
    p {
        color: white;
        text-align: center;
    }

    .Collapsible {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        font-size: 36px;
    }
`;

const EducationImage = styled.div`
    height: 80vh;
    width: 80vw;
    background-image: url("/homePage/Dancers.jpg");
    background-size: cover;
    background-position: center;
`;

const HumanRights = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 80vw;
    /* justify-content: center; */
    /* align-self: flex-end; */

    background-image: url("/homePage/sakharov.png");
    background-size: cover;
    background-position: top center;
    p {
        color: white;
        text-align: center;
    }
`;

const ScienceDiplomacy = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

    background-position: top center;

    gap: 30px;
    height: 80vh;
    width: 80vw;
    background-image: url("/homePage/GroupPhotoMin.jpg");
    background-size: cover;
    /* background-position: center; */
    p {
        color: white;
        text-align: center;
    }
`;

const Parallax = styled(motion.div)`
    position: absolute;
    background-image: url("/homePage/bgSkinny.jpeg");
    background-size: cover;
    background-position: center;
    top: 0;
    height: 300vh;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    svg {
        /* margin-bottom: 15px; */
        z-index: 1;
    }
    a {
        color: white;
    }
`;

const Description = styled.div`
    color: white;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* overflow: hidden; */

    p {
        /* display: none; */
        padding-bottom: 0;
        overflow: hidden;
        transition-delay: 500ms;
    }

    #button {
        min-height: 35px;
        min-width: 35px;
        background-color: white;
    }
`;

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const toggleInfo = (e, pid) => {
        e.stopPropagation();
        console.log("test", e.target.nextElementSibling);
        if (e === null) {
            return;
        }
        if (
            e.target.nextElementSibling == undefined ||
            e.target.nextElementSibling == null
        ) {
            return;
        }
        e.target.nextElementSibling.style.height === "0%"
            ? (e.target.nextElementSibling.style.height = "100%")
            : (e.target.nextElementSibling.style.height = "0%");
    };

    return (
        <Container>
            <Parallax style={{ y }}></Parallax>
            <Bio>
                <Image
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
            <Education>
                <Collapsible
                    trigger={
                        "Science education through art, music, dance, drama, rap and computer animation."
                    }
                >
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </Collapsible>
                <EducationImage></EducationImage>
                {/* <TitleDiv>
                    <p>
                        Science education through art, music, dance, drama, rap
                        and computer animation.
                    </p>
                    <Description>
                        <div
                            id="button"
                            onClick={(e) => toggleInfo(e)}
                        > */}
                {/* CHECK WHY DIV DOESNT KEEP HEIGHT WITHOUT CONTENT */}
                {/* </div>
                        <p style={{ height: "0%" }}>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </Description>
                    <Link href="/education">See More</Link>
                </TitleDiv> */}
            </Education>
            <HumanRights>
                <TitleDiv>
                    <p>Fighting for Human Rights around the globe.</p>
                </TitleDiv>
            </HumanRights>
            <ScienceDiplomacy>
                <TitleDiv>
                    <p>
                        Science Diplomacy as a bridge to peace in the Middle
                        East
                    </p>
                </TitleDiv>
            </ScienceDiplomacy>
            {/* <VideoBar />
            <MaltaBar /> */}
        </Container>
    );
};

export default Home;
