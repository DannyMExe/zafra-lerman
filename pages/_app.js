import "../src/components/Nav/navbar.css";
import "../styles/index.css";
import NavBar from "../src/components/Nav/NavBar";
import styled from "styled-components";
import Header from "../src/components/Header";
import { useRouter } from "next/router";

const Container = styled.div`
    margin: 0;
    width: 100%;
    overflow-x: clip;
    .background {
        /* background-color: purple; */
    }
`;

export default function App({ Component, pageProps }) {
    const { asPath } = useRouter();

    return (
        <Container
            className={
                asPath == "/" || asPath == "/collapse" || asPath == "/bio"
                    ? ""
                    : "background"
            }
        >
            {/* <Header /> */}
            {asPath !== "/" && <Header />}
            <Component {...pageProps} />
        </Container>
    );
}
