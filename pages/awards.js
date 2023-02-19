import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding-top: 55px;
`;

const AwardsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Award = styled.div`
  padding-bottom: 15px;
`;


const Awards = () => {

  const awards = [
    {honor: 'Public Affairs Award', institution: 'American Chemical Society - Chicago Section', year: 1997},
    {honor: 'Kilby Laureate Awards', institution: 'The Kilby International Awards Foundation', year: 1998},
    {honor: 'Presidential Award for Excellence in Science, Mathematics and Engineering Mentoring', institution: '	President of the United States (Bill Clinton)', year: 1999},
    {honor: 'Joseph Hyman Ethics Award', institution: 'American Institute of Chemists', year: 2000},
    {honor: 'José Vasconcelos World Award of Education', institution: 'World Cultural Council', year: 2000},
    {honor: 'AAAS Fellow', institution: '	American Association for the Advancement of Science', year: 2001},
    {honor: '	James Flack Norris Award', institution: '	American Chemical Society–Northeastern Section', year: 2002},
    {honor: 'Charles Lathrop Parsons Award', institution: '	American Chemical Society', year: 2003},
    {honor: 'Heuer Award for Outstanding Achievement in Undergraduate Science Education', institution: 'Council of Independent Colleges', year: 2004},
    {honor: 'Heinz R. Pagels Human Rights Award', institution: '	New York Academy of Sciences', year: 2005},
    {honor: 'Recognition on International Human Rights Day', institution: '	American Association for the Advancement of Science', year: 2005},
    {honor: 'George Brown Award for International Scientific Cooperation', institution: '	U.S. Civilian Research & Development Foundation Global (CRDF Global)', year: 2007},
    {honor: 'George C. Pimentel Award in Chemical Education', institution: 'American Chemical Society', year: 2010},
    {honor: 'ACS Fellow', institution: 'American Chemical Society', year: 2010},
    {honor: 'Award for Stimulating Collaborations and Ensuring Human Rights', institution: 'The International Conference on Chemistry for Mankind (India)', year: 2011},
    {honor: 'Recognition in U.S. Congress', institution: 'Hon. Jan Schakowsky, Representative', year: 2013},
    {honor: 'Award for Science Diplomacy', institution: 'American Association for the Advancement of Science', year: 2015},
    {honor: 'Andrei Sakharov Prize', institution: 'American Physical Society', year: 2016},
    {honor: 'Peace and Justice Award', institution: 'UN NOVUS Summit', year: 2016},
    {honor: 'Distinguished Women in Chemistry or Chemical Engineering Award', institution: 'International Union of Pure and Applied Chemistry (IUPAC)', year: 2017},
    {honor: 'Three Nobel Peace Prize Nominations', institution: 'Nominators: member of the US Congress; member of the French parliament; Prof. of History', year: 2020},
  ]

  return (
    <Container>
    <AwardsContainer>
      <h3>Awards</h3>
        {awards.map((award, index) => {
          return (
            <Award key={index}>
              <p>{award.honor}</p>
              <p>{award.institution}</p>
              <p>{award.year}</p>
            </Award>
          )
        })}

    </AwardsContainer>
    <div>
    <h3>Publications</h3>

    </div>
    </Container>
  )
}

export default Awards