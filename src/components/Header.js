import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { links } from "./Nav/links";
import NavBar from "./Nav/NavBar";
import Logo from "../../public/LIASLogoNoText.png";
import Image from "next/image";

const headerMainHeight = "7em";
const headerTopHeight = "2em";

const HeaderContainer = styled.div`
  color: white;
  height: ${headerMainHeight + headerTopHeight};
  h1,
  p {
    :hover {
      color: lightgray;
    }
  }
`;
// const HeaderTop = styled.div`
//   height: ${headerTopHeight};
//   background-color: black;

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;

//   * {
//     margin: auto 0;
//   }
//   p {
//     margin-top: 0.27em;
//     padding: 0 0.4em 0.15em;
//   }
// `;

const mobileLogoTextWidth = "3.62em";

const HeaderMain = styled.div`
  /* margin-top: -1px; */
  width: 100%;
  height: ${headerMainHeight};
  background-color: #3060A8;

  /* @media screen and (min-width: 750px) {
    #siteTitle {
      text-align: center;
    }

  } */

  > div {
    height: 100%;
    a {text-decoration: none;}
    h1 {
      margin-top: 0.13em;
      color: white;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }

  .headerIconButton {
    background-color: #7b0000;
    width: calc(${headerMainHeight} - 0.5em);
    height: ${headerMainHeight};

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerIconButton:active {
    background-color: #660000;
  }
  /* #headerLogo {
    width: calc(${headerMainHeight} + ${mobileLogoTextWidth});
    padding-left: 0.25em;

    h1 {
      font-size: 1em;
      width: ${mobileLogoTextWidth};
      margin: 0 0.4em 0 0.5em;
    }
  } */
  .productType {
    font-size: 1.4em;
    padding: 0 0.2em;
    /* margin: 0 0.8em; */
  }

  #headerMainCenter {
    text-align: center;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    #siteTitle {
      width: fit-content;
      margin: 0.05em auto 0.15em;
      font-size: 2.1em;
      flex: 2 2 200%;
      border-bottom: 1px solid white;
    }
  }

  @media screen and (min-width: 800px) {
    // should expand logo to be wider, maybe at smaller width?
  }
`;


const LinksContainer = styled.div`
@media (max-width: 750px) {
  /* display:none; */
  display: none;
}

display: flex;
width: 90%;
max-width: 850px;
justify-content: space-between;

a {
  color: white;
  text-decoration:none;
  font-size: 24px;
}

`;

const BurgerMenu = styled.div`
@media (min-width: 751px) {
  display: none;
}
position: absolute;
top: 36px;
right: 36px;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50px;
  justify-content: center;
  align-items: center;
  `;


//COMPONENT STARTS HERE
function Header() {



  // if we want to hide search when user switch pages, maybe should add 'isSearching' to redux store
  // also need to allow user to exit out by clicking elsewhere
  return (
    <HeaderContainer>
      <HeaderMain>
        <div>
          <div id="headerMainCenter">
            <LogoContainer>
              <Image src={Logo} height={80}/>
            </LogoContainer>
            <Link href="/">
              <h1 id="siteTitle">Zafra Lerman</h1>
            </Link>
            </div>
            <BurgerMenu>
              <NavBar />
            </BurgerMenu>
              <LinksContainer>
                {links.map((link, idx) => {
                  return (
                    <Link id={link.id} key={idx} href={link.path}>{link.title}</Link>
                    )
                  })}
              </LinksContainer>
        </div>
      </HeaderMain>
    </HeaderContainer>
  );
}

// disabling SSR for the header, because its contents depend on the localStorage
export default Header;
