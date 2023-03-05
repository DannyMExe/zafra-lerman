import React from "react";
import Image from "next/image";
import image from "../public/aboutPhoto.jpg";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import MaltaBar from "../src/components/MaltaBar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* padding-top: 30px; */
    gap: 30px;
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

const Home = () => {
    return (
        <Container>
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
                    <p>
                        She holds a PhD in chemistry from the Weizmann Institute
                        of Science and conducted research on isotope effects at
                        Cornell and Northwestern Universities in the US, and the
                        ETH, Zurich, Switzerland. She developed an innovative
                        approach of teaching science at all levels using art,
                        music, dance, drama, rap, and cultural backgrounds.
                        These methods proved to be extremely successful among
                        underprivileged students around the world and received
                        international recognition.
                        <br />
                        <br />
                        From 1986 to 2011, she chaired the American Chemical
                        Society's Subcommittee on Scientific Freedom and Human
                        Rights. She worked on human rights cases in the former
                        Soviet Union, Russia, China, Guatemala, Cuba, Peru,
                        South Africa, Iran, and many more. She met with
                        dissidents in most of these countries.
                        <br />
                        <br />
                        She is the recipient of many awards for education and
                        science diplomacy, including the 1999 Presidential Award
                        from U.S. President Clinton, the 2005 Nyholm Prize for
                        Education from the Royal Society of Chemistry (England),
                        the 2015 Science Diplomacy Award from the American
                        Association for the Advancement of Science (AAAS), the
                        2016 Andrei Sakharov Award for human rights from the
                        American Physical Society (APS), and the 2016 United
                        Nations NOVUS Award for the 16th Sustainable Development
                        Goal: Peace and Justice.
                    </p>
                </div>
            </Bio>
            {/* <VideoBar />
            <MaltaBar /> */}
        </Container>
    );
};

export default Home;
