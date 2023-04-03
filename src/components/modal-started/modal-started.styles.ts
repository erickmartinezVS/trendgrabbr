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

export const RowEnd = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
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
    overflow-y: scroll;
  }
`;

export const MainContainer = styled.div`
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ModalTitle = styled.div`
  font-size: 2.8vw;
  font-weight: bolder;
  color: #46556a;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ModalText = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #626262;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  margin-top: 5px;
`;

export const ResultsContainer = styled.div`
  background-color: whitesmoke;
  padding-block: 1vw;
  display: flex;
  @media (max-width: 480px) {
    padding-block: 10px;
  }
`;

export const FieldContainer = styled.div<{ last?: boolean }>`
  padding-inline: 1vw;
  border-right: solid black ${(props) => (props.last ? 0 : 1)}px;
  text-align: left;
  width: 33%;
  @media (max-width: 480px) {
    padding-inline: 10px;
  }
`;

export const FieldTitle = styled.div`
  font-size: 0.9vw;
  font-weight: 700;
  color: #46556a;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FieldText = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  color: #46556a;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const PeriodText = styled.div<{ selected?: boolean }>`
  font-size: 1.1vw;
  font-weight: 500;
  color: #626262;
  border-radius: 10px;
  padding: 0.2vw 0.6vw;
  ${(props) => {
    if (props.selected) {
      return "border: 2px solid #FF9933;";
    } else {
      return "border: 2px solid transparent;";
    }
  }}
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 5px 15px;
  }
`;
