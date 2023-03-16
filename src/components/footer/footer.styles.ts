import { Link } from "react-router-dom";
import styled from "styled-components";

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
  max-width: 100vw;
  background-color: #F9FAFB;
  display: flex;
  justify-content: space-between;
  padding: 80px 200px;
  text-align: left;
`;

export const FooterImage = styled.img`
  width: 250px;
`;

export const FooterText = styled.div<{ last?: boolean }>`
  font-size: 28px;
  font-weight: 500;
  color: #46556a;
  ${(props) => {
    if (!props.last) {
      return 'border-right: solid #46556a 2px; padding-right: 20px; margin-right: 20px;'
    }
  }}
`;

export const FooterLink = styled(Link)<{ last?: boolean }>`
  font-size: 28px;
  font-weight: 500;
  color: #46556a;
  text-decoration: none;
  ${(props) => {
    if (!props.last) {
      return 'border-right: solid #46556a 2px; padding-right: 20px; margin-right: 20px;'
    }
  }}
`;