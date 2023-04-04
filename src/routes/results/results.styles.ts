import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 2.5vw 16vw;
  text-align: left;
  @media (max-width: 480px) {
    background-color: #f9fafb;
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  background-color: white;
  padding: 15px 20px;
  padding-top: 25px;
`;

export const MobileContainer = styled.div`
  @media (max-width: 480px) {
    padding: 20px;
    padding-bottom: 40px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: -10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff9933;
`;

export const InfoSectionContainer = styled.div<{ last?: boolean }>`
  width: 50%;
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.last)
      return "border-left: 1px solid lightgray; padding-left: 10px;";
  }}
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

export const RowSpaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContentText = styled.div<{ selected?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#FF9933" : "#606060")};
`;

export const ContentLink = styled(Link)<{ selected?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => (props.selected ? "#FF9933" : "#606060")};
`;

export const SearchText = styled.div`
  font-size: 1.2vw;
  font-weight: 500;
  color: #606060;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SearchTitle = styled.div`
  font-size: 1.2vw;
  font-weight: 700;
  color: #ff9933;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  height: 2px;
  background-color: lightgray;
  @media (max-width: 480px) {
    height: 1px;
  }
`;

export const Card = styled.div`
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.25) 10px 10px 20px;
  border-radius: 10px;
  padding: 1.2vw 1.6vw;
  margin-top: 1.6vw;
  @media (max-width: 480px) {
    padding: 15px;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 5px 5px 10px;
  }
`;

export const RowInlineCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const CardName = styled.div`
  font-size: 1.3vw;
  font-weight: 700;
  color: #3f5469;
  @media (max-width: 480px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CardText = styled.div`
  font-size: 1.12vw;
  font-weight: 500;
  color: #3f5469;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #606060;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  @media (max-width: 480px) {
    font-size: 14px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
`;

export const CardState = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #0d9488;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-inline: auto;
  width: fit-content;
`;

export const PagesContainer = styled.div`
  margin-inline: 0.8vw;
`;
