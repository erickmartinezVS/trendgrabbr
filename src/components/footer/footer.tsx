import {
  FooterContainer,
  FooterImage,
  FooterLink,
  FooterText,
  RowInline
} from "./footer.styles";

import {
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

import logo2 from "../../assets/Logo-footer.png";
import { Space } from "../space";

export const Footer = () => {
  return (
    <FooterContainer>
        <div>
          <FooterImage src={logo2} alt="logo2" />
          <Space size={30} />
          <RowInline>
            <FooterLink to={'contact/'}>Contact Us</FooterLink>
            <FooterText>About TrendGrabbr</FooterText>
            <FooterText last>Blog</FooterText>
          </RowInline>
        </div>
        <div style={{ textAlign: "right" }}>
          <RowInline style={{ justifyContent: "right" }}>
            <Facebook sx={{ color: "#46556a", fontSize: 60 }} />
            <Space size={50} horizontal />
            <Twitter sx={{ color: "#46556a", fontSize: 60 }} />
            <Space size={50} horizontal />
            <Instagram sx={{ color: "#46556a", fontSize: 60 }} />
          </RowInline>
          <Space size={30} />
          <FooterText last>© 2022 TrendGrabbr: All rights reserved</FooterText>
        </div>
      </FooterContainer>
  );
};
