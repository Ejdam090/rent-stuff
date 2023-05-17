import React from "react";
import RentLogoDark from "../../../Assets/rent_logo_dark.png";
import RentLogoWhite from "../../../Assets/rent_logo_white.png";
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
  color: "white" | "dark";
}
const LogoContainer = styled.div`
  ${tw`
        flex
        items-center

    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl 
    font-bold
    m-1   
`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`
        h-6
        md:h-9
    `}
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color } = props;

  return (
    <LogoContainer>
      <Image>
        <img
          src={color === "white" ? RentLogoWhite : RentLogoDark}
          alt="rent_img"
        />
      </Image>
      <LogoText color={color || "dark"}>YourRent.</LogoText>
    </LogoContainer>
  );
}
