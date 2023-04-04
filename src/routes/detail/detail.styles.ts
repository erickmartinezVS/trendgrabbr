import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 2.5vw 16vw;
  text-align: left;
  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const MobileContainer = styled.div`
  @media (max-width: 480px) {
    padding: 20px;
    padding-bottom: 40px;
  }
`;

export const HeaderContainer = styled.div`
  background-color: white;
  padding: 15px 20px;
  padding-top: 25px;
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

export const RowSpaceNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    display: block;
  }
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

export const Divider = styled.div`
  height: 2px;
  background-color: lightgray;
  @media (max-width: 480px) {
    height: 1px;
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
    font-size: 24px;
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
  @media (max-width: 480px) {
    font-size: 16px;
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

export const Tab = styled.div<{ selected?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  width: 7vw;
  text-align: center;
  padding-bottom: 0.2vw;
  ${(props) => {
    if (props.selected) {
      return "color: #FF9933; border-bottom: 4px solid #FF9933";
    } else {
      return "color: #606060";
    }
  }};
  @media (max-width: 480px) {
    width: 100px;
    font-size: 18px;
    padding-bottom: 2px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const NewsMobileContainer = styled.div`
  @media (max-width: 480px) {
    display: block;
    margin-left: 10px;
  }
`;

export const NewsContainer = styled.div`
  width: 23%;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    margin-top: 30px;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    width: 50%;
  }
`;

export const NewsTitle = styled.div`
  font-size: 1.1vw;
  font-weight: 700;
  color: #ff9933;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const NewsDescription = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #606060;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ViewTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff9933;
  text-transform: uppercase;
  text-align: right;
  margin-top: 15px;
`;

export const SearchText = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #606060;
  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Highlight = styled.a`
  color: #ff9933;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-weight: bold;
  }
`;
