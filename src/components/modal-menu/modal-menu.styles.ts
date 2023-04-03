import styled from "styled-components";

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const RowSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const RowMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: #f9fafb;
  position: absolute;
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  padding-inline: 40px;
  position: relative;
`;

export const BottomContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 30px;
  width: 100vw;
  text-align: center;
`;

export const LogoImage = styled.img`
  width: 164px;
`;

export const LogoIcon = styled.img`
  width: 32px;
`;

export const ModalOption = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #3F5469;
`;
