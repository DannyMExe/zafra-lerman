import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import heroImage from "../public/dr-zafra-lerman.jpg";
import EduImage from "../public/homePage/DancersNew.jpg";
import DiplomacyImage from "../public/homePage/GroupPhoto.png";
import RightsImage from "../public/homePage/sakharov.jpg";
import Head from "next/head";

/* ───────────────────────── Layout ───────────────────────── */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

/* ───────────────────────── Hero ───────────────────────── */

const Hero = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  gap: 40px;
  padding: 60px 24px 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 16px 30px;
  }
`;

const HeroImageWrap = styled.div`
  flex: 0 0 420px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
  }
  @media (max-width: 750px) {
    flex: none;
    width: 100%;
    img {
      height: 200px;
    }
  }
`;

const HeroText = styled.div`
  flex: 1;
  h1 {
    font-size: clamp(22px, 3vw, 36px);
    line-height: 1.35;
    margin: 0;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: -0.5px;
  }
  p {
    margin: 16px 0 0;
    font-size: 16px;
    color: #5a6a7a;
    line-height: 1.5;
  }
`;

/* ───────────────────────── Book Banner ───────────────────────── */

const BookBanner = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  gap: 28px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 0 16px;
    padding: 24px 20px;
    text-align: center;
  }

  h2 {
    font-size: clamp(18px, 2.2vw, 24px);
    margin: 0 0 8px;
    font-weight: 700;
    color: #1a1a1a;
  }
  p {
    font-size: 15px;
    line-height: 1.55;
    margin: 0 0 16px;
    color: #5a6a7a;
  }
`;

const BookLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    justify-content: center;
  }
  a {
    display: inline-block;
    background-color: #4a90d9;
    color: white;
    padding: 9px 18px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.15s;
    &:hover {
      background-color: #3a7bc8;
    }
  }
`;

/* ───────────────────────── Section Stripe ───────────────────────── */

const SectionStripe = styled.div`
  width: 100%;
  padding: 56px 0;
  &:nth-child(even) {
    background-color: #f7f9fc;
  }

  @media (max-width: 750px) {
    padding: 36px 0;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 40px;
  padding: 0 24px;

  @media (max-width: 750px) {
    flex-direction: column !important;
    gap: 20px;
    padding: 0 16px;
  }
`;

const SectionImageWrap = styled.div`
  flex: 0 0 44%;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 750px) {
    flex: none;
    width: 100%;
    img {
      height: 200px;
    }
  }
`;

const SectionContent = styled.div`
  flex: 1;

  h2 {
    font-size: clamp(19px, 2.5vw, 26px);
    margin: 0 0 12px;
    line-height: 1.25;
    font-weight: 700;
    color: #1a1a1a;
  }
  p {
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 16px;
    color: #4a5568;
  }
`;

const SectionTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4a90d9;
  margin-bottom: 8px;
`;

const LearnMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #4a90d9;
  text-decoration: none;
  transition: gap 0.2s;
  &:hover {
    gap: 10px;
  }
`;

/* ───────────────────────── Podcasts & Interviews ───────────────────────── */

const MediaSection = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 56px 24px 50px;

  @media (max-width: 750px) {
    padding: 36px 16px;
  }

  h2 {
    font-size: clamp(20px, 2.5vw, 28px);
    text-align: center;
    margin: 0 0 8px;
    font-weight: 700;
    color: #1a1a1a;
  }
`;

const MediaSubtitle = styled.p`
  text-align: center;
  color: #5a6a7a;
  font-size: 15px;
  margin: 0 0 32px;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MediaCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    border-color: #c5d5e8;
  }

  .media-type {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4a90d9;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 10px;
    line-height: 1.4;
    color: #1a1a1a;
  }
  .media-source {
    font-size: 13px;
    color: #8896a6;
    margin-top: auto;
  }
`;

/* ───────────────────────── Data ───────────────────────── */

const sections = [
  {
    tag: "Education",
    title: "Teaching Science Through the Arts",
    image: EduImage,
    alt: "Students learning science through dance",
    text: `Zafra developed an innovative approach of teaching science at all levels using art, music, dance, drama, animation, and rap. These methods proved extremely successful with underprivileged students around the world. In Chicago, she taught homeless students science through dance in a night studio. Many graduated college; two earned PhDs in biochemistry. Over 16,000 students and 1,000 teachers participated in her programs.`,
    link: "/education",
    linkLabel: "Explore Education Programs",
    reverse: false,
  },
  {
    tag: "Human Rights",
    title: "Fighting for Scientific Freedom Around the Globe",
    image: RightsImage,
    alt: "Zafra Lerman with Andrei Sakharov",
    text: `From 1986 to 2011, Zafra chaired the American Chemical Society's Subcommittee on Scientific Freedom and Human Rights. After meeting Andrei Sakharov in 1989, she took a crash course in Russian to work with dissidents in the Soviet Union. At great risk to her safety, she prevented executions, freed prisoners of conscience, and brought dissidents to freedom.`,
    link: "/humanrights",
    linkLabel: "Read About Her Work",
    reverse: true,
  },
  {
    tag: "Science Diplomacy",
    title: "Building Bridges to Peace in the Middle East",
    image: DiplomacyImage,
    alt: "Malta Conferences group photo",
    text: `Since 2003, Zafra has led Science Diplomacy as a Bridge to Peace as President of the Malta Conferences Foundation — the only platform in the world bringing together scientists from 15 Middle East countries with Nobel Laureates to solve regional problems and forge relationships across chasms of distrust.`,
    link: "https://www.maltaconferencesfoundation.org/",
    linkLabel: "Visit the Malta Conferences Foundation",
    external: true,
    reverse: false,
  },
];

