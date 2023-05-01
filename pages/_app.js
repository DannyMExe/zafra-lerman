import "../src/components/Nav/navbar.css";
import "../styles/index.css";
import NavBar from "../src/components/Nav/NavBar";
import styled from "styled-components";
import Header from "../src/components/Header";
import { useRouter } from "next/router";
import Footer from "../src/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const Container = styled.div`
  margin: 0;
  width: 100%;
  overflow-x: clip;
  overflow-y: hidden;
  position: relative;
  min-height: 100vh;
  .background {
    /* background-color: purple; */
  }
`;

const Parallax = styled(motion.div)`
  position: absolute;
  background-image: url("/homePage/bgNew.jpg");
  background-size: cover;
  background-position: center;
  top: 0;
  /* bottom: 0; */
  /* height: 400vh; */
  height: 100%;
  width: 100vw;
  max-width: 100%;
  z-index: -1;
`;

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);

  return (
    <Container
      className={`${
        asPath == "/"
          ? "footerBg"
          : asPath == "/awards"
          ? "awards"
          : "background"
      } ${asPath == "/contact" ? "containerContact" : ""}`}
    >
      <Parallax style={{ y }}></Parallax>
      <Header />
      <Component {...pageProps} />
      <Footer
        home={asPath == "/" || asPath == "/awards" ? true : false}
        contact={asPath == "/contact" ? true : false}
      />
    </Container>
  );
}
