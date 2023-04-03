import {
  BottomContainer,
  CloseContainer,
  MainContainer,
  ModalContainer,
  ModalText,
  ModalTitle,
  RowSpace,
  RowSpaceHeader,
} from "./modal-login.styles";
import { ModalProps } from "./modal-login.types";

import { Close } from "@mui/icons-material";
import { Backdrop, Fade, Modal } from "@mui/material";

import { Space } from "../space";
import { StyledInput } from "../styled-input";
import { StyledButton } from "../styled-button";
import { isMobile } from "react-device-detect";
import { useEffect, useRef, useState } from "react";

export const ModalLogin = (props: ModalProps) => {
  const [heightBottom, setHeightBottom] = useState<number>(0);
  const closeAction = () => props.handleClose();
  const refBottom = useRef<any>(null);

  useEffect(() => {
    if (props.open) setHeightBottom(refBottom.current?.clientHeight);
  }, [refBottom.current, props.open]);

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
      <Fade in={props.open} style={{ outline: "none" }}>
        <ModalContainer>
          <MainContainer heightBottom={heightBottom}>
            <RowSpaceHeader>
              <ModalTitle>Log-in</ModalTitle>
              {isMobile ? (
                <CloseContainer>
                  <Close
                    onClick={closeAction}
                    sx={{ color: "#606060", fontSize: 26 }}
                  />
                </CloseContainer>
              ) : (
                <Close
                  onClick={closeAction}
                  sx={{ color: "#FF9933", fontSize: "2vw" }}
                />
              )}
            </RowSpaceHeader>
            <Space size={isMobile ? 10 : 4} test />
            <StyledInput
              title="Email Address"
              placeholder="Enter email address here"
            />
            {isMobile ? <Space size={35} /> : <Space size={4} test />}
            <StyledInput title="Password" placeholder="Enter password here" />
            {isMobile ? <Space size={20} /> : <Space size={5.5} test />}
            <RowSpace>
              <ModalText>Forgot your password?</ModalText>
              {!isMobile && <StyledButton title="Login" />}
            </RowSpace>
          </MainContainer>
          {isMobile && (
            <BottomContainer ref={refBottom}>
              <StyledButton title="LOGIN" mobile />
            </BottomContainer>
          )}
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
