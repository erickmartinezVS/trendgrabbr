import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.div<{ backgroundImage: string, headerType: string }>`
  background-image: url(${(props) => props.backgroundImage});
  height: auto;
  max-width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
  padding: 1.4vw;
  padding-bottom: ${(props) => props.headerType === 'home' ? 10 : 5}vh;
  @media (max-width: 480px){
    padding-top: 30px;
    padding-inline: 20px;
    padding-bottom: ${(props) => props.headerType === 'home' ? 100 : 20}px;
  }
`;

export const RowHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 10.5vw;
  height: 100%;
  @media (max-width: 480px){
    width: 140px;
  }
`;

export const RightHeaderContainer = styled.div`
 @media (min-width: 481px){
    display: flex;
    align-items: center;
  }
  @media (max-width: 480px){
    display: none;
  }
`;

export const RightMobileHeaderContainer = styled.div`
  @media (min-width: 481px){
    display: none;
  }
`;

export const HeaderText = styled.div`
  font-size: 1.2vw;
  font-weight: 500;
`;

export const HeaderTitle = styled.div`
  font-size: 3vw;
  font-weight: bolder;
  @media (max-width: 480px){
    font-size: 40px;
  }
`;

export const HeaderSubTitle = styled.div`
  font-size: 1.3vw;
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 17px;
  }
`;

export const SearchBarContainer = styled.div`
  background-color: white;
  display: flex;
  padding-block: 1vw;
  width: fit-content;
  margin-inline: auto;
  @media (max-width: 480px) {
    display: block;
    width: calc(100% - 80px);
    padding-inline: 20px;
    padding-top: 10px;
    padding-bottom: 40px;
    box-shadow: rgba(0, 0, 0, 0.25) 10px 10px 20px;
    position: absolute;
    margin-top: 30px;
  }
`;

export const FieldContainer = styled.div<{ last?: boolean }>`
  padding-inline: 1vw;
  border-right: solid black ${(props) => (props.last ? 0 : 1)}px;
  text-align: left;
  width: 15vw;
  @media (max-width: 480px) {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 10px;
    border-right: none;
    border-bottom: solid black 1px;
  }
`;

export const FieldTitle = styled.div`
  font-size: 0.9vw;
  font-weight: 700;
  color: #46556a;
  @media (max-width: 480px) {
    font-size: 16px;
    font-weight: 500;
  }
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

export const RowSpaceSpecial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11vw;
  @media (max-width: 480px) {
    width: calc(100vw - 100px);
  }
`;

export const SearchBarText = styled.div`
  font-size: 1.1vw;
  font-weight: 400;
  color: #626262;
  @media (max-width: 480px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

const BounceAnimation = keyframes`
  0%, 5%, 10% { margin-bottom: 0; }
  2.5%, 7.5% { margin-bottom: 1.3vh }
`;

export const DoubleArrowContainer = styled.div`
  animation: ${BounceAnimation} 10s linear infinite;
  position: absolute;
  bottom: 1.5vh;
  left: 0;
  right: 0;
  @media (max-width: 480px) {
    display: none;
  }
`;

