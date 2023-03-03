import '../src/components/Nav/navbar.css'
import '../styles/index.css'
import NavBar from '../src/components/Nav/NavBar'
import styled from 'styled-components';
import Header from '../src/components/Header';

const Container = styled.div`
  margin: 0;
  width: 100%;
  overflow-x: clip;
`;

export default function App({ Component, pageProps }) {
  return (
    <Container>
      {/* <Header /> */}
      <Component {...pageProps} />
    </Container>
  )
}
