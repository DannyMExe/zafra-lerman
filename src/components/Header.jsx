import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { links } from "./Nav/links";
import NavBar from "./Nav/NavBar";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 24px 0 0;

  @media (min-width: 750px) {
    padding: 32px 0 0;
  }
`;

const HeaderInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 750px) {
    padding: 0 16px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const SiteTitle = styled(Link)`
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #4a90d9;
  }
`;

const BurgerWrap = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 750px) {
    display: none;
  }

  a {
    color: #4a5568;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 6px;
    transition: color 0.15s, background-color 0.15s;

    &:hover {
      color: #4a90d9;
      background-color: rgba(74, 144, 217, 0.08);
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <TitleRow>
          <SiteTitle href="/">Zafra Lerman</SiteTitle>
          <BurgerWrap>
            <NavBar />
          </BurgerWrap>
        </TitleRow>
        <Nav>
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              target={link.id === "malta" ? "_blank" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;
