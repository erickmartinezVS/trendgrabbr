import styled from "styled-components";

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const RowSpaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const RowSpace = styled.div`
  @media (min-width: 481px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ModalContainer = styled.div`
  background-color: #f9fafb;
  position: absolute;
  @media (min-width: 481px) {
    width: 36vw;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2vw;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 100dvh;
  }
`;

export const MainContainer = styled.div<{heightBottom: number}>`
  @media (max-width: 480px) {
    padding: 20px;
    height: calc(100vh - ${(props) => props.heightBottom}px - 40px);
    overflow-y: scroll;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: calc(100% - 40px);
  padding: 20px;
  padding-bottom: 40px;
  background-color: #f9fafb;
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  margin-top: 5px;
`;

export const ModalTitle = styled.div`
  font-size: 2.8vw;
  font-weight: bold;
  color: #46556a;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ModalText = styled.div`
  font-size: 1.1vw;
  font-weight: 700;
  color: #ff9933;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
