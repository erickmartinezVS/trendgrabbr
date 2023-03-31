import { Link } from "react-router-dom";
import styled from "styled-components";

export const RowInline = styled.div<{ align?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.align ? props.align : "left"};
`;

export const FooterContainer = styled.div`
  max-width: 100vw;
  background-color: #f9fafb;
  display: flex;
  justify-content: space-between;
  padding: 4vw 8vw;
  @media (max-width: 480px) {
    padding: 30px 20px;
    text-align: center;
    display: block;
  }
`;

export const FooterImage = styled.img`
  width: 10vw;
  @media (max-width: 480px) {
    width: 164px;
  }
`;

export const FooterText = styled.div<{ last?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  color: #46556a;
  ${(props) => {
    if (!props.last) {
      return "border-right: solid #46556a 1.5px; padding-right: 20px; margin-right: 20px;";
    }
  }}
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FooterLink = styled(Link)<{ last?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  color: #46556a;
  text-decoration: none;
  ${(props) => {
    if (!props.last) {
      return "border-right: solid #46556a 1.5px; padding-right: 20px; margin-right: 20px;";
    }
  }}
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const LogoIcon = styled.img`
  width: 1.7vw;
  @media (max-width: 480px) {
    width: 32px;
  }
`;