const podcasts = [
  {
    type: "Podcast",
    title: "Peace with Penny: Penny S. Tee Interviews Zafra Lerman",
    source: "Peace with Penny, Season 5 — Aug 2024",
    url: "https://youtu.be/qFWVqmT4U-c",
  },
  {
    type: "Interview",
    title: "The Power of Scientific Research, Education, and Science Diplomacy",
    source: "Science Speaks — Aug 2024",
    url: "https://www.science-speaks.com/zafra-lerman",
  },
  {
    type: "Podcast",
    title: '"We only have one nationality, it\'s science."',
    source: "The Connected Leadership Podcast — Mar 2023",
    url: null,
  },
  {
    type: "Interview",
    title: "Penny S. Tee Interviews Zafra Lerman",
    source: "Peace with Penny — Feb 2023",
    url: "https://www.youtube.com/watch?v=fh62mkmBgds",
  },
  {
    type: "Feature",
    title: "Meet Dr. Zafra Lerman: Queen of Science Diplomacy",
    source: "Weizmann USA — Apr 2025",
    url: "https://www.weizmann-usa.org/blog/meet-dr-zafra-lerman-queen-of-science-diplomacy/",
  },
  {
    type: "Feature",
    title: "The Strength To Resist",
    source: "Psychology Today — Nov 2023",
    url: "https://www.psychologytoday.com/us/articles/202311/the-strength-to-resist",
  },
];

/* ───────────────────────── Component ───────────────────────── */

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Zafra Lerman</title>
        <meta
          name="keywords"
          content="Zafra Lerman, Zafra, Lerman, Science Diplomacy, Malta Conferences"
        />
        <meta
          name="description"
          content="Zafra Lerman — scientist, educator, and humanitarian."
        />
      </Head>

      {/* ─── Hero ─── */}
      <Hero>
        <HeroImageWrap>
          <Image src={heroImage} alt="Dr. Zafra Lerman" priority />
        </HeroImageWrap>
        <HeroText>
          <h1>
            Scientist, educator, and humanitarian recognized for her
            contributions to science education and science diplomacy.
          </h1>
          <p>
            Five-time Nobel Peace Prize nominee. President of the Malta
            Conferences Foundation.
          </p>
        </HeroText>
      </Hero>

      {/* ─── Book Banner ─── */}
      <BookBanner>
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/book_pic.jpeg"
            alt="Book Cover — Human Rights and Peace: A Personal Odyssey"
            width={140}
            height={210}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div>
          <h2>Human Rights and Peace: A Personal Odyssey</h2>
          <p>
            Zafra Lerman&apos;s new book covers her extensive work in science
            education, diplomacy, and human rights.
          </p>
          <BookLinks>
            <a
              href="https://www.jennystanford.com/9789815129243/human-rights-and-peace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenny Stanford Publishing
            </a>
            <a
              href="https://www.amazon.com/Human-Rights-Peace-Zafra-Lerman/dp/9815129244"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </a>
          </BookLinks>
        </div>
      </BookBanner>

      {/* ─── Three Pillars ─── */}
      {sections.map((section, index) => (
        <SectionStripe key={index}>
          <Section
            style={{ flexDirection: section.reverse ? "row-reverse" : "row" }}
          >
            <SectionImageWrap>
              <Image src={section.image} alt={section.alt} unoptimized />
            </SectionImageWrap>
            <SectionContent>
              <SectionTag>{section.tag}</SectionTag>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.external ? (
                <LearnMore
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.linkLabel} <span>&rarr;</span>
                </LearnMore>
              ) : (
                <Link href={section.link} passHref legacyBehavior>
                  <LearnMore>
                    {section.linkLabel} <span>&rarr;</span>
                  </LearnMore>
                </Link>
              )}
            </SectionContent>
          </Section>
        </SectionStripe>
      ))}

      {/* ─── Podcasts & Interviews ─── */}
      <MediaSection>
        <h2>Podcasts &amp; Interviews</h2>
        <MediaSubtitle>
          Recent conversations and features about Dr. Lerman&apos;s work.
        </MediaSubtitle>
        <MediaGrid>
          {podcasts.map((item, index) =>
            item.url ? (
              <MediaCard
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="media-type">{item.type}</span>
                <h3>{item.title}</h3>
                <span className="media-source">{item.source}</span>
              </MediaCard>
            ) : (
              <MediaCard as="div" key={index}>
                <span className="media-type">{item.type}</span>
                <h3>{item.title}</h3>
                <span className="media-source">{item.source}</span>
              </MediaCard>
            )
          )}
        </MediaGrid>
      </MediaSection>
    </Container>
  );
};

export default Home;
