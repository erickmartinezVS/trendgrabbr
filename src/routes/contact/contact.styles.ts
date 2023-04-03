import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 8vw;
  padding-top: 2.5vw;
  text-align: left;
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #46556a;
  text-align: center;
`;

export const ContentText = styled.div<{selected?: boolean}>`
  font-size: 1.1vw;
  font-weight: 500;
  color: ${(props) => props.selected ? '#FF9933' : '#606060'};
`;

export const ContentLink = styled(Link)<{selected?: boolean}>`
  font-size: 1.1vw;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.selected ? '#FF9933' : '#606060'};
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.div`
  text-align: right;
`;

export const FormText = styled.div`
  font-size: 1.2vw;
  font-weight: 500;
  color: #606060;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: calc(100% - 40px);
  padding-bottom: 40px;
  background-color: white;
`;