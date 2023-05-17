import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const FooterContainer = styled.div`
  ///min-height: 19em;
  background-color: rgb(31, 42, 76);
  ${tw`
            flex
            flex-wrap
            min-w-full
            pt-6
            md:pt-16
            pb-2
            items-center
            justify-center

        `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        h-full
        w-full
        max-w-screen-2xl
        pl-12
        justify-center
    `}
`;
const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;
const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
        mr-2
        md:mr-10
    `}
`;
const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mt-7
        md:mt-0
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mr-4
        md:mr-16
    `}
`;
const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;
const ListItem = styled.li`
  ${tw`
        mb-3
    `}
  & > a {
    ${tw`
            text-xs
            text-white
            transition-all
            hover:text-gray-400
        `}
  }
`;
const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;
const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const RedIcon = styled.span`
  ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white
    `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            YourStuf is a Stuff renting and selling company located in may
            countries across the world which has high quality stuffs and top
            rated services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <LinksList>
            <HeaderTitle> Our Links</HeaderTitle>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">Stuffs</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <LinksList>
            <HeaderTitle> Other Links</HeaderTitle>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Politics</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+48 123-456-789</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>contact@wp.pl</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
