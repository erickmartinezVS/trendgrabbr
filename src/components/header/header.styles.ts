import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.div<{ backgroundImage: string, headerType: string }>`
  background-image: url(${(props) => props.backgroundImage});
  padding-bottom: ${(props) => props.headerType === 'home' ? 120 : 80}px;
  height: auto;
  max-width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-inline: 36px;
  padding-top: 40px;
  text-align: center;
  position: relative;
`;

export const RowHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 265px;
  height: 100%;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const HeaderTitle = styled.div`
  font-size: 70px;
  font-weight: bolder;
`;

export const HeaderSubTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

export const SearchBarContainer = styled.div`
  background-color: white;
  display: flex;
  padding-block: 25px;
  width: fit-content;
  margin-inline: auto;
`;

export const FieldContainer = styled.div<{ last?: boolean }>`
  padding-inline: 25px;
  border-right: solid black ${(props) => (props.last ? 0 : 1)}px;
  text-align: left;
  width: 15vw;
`;

export const FieldTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #46556a;
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

export const SearchBarText = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: #626262;
`;

const BounceAnimation = keyframes`
  0%, 5%, 10% { margin-bottom: 0; }
  2.5%, 7.5% { margin-bottom: 15px }
`;

export const DoubleArrowContainer = styled.div`
  animation: ${BounceAnimation} 10s linear infinite;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;

