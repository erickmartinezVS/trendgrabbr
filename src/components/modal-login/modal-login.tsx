import {
  ModalContainer,
  ModalText,
  ModalTitle,
  RowSpace,
} from "./modal-login.styles";
import { ModalProps } from "./modal-login.types";

import { Close } from "@mui/icons-material";
import { Backdrop, Fade, Modal } from "@mui/material";

import { Space } from "../space";
import { StyledInput } from "../styled-input";
import { StyledButton } from "../styled-button";

export const ModalLogin = (props: ModalProps) => {
  const closeAction = () => props.handleClose();

  return (
    <Modal
      open={props.open}
      onClose={closeAction}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open} style={{outline: 'none'}}>
        <ModalContainer>
          <RowSpace>
            <ModalTitle>Log-in</ModalTitle>
            <Close onClick={closeAction} sx={{ color: "#FF9933", fontSize: 50 }} />
          </RowSpace>
          <Space size={50}/>
          <StyledInput title="Email Address" placeholder="Enter email address here"/>
          <Space size={50}/>
          <StyledInput title="Password" placeholder="Enter password here"/>
          <Space size={70}/>
          <RowSpace>
            <ModalText>Forgot your password?</ModalText>
            <StyledButton title="Login" />
          </RowSpace>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
