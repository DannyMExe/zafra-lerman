import React from "react";
import Image from "next/image";
import image from "../public/aboutPhoto.jpg";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 50px;
    background-color: red;
    h1 {
        text-align: center;
    }
    img {
        float: left;
        max-width: 50vw;
        height: auto;
    }
    p {
        text-align: justify;
        font-size: 25px;
    }
`;

const Home = () => {
    return (
        <Container>
            <h1>The Lerman Institue</h1>
            <Image
                src={image}
                height={500}
                alt={"Portrait Photo od Dr. Zafra Lerman"}
            />
            <p>
                Zafra M. Lerman is an American chemist, educator, and
                humanitarian. She is the President of the Malta Conferences
                Foundation, which aims to promote peace by bringing together
                scientists from otherwise hostile countries to discuss science
                and foster international scientific and technical collaboration.
                From 1986 to 2010, she chaired the American Chemical Society's
                Subcommittee on Scientific Freedom and Human Rights. She has
                been successful in preventing executions, releasing prisoners of
                conscience from jail and bringing dissidents to freedom. She is
                the recipient of many awards for education and science
                diplomacy, including the 1999 Presidential Award from U.S.
                President Clinton, the 2005 Nyholm Prize for Education from the
                Royal Society of Chemistry (England), the 2015 Science Diplomacy
                Award from the American Association for the Advancement of
                Science (AAAS), the 2016 Andrei Sakharov Award for human rights
                from the American Physical Society (APS), and the 2016 United
                Nations NOVUS Award for the 16th Sustainable Development Goal:
                Peace and Justice.
            </p>
        </Container>
    );
};

export default Home;
