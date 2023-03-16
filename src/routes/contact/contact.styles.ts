import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 200px;
  padding-top: 60px;
  text-align: left;
`;

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentText = styled.div<{selected?: boolean}>`
  font-size: 26px;
  font-weight: 500;
  color: ${(props) => props.selected ? '#FF9933' : '#606060'};
`;

export const ContentLink = styled(Link)<{selected?: boolean}>`
  font-size: 26px;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.selected ? '#FF9933' : '#606060'};
`;

export const FormContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.div`
  text-align: right;
`;

export const FormText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #606060;
`;
