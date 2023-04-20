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
  .desktop-pdf {
    display: none;
  }

  .mobile-pdf {
    display: block;
  }
  @media only screen and (min-width: 750px) {
    .mobile-pdf {
      display: none;
    }

    .desktop-pdf {
      display: block;
    }
  }
`;

const Bio = () => {
  return (
    <BioSection>
      <iframe
        className="desktop-pdf"
        src="/ZafraLermanBio.pdf"
        type="application/pdf"
        width={"100%"}
        height={"100%"}
      ></iframe>
      <iframe
        className="mobile-pdf"
        src={
          "https://drive.google.com/viewerng/viewer?embedded=true&url=" +
          encodeURIComponent("www.zafralerman.com/ZafraLermanBio.pdf")
        }
        width="100%"
        height="90%"
        type="application/pdf"
        title="Title"
      >
        <a href="/ZafraLermanBio.pdf" target="_blank">
          Please click here to attempt to view the information in a separate
          browser window.
        </a>{" "}
      </iframe>
      <a href="/ZafraLermanBio.pdf" target="_blank" rel="noopener noreferrer">
        <button>Download Bio</button>
      </a>
    </BioSection>
  );
};

export default Bio;
