import React from "react";
import styled from "styled-components";
// import PDF from "/ZafraLermanBio.pdf";

const BioSection = styled.div`
  height: 100vh;
  iframe {
    width: 100vw !important;
  }
  img {
    width: 50vw !important;
  }
`;

const Bio = () => {
  return (
    <BioSection>
      <iframe src="/ZafraLermanBio.pdf" width={"100%"} height={"100%"}></iframe>
    </BioSection>
  );
};

export default Bio;
