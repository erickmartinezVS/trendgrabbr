import {
  FooterContainer,
  FooterImage,
  FooterLink,
  FooterText,
  LogoIcon,
  RowInline,
} from "./footer.styles";
import { isMobile } from "react-device-detect";

import logo2 from "../../assets/Logo-footer.png";
import facebook from "../../assets/Facebook-icon.png";
import twitter from "../../assets/Twitter-icon.png";
import instagram from "../../assets/Instagram-icon.png";

import { Space } from "../space";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <FooterImage src={logo2} alt="logo2" />
          {isMobile ? <Space size={40} /> : <Space size={2.5} test />}
          <RowInline align={isMobile ? "center" : "left"}>
            <FooterLink to={"contact/"}>Contact Us</FooterLink>
            <FooterText>About TrendGrabbr</FooterText>
            <FooterText last>Blog</FooterText>
          </RowInline>
        </div>
        {isMobile && <Space size={50} />}
        <div style={{ textAlign: isMobile ? "center" : "right" }}>
          <RowInline align={isMobile ? "center" : "right"}>
            <LogoIcon src={facebook} />
            {isMobile ? <Space size={30} horizontal /> : <Space size={2} horizontal test />}
            <LogoIcon src={twitter} />
            {isMobile ? <Space size={30} horizontal /> : <Space size={2} horizontal test />}
            <LogoIcon src={instagram} />
          </RowInline>
          {isMobile ? <Space size={50} /> : <Space size={5} test />}
          <FooterText last>© 2022 TrendGrabbr: All rights reserved</FooterText>
        </div>
      </FooterContainer>
    </>
  );
};
