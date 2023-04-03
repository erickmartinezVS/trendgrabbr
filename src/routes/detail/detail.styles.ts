import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  padding: 2.5vw 16vw;
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
`;

export const CardText = styled.div`
  font-size: 1.12vw;
  font-weight: 500;
  color: #3f5469;
`;

export const CardDescription = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #606060;
`;

export const CardState = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #0d9488;
`;

export const Tab = styled.div<{ selected?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  width: 7vw;
  text-align: center;
  padding-bottom: 0.2vw;
  ${(props) => {
    if (props.selected) {
      return "color: #FF9933; border-bottom: 5px solid #FF9933";
    } else {
      return "color: #606060";
    }
  }};
`;

export const NewsContainer = styled.div`
  width: 23%;
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NewsTitle = styled.div`
  font-size: 1.1vw;
  font-weight: 700;
  color: #ff9933;
  text-transform: uppercase;
`;

export const SearchText = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #606060;
  display: flex;
`;

export const Highlight = styled.div`
  color: #ff9933;
  text-transform: uppercase;
  margin-inline: 0.4vw;
`;
