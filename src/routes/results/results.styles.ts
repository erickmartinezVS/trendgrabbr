import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 60px 400px;
  text-align: left;
`;

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const RowSpace = styled.div`
  display: flex;
  justify-content: space-between;
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

export const SearchText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #606060;
`;

export const SearchTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #FF9933;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  height: 2px;
  background-color: lightgray;
`;

export const Card = styled.div`
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.25) 10px 10px 20px;
  border-radius: 10px;
  padding: 30px 40px;
  margin-top: 40px;
`;

export const RowInlineCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const CardName = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #3F5469;
`;

export const CardText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #3F5469;
`;

export const CardDescription = styled.div`
  font-size: 27px;
  font-weight: 500;
  color: #606060;
`;

export const CardState = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #0D9488;
`;

export const ButtonsContainer = styled.div`
  margin-inline: auto;
  width: fit-content;
`;

export const PagesContainer = styled.div`
  margin-inline: 20px;
`;