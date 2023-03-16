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
  font-weight: 700;
  color: #FF9933;
`;