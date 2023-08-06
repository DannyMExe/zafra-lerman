import React from "react";
import styled from "styled-components";
import Head from "next/head";

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  iframe {
    // width: 100vw !important;
    width: 50vw;
    height: 95vh;
  }
  img {
    width: 50vw !important;
  }
  a {
    text-align: center;
  }
`;

const Bio = () => {
  return (
    <BioSection>
      <Head>
        <title>Bio</title>
      </Head>
      <iframe
        src="https://drive.google.com/file/d/1GWAKFG_mQ1RZqpJkAqZDD47SwZ-vtQlh/preview"
        width="100vw"
        height="100%"
        allow="autoplay"
      ></iframe>
      <a href="/ZafraLermanBio.pdf" target="_blank" rel="noopener noreferrer">
        <button>Download Bio</button>
      </a>
    </BioSection>
  );
};

export default Bio;
