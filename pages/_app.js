import '../src/components/navbar.css'
import NavBar from '../src/components/NavBar'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
`;

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <NavBar />
      <Component {...pageProps} />
    </Container>
  )
}
