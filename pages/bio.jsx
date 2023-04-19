import React from "react";
import styled from "styled-components";

// import BioPDF from "../public/Bio.pdf";

const BioSection = styled.div`
    height: 100vh;
    iframe {
        width: 100vw !important;
    }
`;

const Bio = () => {
    return (
        <BioSection>
            <iframe
                src="/ZafraLermanBio.pdf"
                width={"100%"}
                height={"100%"}
            ></iframe>
        </BioSection>
    );
};

export default Bio;
