import "../src/components/Nav/navbar.css";
import "../styles/index.css";
import styled from "styled-components";
import Header from "../src/components/Header";
import { useRouter } from "next/router";
import Footer from "../src/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Container = styled.div`
  margin: 0;
  width: 100%;
  overflow-x: clip;
  overflow-y: visible;
  position: relative;
  min-height: 100vh;
`;

const SceneryBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/homePage/bgNew.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(6px);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isHome = asPath === "/";

  return (
    <Container
      className={`${
        asPath === "/awards"
          ? "awards"
          : asPath === "/contact"
          ? "containerContact background"
          : isHome
          ? ""
          : "background"
      }`}
    >
      {isHome && <SceneryBg />}
      <Content>
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </Content>
    </Container>
  );
}
