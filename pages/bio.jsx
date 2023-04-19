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
      <iframe
        src="/ZafraLermanBio.pdf"
        type="application/pdf"
        width={"100%"}
        height={"100%"}
      ></iframe>
      <a href="/ZafraLermanBio.pdf" target="_blank" rel="noopener noreferrer">
        <button>Download Bio</button>
      </a>
    </BioSection>
  );
};

export default Bio;
