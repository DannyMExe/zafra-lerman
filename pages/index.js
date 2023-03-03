import React from 'react'
import styled from 'styled-components'

const SplashPage = styled.div`
text-align: center;
background-color: #d3d3d3;
height: 100vh;
h1 {
    padding-top: 45vh;
}
`;

const Splash = () => {
  return (
    <SplashPage>
        <h1>The Home Page of Zafra Margolin Lerman</h1>
        {/* <h3>Under Construction</h3> */}
    </SplashPage>
  )
}

export default Splash