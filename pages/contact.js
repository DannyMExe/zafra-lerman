import styled from "styled-components";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  h1 {
    margin-block: 2%;
  }
  p {
    font-size: 22px;
    font-weight: 600;
    width: 60%;
    margin: auto;
    margin-bottom: 4%;
    @media (max-width: 850px) {
      width: 85%;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  align-items: center;
  margin-bottom: 6%;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const ContactIcon = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
`;

const EmailIcon = styled(MdEmail)`
  color: #b33;
`;

const TwitterIcon = styled(FaTwitter)`
  color: #1da1f2;
`;

const LinkedInIcon = styled(FaLinkedinIn)`
  color: #0077b5;
`;

const YoutubeIcon = styled(FaYoutube)`
  color: #ff0000;
`;

function ContactPage() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>
        Thank you for visiting my website! If you have any questions or
        comments, I'd love to hear from you. Please feel free to reach out via
        email or any of my social media platforms. I look forward to connecting
        with you!
      </p>
      <ContactContainer>
        <ContactLink href="mailto:zafra@zafralerman.com">
          <ContactItem>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            zafra@zafralerman.com
          </ContactItem>
        </ContactLink>
        <ContactLink
          href="https://twitter.com/ZafraLerman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactItem>
            <ContactIcon>
              <TwitterIcon />
            </ContactIcon>
            @ZafraLerman
          </ContactItem>
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/zafralerman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactItem>
            <ContactIcon>
              <LinkedInIcon />
            </ContactIcon>
            Zafra Lerman
          </ContactItem>
        </ContactLink>
        <ContactLink
          href="https://www.youtube.com/@lermaninstitute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactItem>
            <ContactIcon>
              <YoutubeIcon />
            </ContactIcon>
            Lerman Institute
          </ContactItem>
        </ContactLink>
      </ContactContainer>
    </Container>
  );
}

export default ContactPage;
