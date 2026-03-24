import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

const Container = styled.footer`
  padding: 32px 24px;
  margin-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 750px) {
    padding: 24px 16px;
  }
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    color: #5a6a7a;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.15s, background-color 0.15s;
    background: rgba(255, 255, 255, 0.6);

    &:hover {
      color: #4a90d9;
      background: rgba(74, 144, 217, 0.08);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 13px;
  color: #8896a6;
  line-height: 1.6;
`;

function Footer() {
  return (
    <Container>
      <SocialRow>
        <Link
          href="https://twitter.com/ZafraLerman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </Link>
        <Link href="mailto:zafra@zafralerman.com" aria-label="Email">
          <MdEmail />
        </Link>
        <Link
          href="https://www.youtube.com/@lermaninstitute"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://www.linkedin.com/in/zafralerman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </Link>
      </SocialRow>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Zafra Lerman</p>
        <p>info@zafralerman.com</p>
      </Copyright>
    </Container>
  );
}

export default Footer;
