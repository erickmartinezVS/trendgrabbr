import styled from "styled-components";

export const RowInline = styled.div`
  display: flex;
  align-items: center;
`;

export const RowSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowEnd = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 36vw;
  background-color: #f9fafb;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
`;

export const ModalTitle = styled.div`
  font-size: 70px;
  font-weight: bolder;
  color: #46556a;
`;

export const ModalText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #626262;
`;

export const ResultsContainer = styled.div`
  background-color: whitesmoke;
  padding: 25px 0px;
  display: flex;
`;

export const FieldContainer = styled.div<{ last?: boolean }>`
  padding-inline: 25px;
  border-right: solid black ${(props) => (props.last ? 0 : 1)}px;
  text-align: left;
  width: 33%;
`;

export const FieldTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #46556a;
  text-transform: uppercase;
`;

export const FieldText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #46556a;
`;

export const PeriodText = styled.div<{ selected?: boolean }>`
  font-size: 28px;
  font-weight: 500;
  color: #626262;
  border-radius: 10px;
  padding: 5px 15px;
  ${(props) => {
    if (props.selected) {
      return "border: 2px solid #FF9933;";
    } else {
      return "border: 2px solid transparent;";
    }
  }}
`;
