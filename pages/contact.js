import styled from "styled-components";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  text-align: center;

  @media (max-width: 750px) {
    padding: 24px 16px 40px;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 16px;
  }
  p {
    font-size: 16px;
    color: #5a6a7a;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: #c5d5e8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .icon {
    font-size: 28px;
    display: flex;
  }
  .label {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

const ContactLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function ContactPage() {
  return (
    <Container>
      <Head>
        <title>Contact</title>
      </Head>

      <PageHeader>
        <h1>Contact</h1>
        <p>
          Thank you for visiting! If you have any questions or comments, please
          feel free to reach out via email or any of the platforms below.
        </p>
      </PageHeader>

      <ContactGrid>
        <ContactLink href="mailto:zafra@zafralerman.com">
          <ContactCard>
            <span className="icon" style={{ color: "#b33" }}>
              <MdEmail />
            </span>
            <span className="label">zafra@zafralerman.com</span>
          </ContactCard>
        </ContactLink>

        <ContactLink
          href="https://twitter.com/ZafraLerman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactCard>
            <span className="icon" style={{ color: "#1da1f2" }}>
              <FaTwitter />
            </span>
            <span className="label">@ZafraLerman</span>
          </ContactCard>
        </ContactLink>

        <ContactLink
          href="https://www.linkedin.com/in/zafralerman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactCard>
            <span className="icon" style={{ color: "#0077b5" }}>
              <FaLinkedinIn />
            </span>
            <span className="label">Zafra Lerman</span>
          </ContactCard>
        </ContactLink>

        <ContactLink
          href="https://www.youtube.com/@lermaninstitute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactCard>
            <span className="icon" style={{ color: "#ff0000" }}>
              <FaYoutube />
            </span>
            <span className="label">Lerman Institute</span>
          </ContactCard>
        </ContactLink>
      </ContactGrid>
    </Container>
  );
}

export default ContactPage;
