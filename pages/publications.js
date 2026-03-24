import React from "react";
import styled from "styled-components";
import Head from "next/head";

const publications = [
  {
    title: "Meet Dr. Zafra Lerman: Queen of Science Diplomacy.",
    author: "Weizmann USA",
    publisher: "The Curiosity Review",
    pages: "April 2025",
    url: "https://www.weizmann-usa.org/blog/meet-dr-zafra-lerman-queen-of-science-diplomacy/",
  },
  {
    title: "From The Editor's Desk, Lerman Lecture Draws a Crowd.",
    author: "Schott, Margaret E.",
    publisher: "Chicago Section of the American Chemical Society Newsletter",
    pages: "February 2025, Vol. 112 No. 3, p. 4-5",
    url: "",
  },
  {
    title: "Zafra Lerman to receive 24th International Advocate for Peace Award",
    author: "Cottle, Sara",
    publisher: "c&en",
    pages: "February 2025",
    url: "https://cen.acs.org/acs-news/Zafra-Lerman-receive-24th-International/103/web/2025/02?ref=search_results",
  },
  {
    title: "A Force For Peace And Justice: Dr. Zafra Lerman's Journey From Science To Global Advocacy",
    author: "TheJ.ca Staff",
    publisher: "TheJ.ca",
    pages: "February 2025",
    url: "https://thej.ca/2025/02/20/a-force-for-peace-and-justice-dr-zafra-lermans-journey-from-science-to-global-advocacy",
  },
  {
    title: "Human Rights and Peace: A Personal Odyssey",
    author: "Lerman, Z.",
    publisher: "Jenny Stanford Publication",
    pages: "July 2024",
    url: "https://www.routledge.com/Human-Rights-and-Peace-A-Personal-Odyssey/Lerman/p/book/9789815129243",
  },
  {
    title: "You May Say She's a Dreamer: Review of \"Human Rights and Peace: A Personal Odyssey\"",
    author: "Pacchioni, G.",
    publisher: "Nature Reviews Materials",
    pages: "August 19, 2024",
    url: "https://rdcu.be/dRA6c",
  },
  {
    title: "Interview with Humanitarian Zafra Lerman on the Power of Scientific Research, Education, and Science Diplomacy",
    author: "Kilian, N.",
    publisher: "Science Speaks",
    pages: "August 2024",
    url: "https://www.science-speaks.com/zafra-lerman",
  },
  {
    title: "New Book by Zafra Lerman",
    author: "Chicago Section of the American Chemical Society",
    publisher: "The Chemical Bulletin",
    pages: "Vol. 111, No. 7, p. 9, September 2024",
    url: "https://chicagoacs.org/images/downloads/Chemical_Bulletin/2024_09_chembull.pdf",
  },
  {
    title: "How the Malta Conferences Are Cultivating International Peace Through Scientific Exchange.",
    author: "Kilian, N.",
    publisher: "Advanced Science News",
    pages: "January 10, 2023",
    url: "https://www.psychologytoday.com/us/articles/202311/the-strength-to-resist",
  },
  {
    title: "Beyond Borders.",
    author: "Pewsey, E.",
    publisher: "Chemistry World",
    pages: "January 11, 2023",
    url: "https://www.chemistryworld.com/careers/science-can-be-a-powerful-tool-for-diplomacy/4016706.article",
  },
  {
    title: "How Many Roads Must a Woman Walk Down?",
    author: "Pichon, A.",
    publisher: "Nature Chemistry",
    pages: "March 27, 2023, pp.1-3",
    url: "https://www.nature.com/articles/s41557-023-01161-w.epdf?sharing_token=GgKE3IZHAwjEjBgUhfMsNtRgN0jAjWel9jnR3ZoTv0Mtx0822zKyB7mPxcDZ8y_lampxwyBBaKbDnniROA9gupTypVBJJTOs0-PStBQziMK2PdV1rk8FFFZxi2N420jN3vVgdohYy4kdagpVuo8mM0a_3UpE8jrVeiri30mICkg%3D",
  },
  {
    title: "The Strength To Resist",
    author: "Fagan, A.",
    publisher: "Psychology Today",
    pages: "November 2023",
    url: "https://www.psychologytoday.com/us/articles/202311/the-strength-to-resist",
  },
  {
    title: "Malta Conferences Foundation, 10th Anniversary Conference: \"Knowledge and Society\" – MALTA X focus",
    author: "Shevah, Y; Hogue, L; O'Brien, C; Lerman, Z",
    publisher: "Chemistry International",
    pages: "2023, 45 (2), pp. 44-48",
    url: "https://www.degruyter.com/document/doi/10.1515/ci-2023-0200/html",
  },
  {
    title: "Keep Up the Fight for Scientists' Human Rights",
    author: "Lerman, Z.",
    publisher: "Nature Reviews Materials",
    pages: "2022, 7, pp. 497–498",
    url: "https://www.nature.com/articles/s41578-022-00456-7",
  },
  {
    title: "Science Education is a Human Right that Belongs to All",
    author: "Lerman, Z.",
    publisher: "Iraqi Academy Journal",
    pages: "2021, 1 (10), pp. 97-102",
    url: "",
  },
  {
    title: "Malta X Anniversary and COVID-19",
    author: "Zajdela, E.R. and Lerman, Z.M.",
    publisher: "Chemistry International",
    pages: "2021, 43 (2), pp. 16-19",
    url: "https://doi.org/10.1515/ci-2021-0204",
  },
  {
    title: "Chemistry for Peace",
    author: "Lerman, Z.M. and Zajdela, E.R.",
    publisher: "Chem. Eng. News",
    pages: "March 16, 2020, 98 (10), p. 2",
    url: "https://cen.acs.org/education/outreach/Malta-conferences-use-science-diplomacy/98/i10",
  },
  {
    title: "Education, Human Rights, and Peace – Contributions to the Progress of Humanity",
    author: "Lerman, Z.",
    publisher: "Pure and Applied Chemistry",
    pages: "2018, 91 (2), pp. 351-360",
    url: "https://www.degruyter.com/view/j/pac.2019.91.issue-2/pac-2018-0712/pac-2018-0712.xml",
  },
  {
    title: "From Fighting for Human Rights to Building a Bridge to Peace",
    author: "Lerman, Z.M.",
    publisher: "Science & Diplomacy",
    pages: "March 2015",
    url: "http://www.sciencediplomacy.org/letter-field/2015/fighting-for-human-rights-building-bridge-peace",
  },
  {
    title: "Using the Arts to Make Chemistry Accessible to Everybody",
    author: "Lerman, Z. M.",
    publisher: "J. Chem. Ed.",
    pages: "2003, 80 (11), pp. 1234-1243",
    url: "https://www.researchgate.net/publication/231266092_Using_the_Arts_To_Make_Chemistry_Accessible_to_Everybody_2002_James_Flack_Norris_Award_sponsored_by_ACS_Northeast_Section",
  },
  {
    title: "Human Rights, Education and Peace: A Personal Odyssey",
    author: "Lerman, Z. M.",
    publisher: "J. Chem. Educ.",
    pages: "2013, 90 (1), pp. 5-9",
    url: "",
  },
  {
    title: "Chemistry and chemical education as a bridge to peace",
    author: "Lerman, Z. M.",
    publisher: "Chemistry Education in the ICT Age, Springer",
    pages: "2009",
    url: "https://www.researchgate.net/publication/226317033_Chemistry_and_Chemical_Education_as_a_Bridge_to_Peace",
  },
  {
    title: "Chemistry: An Inspiration for Theatre and Dance",
    author: "Lerman, Z. M.",
    publisher: "Chemical Education International",
    pages: "2005, 6, (1)",
    url: "https://old.iupac.org/publications/cei/vol6/11_Lerman.pdf",
  },
];

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

const PubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PubItem = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border-color 0.15s;

  &:hover {
    border-color: #c5d5e8;
  }

  @media (max-width: 750px) {
    padding: 16px;
  }
`;

const PubTitle = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: #4a90d9;
  text-decoration: none;
  line-height: 1.4;
  display: block;
  margin-bottom: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

const PubTitlePlain = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
  display: block;
  margin-bottom: 6px;
`;

const PubMeta = styled.div`
  font-size: 13px;
  color: #5a6a7a;
  line-height: 1.5;

  span {
    &::after {
      content: " · ";
    }
    &:last-child::after {
      content: "";
    }
  }
`;

const Publications = () => {
  return (
    <Container>
      <Head>
        <title>Publications</title>
      </Head>

      <PageHeader>
        <h1>Selected Publications</h1>
        <p>
          Articles, books, and papers on science education, human rights, and
          diplomacy.
        </p>
      </PageHeader>

      <PubList>
        {publications.map((pub, index) => (
          <PubItem key={index}>
            {pub.url ? (
              <PubTitle
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pub.title}
              </PubTitle>
            ) : (
              <PubTitlePlain>{pub.title}</PubTitlePlain>
            )}
            <PubMeta>
              {pub.author && <span>{pub.author}</span>}
              {pub.publisher && <span>{pub.publisher}</span>}
              {pub.pages && <span>{pub.pages}</span>}
            </PubMeta>
          </PubItem>
        ))}
      </PubList>
    </Container>
  );
};

export default Publications;
