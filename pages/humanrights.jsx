import React from "react";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";
import Head from "next/head";
import RightsImage from "../public/homePage/sakharov.jpg";
import RightsImage2 from "../public/pictures/NikitinInDC2000.jpg";
import yuri from "../public/pictures/yuri.png";

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

const StoryCard = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  margin-bottom: 24px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
    gap: 16px;
  }
`;

const StoryImage = styled.div`
  flex: 0 0 38%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
  }

  @media (max-width: 750px) {
    flex: none;
    width: 100%;
  }
`;

const ImageCaption = styled.span`
  display: block;
  text-align: center;
  font-size: 13px;
  color: #5a6a7a;
  margin-top: 8px;
  font-style: italic;
`;

const StoryText = styled.div`
  flex: 1;

  h3 {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4a90d9;
    margin: 0 0 8px;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: #4a5568;
    margin: 0 0 12px;
  }

  blockquote {
    margin: 16px 0 0;
    padding: 16px 20px;
    background: #f7f9fc;
    border-left: 3px solid #4a90d9;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #4a5568;
    font-size: 15px;
    line-height: 1.65;

    span {
      display: block;
      margin-top: 10px;
      font-style: normal;
      font-weight: 600;
      color: #1a1a1a;
    }
  }
`;

const VideoSection = styled.div`
  margin-top: 48px;

  h2 {
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin: 0 0 28px;
  }
`;

const HumanRights = () => {
  const videos = [
    {
      id: "CKQpQAnJjgk",
      title: "Professor Zafra Lerman with Aleksandr Nikitin on C-SPAN",
      desc: "",
    },
    {
      id: "PiM2V7TYpjg",
      title: "Zafra Lerman Acceptance Speech for 2016 Sakharov Award",
      desc: "",
    },
  ];

  return (
    <Container>
      <Head>
        <title>Human Rights</title>
        <meta
          name="description"
          content="Human Rights Efforts and Achievements of Zafra Lerman"
        />
      </Head>

      <PageHeader>
        <h1>Human Rights</h1>
        <p>Fighting for scientific freedom and human dignity around the world.</p>
      </PageHeader>

      <StoryCard>
        <StoryImage>
          <Image src={RightsImage} alt="Zafra Lerman with Andrei Sakharov" />
          <ImageCaption>With Andrei Sakharov, 1989</ImageCaption>
        </StoryImage>
        <StoryText>
          <h3>Scientific Freedom</h3>
          <p>
            From 1986 to 2011, Zafra chaired the American Chemical
            Society&#39;s Subcommittee on Scientific Freedom and Human Rights.
            She worked on human rights cases in the former Soviet Union, Russia,
            China, Guatemala, Cuba, Peru, South Africa, Iran, and many more. She
            met with dissidents in many of these countries. After meeting Andrei
            Sakharov in 1989 and taking his advice, she took a crash course in
            Russian to facilitate her work with dissidents in the former Soviet
            Union. At great risk to her safety, she succeeded in preventing
            executions, releasing prisoners of conscience from jail, and bringing
            dissidents to freedom. From 1987 until now, she has served as a Vice
            Chair for Chemistry on the Board of the Committee of Concerned
            Scientists (CCS), where she continues to be very active in human
            rights cases.
          </p>
        </StoryText>
      </StoryCard>

      <StoryCard>
        <StoryImage>
          <Image src={RightsImage2} alt="Aleksandr Nikitin" />
          <ImageCaption>Aleksandr Nikitin in Washington, DC, 2000</ImageCaption>
        </StoryImage>
        <StoryText>
          <h3>Aleksandr Nikitin</h3>
          <p>
            Professor Zafra Lerman appears on C-SPAN to introduce Aleksandr
            Nikitin on a discussion on Radioactive Contamination in the Former
            Soviet Union. Aleksandr Nikitin was a Russian dissident that was
            arrested by the FSB after publishing an article about spilling
            nuclear waste from submarines into the sea. He appears in this
            picture giving a lecture to 1,000 members of the American Chemical
            Society (ACS) at the ACS National Meeting in Washington, DC in 2000,
            before the charges against him were dropped. Nikitin spoke about the
            problem of nuclear safety in Russia and potential threats from
            radiation from various sources.
          </p>
        </StoryText>
      </StoryCard>

      <StoryCard>
        <StoryImage style={{ textAlign: "center" }}>
          <Image
            src={yuri}
            alt="Yuri Tarnopolsky"
            style={{ maxWidth: "200px", margin: "0 auto" }}
          />
          <ImageCaption>Yuri Tarnopolsky</ImageCaption>
        </StoryImage>
        <StoryText>
          <h3>Yuri Tarnopolsky</h3>
          <p>
            A Soviet dissident emphasizes the common dedication between human
            rights activists and the dissident in prison:
          </p>
          <blockquote>
            &hellip; I often wondered what could make a person living in freedom,
            safety, and comfort to fight for somebody deprived all that and
            languishing somewhere on the other side of the globe &hellip; I
            realized that both the faraway victim and his American guardian angel
            had something in common. They had the same ability to go against the
            tide and they did for science something which could hardly be
            rationalized, an exhausting messy job of fixing its very foundation,
            invisible on the pages of professional journals: they kept science
            both human and humane.
            <span>&mdash; Yuri Tarnopolsky</span>
          </blockquote>
        </StoryText>
      </StoryCard>

      <VideoSection>
        <h2>Related Videos</h2>
        <VideoBar videos={videos} />
      </VideoSection>
    </Container>
  );
};

export default HumanRights;
