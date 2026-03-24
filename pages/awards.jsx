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

const AwardsGrid = styled.div`
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

const AwardCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;

  .year {
    font-size: 13px;
    font-weight: 700;
    color: #4a90d9;
    margin-bottom: 8px;
  }
  .honor {
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.35;
    margin-bottom: 8px;
  }
  .institution {
    font-size: 14px;
    color: #5a6a7a;
    line-height: 1.4;
    margin-top: auto;
  }
`;

const Awards = () => {
  const awards = [
    {
      honor: "Five Nobel Peace Prize Nominations",
      institution:
        "Nominators: member of the US Congress; member of the French parliament; Prof. of History",
      year: 2023,
    },
    {
      honor: "Distinguished Women in Chemistry or Chemical Engineering Award",
      institution: "International Union of Pure and Applied Chemistry (IUPAC)",
      year: 2017,
    },
    {
      honor: "Peace and Justice Award",
      institution: "UN NOVUS Summit",
      year: 2016,
    },
    {
      honor: "Andrei Sakharov Prize",
      institution: "American Physical Society",
      year: 2016,
    },
    {
      honor: "Award for Science Diplomacy",
      institution: "American Association for the Advancement of Science",
      year: 2015,
    },
    {
      honor: "Recognition in U.S. Congress",
      institution: "Hon. Jan Schakowsky, Representative",
      year: 2013,
    },
    {
      honor: "Award for Stimulating Collaborations and Ensuring Human Rights",
      institution:
        "The International Conference on Chemistry for Mankind (India)",
      year: 2011,
    },
    {
      honor: "ACS Fellow",
      institution: "American Chemical Society",
      year: 2010,
    },
    {
      honor: "George C. Pimentel Award in Chemical Education",
      institution: "American Chemical Society",
      year: 2010,
    },
    {
      honor: "George Brown Award for International Scientific Cooperation",
      institution:
        "U.S. Civilian Research & Development Foundation Global (CRDF Global)",
      year: 2007,
    },
    {
      honor: "Recognition on International Human Rights Day",
      institution: "American Association for the Advancement of Science",
      year: 2005,
    },
    {
      honor: "Heinz R. Pagels Human Rights Award",
      institution: "New York Academy of Sciences",
      year: 2005,
    },
    {
      honor:
        "Heuer Award for Outstanding Achievement in Undergraduate Science Education",
      institution: "Council of Independent Colleges",
      year: 2004,
    },
    {
      honor: "Charles Lathrop Parsons Award",
      institution: "American Chemical Society",
      year: 2003,
    },
    {
      honor: "James Flack Norris Award",
      institution: "American Chemical Society – Northeastern Section",
      year: 2002,
    },
    {
      honor: "AAAS Fellow",
      institution: "American Association for the Advancement of Science",
      year: 2001,
    },
    {
      honor: "José Vasconcelos World Award of Education",
      institution: "World Cultural Council",
      year: 2000,
    },
    {
      honor: "Joseph Hyman Ethics Award",
      institution: "American Institute of Chemists",
      year: 2000,
    },
    {
      honor:
        "Presidential Award for Excellence in Science, Mathematics and Engineering Mentoring",
      institution: "President of the United States (Bill Clinton)",
      year: 1999,
    },
    {
      honor: "Kilby Laureate Awards",
      institution: "The Kilby International Awards Foundation",
      year: 1998,
    },
    {
      honor: "Public Affairs Award",
      institution: "American Chemical Society - Chicago Section",
      year: 1997,
    },
  ];

  return (
    <Container>
      <Head>
        <title>Awards</title>
      </Head>

      <PageHeader>
        <h1>Awards &amp; Honors</h1>
        <p>Recognition for contributions to science, education, and human rights.</p>
      </PageHeader>

      <AwardsGrid>
        {awards.map((award, index) => (
          <AwardCard key={index}>
            <span className="year">{award.year}</span>
            <span className="honor">{award.honor}</span>
            <span className="institution">{award.institution}</span>
          </AwardCard>
        ))}
      </AwardsGrid>
    </Container>
  );
};

export default Awards;
