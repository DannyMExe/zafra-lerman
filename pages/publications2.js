import React from "react";
import styled from "styled-components";

const publications = [
  {
    id: "1",
    title:
      "Malta Conferences Foundation, 10th Anniversary Conference: “Knowledge and Society” – MALTA X focus",
    author: "Shevah, Y; Hogue, L; O’Brien, C; Lerman, Z",
    publisher: "Chemistry International",
    pages: "2023, 45 (2), pp. 44-48",
    url: "https://www.degruyter.com/document/doi/10.1515/ci-2023-0200/html",
  },
  {
    id: "2",
    title: "Keep Up the Fight for Scientists’ Human Rights",
    author: "Lerman, Z",
    publisher: "Nature Reviews Materials",
    pages: "2022",
    url: "https://www.nature.com/articles/s41578-022-00456-7",
  },

  {
    id: "3",
    title: "Science Education is a Human Right that Belongs to All",
    author: "Lerman, Z",
    publisher: "Iraqi Academy Journal",
    pages: "Vol 1 Issue 0 No 10, 2021, pp. 97-102",
    url: "",
  },
  {
    id: "4",
    title: "Malta X Anniversary and COVID-19",
    author: "Zajdela, E.R. and Lerman, Z.M.",
    publisher: "Chemistry International",
    pages: "vol. 43, no. 2, 2021 pp. 16-19",
    url: "https://doi.org/10.1515/ci-2021-0204",
  },
  {
    id: "5",
    title: "Chemistry for Peace",
    author: "Lerman, Z.M. and Zajdela, E.R.",
    publisher: "Chem. Eng. News",
    pages: "March 16, 2020, 98 (10), p. 2",
    url: "https://cen.acs.org/education/outreach/Malta-conferences-use-science-diplomacy/98/i10?utm_source=Policy&utm_medium=Policy&utm_campaign=CENRSS",
  },
  {
    id: "6",
    title:
      "Education, Human Rights, and Peace – Contributions to the Progress of Humanity",
    author: "Lerman, Z",
    publisher: "Pure and Applied Chemistry",
    pages: "91(2), 2018, pp. 351-360",
    url: "",
  },
  {
    id: "7",
    title: "Resolution on the Water Crisis in Gaza",
    author: "Lerman, Z.M.",
    publisher: "Chemistry International",
    pages: "2018 (40), 2, 32",
    url: "",
  },
  {
    id: "8",
    title: "A Chain Reaction for Peace",
    author: "Lerman, Z.M. and Margolin, B.",
    publisher: "Guest editorial in Chemistry and Engineering News",
    pages: "2018, 96 (4), pp. 2",
    url: "",
  },
  {
    id: "9",
    title: "The Malta Conferences",
    author: "Hoffman, M.Z.; Lerman, Z.M.; Black, I.",
    publisher:
      "Frontiers of Science: Research and Education in the Middle East, Chemistry International",
    pages: "2016, 38 (5), pp. 35-37",
    url: "",
  },
  {
    id: "10",
    title: "The Malta Conferences",
    author: "Hoffman, M.Z.; Lerman, Z.M.",
    publisher:
      "Frontiers of Science: Research and Education in the Middle East, American Physical Society, Forum on International Physics Newsletter",
    pages: "Spring 2016, pp. 26-27",
    url: "http://www.aps.org/units/fip/newsletters/201603/malta.cfm",
  },
  {
    id: "11",
    title: "From Fighting for Human Rights to Building a Bridge to Peace",
    author: "Lerman, Z.M.",
    publisher: "Science & Diplomacy",
    pages: "March 2015",
    url: "http://www.sciencediplomacy.org/letter-field/2015/fighting-for-human-rights-building-bridge-peace",
  },

  {
    id: "12",
    title:
      "The Malta Conferences: Fostering International Scientific Collaborations Toward Peace in the Middle East",
    author: "Hoffman, M.Z.; Lerman, Z.M.",
    publisher:
      "Jobs, Collaborations, and Women Leaders in the Global Chemistry Enterprise; Wu, M.L.; Cheng, H.N.; Miller, B., Eds., American Chemical Society, Washington, DC",
    pages: "2015, pp. 81-95",
    url: "",
  },

  {
    id: "13",
    title: "From Building Roads To Building Peace: A Woman Chemist’s Odyssey",
    author: "Lerman, Z.M.",
    publisher:
      "Jobs, Collaborations, and Women Leaders in the Global Chemistry Enterprise; Wu, M.L.; Cheng, H.N.; Miller, B., Eds., American Chemical Society, Washington, DC",
    pages: "2015, pp. 209-221",
    url: "",
  },

  {
    id: "14",
    title: "Science Offers a Hopeful New Diplomacy",
    author: "Lerman, Z.M.",
    publisher: "The World Academy of Sciences Newsletter, 2015, 27 (1), p. 23",
    url: "http://twas.org/sites/default/files/nl27-1_p23-zaframargolinlerman.pdf",
  },

  {
    id: "15",
    title: "Science Diplomacy: Seizing a New Opportunity",
    author: "",
    publisher:
      "The World Academy of Sciences for the Advancement of Science in Developing Countries, June 2015",
    url: "http://twas.org/article/science-diplomacy-seizing-new-opportunity",
  },

  {
    id: "16",
    title: "The Challenges for Chemistry Education in Africa",
    author: "Lerman, Z. M.",
    publisher:
      "African Journal of Chemical Education (AJCE),4 (2), pp 80-90. 2014",
    url: "",
  },
  {
    id: "17",
    title: "Research and Education in the Middle East",
    author: "Lerman, Z. M., Hoffman, M. Z. and Black, I.",
    publisher: "Chemistry International.(36)3. pp 6, 27- 29. 2014",
    url: "",
  },
  {
    id: "18",
    title:
      "The Malta Conferences, Frontiers of Science: Research and Education in the Middle East",
    author: "Lerman, Z. M. and Hoffman, M. Z.",
    publisher:
      "Forum on International Physics. American Physical Society. pp 19- 21. 2014",
    url: "",
  },
  {
    id: "19",
    title: "Human Rights, Education and Peace: A Personal Odyssey",
    author: "Lerman, Z. M.",
    publisher: "J. Chem. Educ., 90 (1), pp 5-9. 2013",
    url: "",
  },
  {
    id: "20",
    title: "Creative Methods for Teaching and Learning Chemistry",
    author: "Lerman, Z. M.",
    publisher:
      "Stimulating Reflection and Catalysing Change in Chemistry Education. pp 196-201. (Rome, Italy. 2012)",
    url: "",
  },
  {
    id: "21",
    title: "Using Chemistry to Bridge Gaps Between Nations",
    author: "Lerman, Z. M.",
    publisher:
      "15th ISCB International Conference. ICCM 2011. Published in a book on: “Chemistry for Mankind: Innovative Ideas in the Life Sciences” (Nagpur, India: 2011)",
    url: "",
  },
  {
    id: "22",
    title: "Chemistry and chemical education as a bridge to peace",
    author: "Lerman, Z. M.",
    publisher:
      "Chemistry Education in the ICT Age, Gupta-Bhowon, M.; Jhaumeer-Laulloo, S.; Li Kam Wah, H.; Ramasami, P. (Eds.): (Springer: 2009)",
    url: "",
  },
  {
    id: "23",
    title:
      "Using the Arts and Computer Animation to Make Chemistry Accessible to All in the 21st Century",
    author: "Lerman, Z. M. and Morton, D.",
    publisher:
      "Chemistry Education in the ICT Age, Gupta-Bhowon, M.; Jhaumeer-Laulloo, S.; Li Kam Wah, H.; Ramasami, P. (Eds.): (Springer: 2009)",
    url: "",
  },
  {
    id: "24",
    title: "Science Education for Students Gifted in the Arts",
    author: "Lerman, Z. M.",
    publisher:
      "Excellence in Education 2008: Future Minds and Creativity, T. Subhi-Yamin, editor: (National Library, Jordan: 2009)",
    url: "",
  },
  {
    id: "25",
    title: "Fostering Peace Through Scientific Bridges",
    author: "Lerman, Z.",
    publisher:
      "ACS International E-Newsletter, January/February 2008 issue (American Chemical Society Office of International Activities, Washington, DC: 2008)",
    url: "",
  },
  {
    id: "26",
    title: "Using the Arts to Make Chemistry Accessible to Everybody",
    author: "Lerman, Z. M.",
    publisher:
      "Studies in Philosophy, Culture & Education, pp. 149-165 (Institute for Multicultural Research, Arab Academic College for Education, Israel: 2007)",
    url: "",
  },
  {
    id: "27",
    title:
      "Frontiers of Chemical Sciences II: Research and Education in the Middle East",
    author: "Lerman, Z. M. and Wade, J.",
    publisher:
      "Chemistry in Israel - Bulletin of the Israel Chemical Society, (21), pp. 21-23 (Israel: 2006)",
    url: "",
  },
  {
    id: "28",
    title: "Contacts, Collaborations, and the Buddha",
    author: "Lerman, Z. M.",
    publisher:
      "Reflections from the Frontiers; Explorations for the Future; Gordon Research Conferences 1931-2006, p. 109 (Chemical Heritage Foundation, Philadelphia: 2006)",
    url: "",
  },
  {
    id: "29",
    title: "Chemistry: An Inspiration for Theatre and Dance",
    author: "Lerman, Z. M.",
    publisher: "Chemical Education International, 6, 1, 2005",
    url: "",
  },
  {
    id: "30",
    title: "Using the Arts to Make Chemistry Accessible to Everybody",
    author: "Lerman, Z. M.",
    publisher: "J. Chem. Ed., 80 (11), 1234-1243, 2003",
    url: "",
  },
  {
    id: "31",
    title:
      "Citizen Chemists (book review of Claude, R. P.: Science in the Service of Human Rights)",
    author: "Lerman, Z.",
    publisher: "Chemical and Engineering News, 87 (21), 42-43, 2003",
    url: "",
  },
  {
    id: "32",
    title: "From the Outreach Front! IAC Conference in Cuba",
    author: "Lerman, Z.",
    publisher: "J. Chem. Ed., 80 (4), 383, 2003",
    url: "",
  },
  {
    id: "33",
    title: "ACS Delegation Travels to Cuba",
    author: "Hoffman, M., and Lerman, Z.",
    publisher:
      "The Chemical Bulletin, 90, 4, 8, American Chemical Society, 2003",
    url: "",
  },
  {
    id: "34",
    title:
      "From Ozone to Oil Spills: Technological Solutions to Environmental Issues",
    author: "Lerman, Z. M.",
    publisher:
      "Commonwealth Association for Science, Technology and Mathematics Education (CASTME) conference on Linking Science, Mathematics and Technology Education, and their Social Relevance (Malta: 2002)",
    url: "",
  },
  {
    id: "35",
    title: "Alternative Methods to Teach and Assess Science",
    author: "Lerman, Z. M.",
    publisher:
      "Chemistry in Israel - Bulletin of the Israel Chemical Society, (8), 4-7 (Israel: 2001)",
    url: "http://www.weizmann.ac.il/ICS/booklet/8/pdf/alternative.pdf",
  },
  {
    id: "36",
    title:
      "Innovative Methods to Guarantee Science and Technology Education for All",
    author: "Lerman, Z. M., Neul, G. A., Kostecka, K., and Caplan, M.",
    publisher:
      "Science and Technology Education: Preparing Future Citizens, I, 13-21 (Paralimni, Cyprus: 2001)",
    url: "",
  },
  {
    id: "37",
    title: "Visualizing the Chemical Bond",
    author: "Lerman, Z. M.",
    publisher: "Chemical Education International, 2001 (2), 1, 6-13",
    url: "",
  },
  {
    id: "38",
    title: "Visualizing the Chemical Bond",
    author: "Lerman, Z. M.",
    publisher:
      "Chemical Education Journal, 5, (1), Special Issue on Pacifichem 2000 (2001)",
    url: "",
  },
  {
    id: "39",
    title: "Chemistry for the People who will Shape our Future",
    author: "Lerman, Z.",
    publisher:
      "Chemical Education Journal, 4, 1, Special Issue on the 8ACC Symposium on Chemical Education",
    url: "http://chem.sci.utsunomiya-u.ac.jp/v4n1/lerman/header4.html",
  },
];

