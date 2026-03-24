import React from "react";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";
import Head from "next/head";
import DancersClass from "../public/pictures/FigDancers.jpg";

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
  margin-bottom: 40px;

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

const ContentSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 48px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const ContentImage = styled.div`
  flex: 0 0 40%;
  @media (max-width: 750px) {
    flex: none;
    width: 100%;
  }
`;

const ContentText = styled.div`
  flex: 1;
  p {
    font-size: 15px;
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
  }
`;

const VideoSection = styled.div`
  margin-top: 48px;

  h2 {
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin: 0 0 8px;
  }
`;

const VideoSubtitle = styled.p`
  text-align: center;
  color: #5a6a7a;
  font-size: 15px;
  margin: 0 0 28px;
`;

const Education = () => {
  const videos = [
    {
      id: "oThebAJpjbY",
      title: "Classroom of the Future 2.0",
      desc: "Student Project by Radek Michalik, Abdias Perez, & Mark Theriault",
    },
    { id: "tNwHYh5YbZo", title: "Periodic Table: The Elements Dance", desc: "" },
    {
      id: "6wLCKkr_yQk",
      title: "The Bondfather",
      desc: "1997 Student Project by Rebekah Lewis & Eddie Sircher",
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
      title: "Stratosphere Wars: Chlorine Strikes Back",
      desc: "1999 Student Project by Marcus Jones",
    },
    {
      id: "TdaC5blXZtI",
      title: "Ionic Bondage",
      desc: "1999 Student Project by Joe Nelson",
    },
    {
      id: "4SiPnGJcI4A",
      title: "Love Story: Sodium & Chlorine",
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
      <Head>
        <title>Education</title>
        <meta name="keywords" content="Education, Teaching, Science, Chemistry" />
        <meta name="description" content="Teaching Science Through the Arts" />
      </Head>

      <PageHeader>
        <h1>Education</h1>
        <p>Teaching science through art, music, dance, drama, and animation.</p>
      </PageHeader>

      <ContentSection>
        <ContentImage>
          <Image src={DancersClass} alt="Students learning science through dance" unoptimized />
        </ContentImage>
        <ContentText>
          <p>
            Zafra developed an innovative approach of teaching science at all
            levels using art, music, dance, drama, animation, and rap. These
            methods proved to be extremely successful with underprivileged
            students around the world and received international recognition. In
            2000, she adopted the school district of the town of Soweto, South
            Africa (the birthplace of Mandela and Bishop Tutu). In Chicago&#39;s
            low-income neighborhoods, she worked with students, teachers and
            parents and had a tremendous impact on their attitudes towards
            science. Zafra worked with homeless students at night in a dance
            studio and taught them science through dance. Many of these students
            graduated from college and two continued for a PhD in biochemistry.
            She worked with prisoners who succeeded in receiving bachelor&#39;s
            and master&#39;s degrees. Over 16,000 Chicago public school students
            and more than 1,000 teachers participated in her programs.
          </p>
        </ContentText>
      </ContentSection>

      <VideoSection>
        <h2>Student Projects</h2>
        <VideoSubtitle>
          Films and animations created by students in Zafra&apos;s programs.
        </VideoSubtitle>
        <VideoBar videos={videos} />
      </VideoSection>
    </Container>
  );
};

export default Education;
