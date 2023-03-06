import React from "react";
import Image from "next/image";
import image from "../public/aboutPhoto.jpg";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import MaltaBar from "../src/components/MaltaBar";
import { useScroll, motion, useTransform } from "framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    /* padding-top: 30px; */
    gap: 20vh;

    h1 {
        font-size: 45px;
        padding-top: 30px;
        @media (max-width: 750px) {
            text-align: center;
            position: absolute;
            top: 420px;
            left: 0;
            color: white;
            font-size: 24px;
            padding: 0 10px;
        }
        /* position: absolute; */
        /* color: white; */
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

const Education = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 30px; */
    height: 80vh;
    width: 80vw;
    justify-content: center;

    background-image: url("/homePage/Dancers.jpg");
    background-size: cover;
    background-position: center;
    p {
        color: white;
        text-align: center;
    }
`;

const HumanRights = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 80vw;
    justify-content: center;
    align-self: flex-end;

    background-image: url("/homePage/sakharov.png");
    background-size: cover;
    background-position: center;
    p {
        color: white;
        text-align: center;
    }
`;

const ScienceDiplomacy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 30px;
    height: 80vh;
    width: 80vw;
    background-image: url("/homePage/GroupPhotoMin.jpg");
    background-size: cover;
    background-position: center;
    p {
        color: white;
        text-align: center;
    }
`;

const Parallax = styled(motion.div)`
    position: absolute;
    background-image: url("/homePage/sunsetMin.jpeg");
    background-size: cover;
    background-position: center;
    height: 300vh;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
`;

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <Container>
            <Parallax style={{ y }}></Parallax>
            <Bio>
                <Image
                    src={image}
                    height={500}
                    alt={"Portrait Photo od Dr. Zafra Lerman"}
                />
                <div>
                    <h1>
                        Zafra Lerman is a scientist, educator, and humanitarian
                        recognized for her contributions to science education
                        and science diplomacy.
                    </h1>
                </div>
            </Bio>
            <Education>
                <p>
                    Science education through art, music, dance, drama, rap and
                    computer animation.
                </p>
            </Education>
            <HumanRights>
                <p>Fighting for Human Rights around the globe.</p>
            </HumanRights>
            <ScienceDiplomacy>
                <p>Science Diplomacy as a bridge to peace in the Middle East</p>
            </ScienceDiplomacy>
            {/* <VideoBar />
            <MaltaBar /> */}
        </Container>
    );
};

export default Home;
