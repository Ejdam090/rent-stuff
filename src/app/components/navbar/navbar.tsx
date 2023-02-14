import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo/Logo";
import { NavItems } from "./navbaritems";


const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;
const LogoCont = styled.div``;

export function Navbar() {
  return (
    <NavBarContainer>
      <LogoCont>
        <Logo />
      </LogoCont>
      <NavItems />
    </NavBarContainer>
  );
}