const Container = styled.div`
  padding-top: 55px;
  text-align: center;
  h3 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-around;
  /* align-items: center; */
  text-align: center;
  /* margin-top: 30px; */
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-inline: 5px;
  width: 51%;
  gap: 2px;
  @media (max-width: 750px) {
    width: 80%;
  }
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  .honor,
  .year {
    font-weight: bold;
  }
`;

const TitleBlue = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  color: blue;
  display: inline-block;
  /* padding-inline: 10px; */
`;

const TitleBlack = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  /* padding-inline: 10px; */
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  /* color: #666; */
`;

const Author = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;
const Pages = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  /* color: #666; */
`;

const Publications = () => {
  return (
    <Container>
      <h3>Publications</h3>
      <List>
        {publications.map((publication) =>
          publication.url ? (
            <Item key={publication.id}>
              <TitleBlue
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.title}
              </TitleBlue>
              <Author>{publication.author}</Author>
              <Description>{publication.publisher}</Description>
              <Pages>{publication.pages}</Pages>
            </Item>
          ) : (
            <Item key={publication.id}>
              <TitleBlack
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.title}
              </TitleBlack>
              <Author>{publication.author}</Author>
              <Description>{publication.publisher}</Description>
              <Pages>{publication.pages}</Pages>
            </Item>
          )
        )}
      </List>
    </Container>
  );
};

export default Publications;
