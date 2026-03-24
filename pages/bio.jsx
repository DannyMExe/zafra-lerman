import React from "react";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px 60px;

  @media (max-width: 750px) {
    padding: 24px 16px 40px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 12px;
  }
  p {
    font-size: 16px;
    color: #5a6a7a;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const BioCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  iframe {
    width: 100%;
    height: 80vh;
    border: none;
    border-radius: 10px;
  }

  @media (max-width: 750px) {
    padding: 20px;

    iframe {
      height: 60vh;
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #4a90d9;
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.15s;

  &:hover {
    background-color: #3a7bc8;
  }
`;

const Bio = () => {
  return (
    <Container>
      <Head>
        <title>Bio</title>
      </Head>

      <PageHeader>
        <h1>Biography</h1>
        <p>The life and career of Dr. Zafra Lerman.</p>
      </PageHeader>

      <BioCard>
        <iframe
          src="https://drive.google.com/file/d/1GWAKFG_mQ1RZqpJkAqZDD47SwZ-vtQlh/preview"
          allow="autoplay"
          title="Zafra Lerman Biography"
        />
        <DownloadButton
          href="/ZafraLermanBio.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Bio (PDF)
        </DownloadButton>
      </BioCard>
    </Container>
  );
};

export default Bio;
