import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { links } from "./Nav/links";
import NavBar from "./Nav/NavBar";
import Logo from "../../public/LIASLogoNoText.png";
import Image from "next/image";

const headerMainHeight = "10em";
const headerTopHeight = "2em";

const HeaderContainer = styled.div`
  color: white;
  /* height: 10em; */
  h1,
  p {
    :hover {
      color: lightgray;
    }
  }
`;

const mobileLogoTextWidth = "3.62em";

const HeaderMain = styled.div`
  width: 100%;
  padding-top: 25px;
  background-color: rgba(255, 255, 255, 0);
  @media (min-width: 750px) {
    padding-top: 50px;
  }

  > div {
    height: 100%;
    a {
      /* text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center; */
    }
    h1 {
      margin-top: 0.13em;
      color: black;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
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
    justify-content: center;
    margin-bottom: 15px;
    gap: 2rem;

    #siteTitle {
      width: fit-content;
      /* margin: 0.05em auto 0.15em; */
      font-size: 2.1em;
      flex: 2 2 200%;
      @media (min-width: 750px) {
        font-size: 2.8em;
      }
      /* border-bottom: 1px solid white; */
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
  width: 80%;
  /* max-width: 900px; */
  justify-content: space-between;
  text-align: center;

  a {
    color: black;
    text-decoration: none;
    font-size: clamp(18px, 20px, 22px);
    text-align: center;
    font-weight: bold;
    /* flex-grow: 1; */
    flex-basis: 0;
    /* min-width: 120px; */
    display: flex;
    align-items: center;
    justify-content: center;
    @media (width <= 1000px) {
      font-size: 16px;
    }
    @media (width >= 1300px) {
      font-size: 22px;
    }
  }
  /* a:not(:last-child)::after {
    content: "|";
    margin: 0 10px;
  } */
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
  /* position: absolute; */
  top: 16px;
  left: 25px;
  justify-content: center;
  align-items: center;
  justify-self: left;
  img {
    @media (min-width: 750px) {
      height: 100px;
      width: auto;
    }
  }
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
              {/* <Image src={Logo} height={50} /> */}
            </LogoContainer>
            <Link href="/" style={{ justifySelf: "center" }}>
              <h1 id="siteTitle">Zafra Lerman</h1>
            </Link>
            <div style={{ width: "38px" }}></div>
            <BurgerMenu>
              <NavBar />
            </BurgerMenu>
          </div>
          <LinksContainer>
            {links.map((link, idx) => {
              return (
                <Link
                  id={link.id}
                  key={idx}
                  href={link.path}
                  target={link.id == "malta" ? "_blank" : ""}
                >
                  {link.title}
                </Link>
              );
            })}
          </LinksContainer>
        </div>
      </HeaderMain>
    </HeaderContainer>
  );
}

// disabling SSR for the header, because its contents depend on the localStorage
export default Header;
