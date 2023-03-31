import styled from "styled-components";

export const RowInline = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  max-width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 8vw;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ComputerImage = styled.img`
  width: 45%;
  height: 100%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 45%;
  align-items: center;
  margin-block: auto;
`;

export const ContainerTitle = styled.div`
  font-size: 2.2vw;
  font-weight: bolder;
  color: #46556a;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ContainerSubTitle = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #626262;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContentMobileContainer = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px;
  padding-top: 500px;
  @media (min-width: 481px) {
    display: none;
  }
`;
