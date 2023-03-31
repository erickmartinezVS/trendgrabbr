import {
  BottomContainer,
  LogoIcon,
  LogoImage,
  MainContainer,
  ModalContainer,
  ModalOption,
  RowMiddle,
  RowSpace,
} from "./modal-menu.styles";
import { ModalProps } from "./modal-menu.types";

import { Close } from "@mui/icons-material";
import { Backdrop, Fade, Modal, Slide } from "@mui/material";

import { Space } from "../space";
import { StyledButton } from "../styled-button";

import logo from "../../assets/Logo-footer.png";
import facebook from "../../assets/Facebook-icon.png";
import twitter from "../../assets/Twitter-icon.png";
import instagram from "../../assets/Instagram-icon.png";

export const ModalMenu = (props: ModalProps) => {
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
      <Slide
        direction="left"
        mountOnEnter
        unmountOnExit
        in={props.open}
        style={{ outline: "none" }}
      >
        <ModalContainer>
          <RowSpace>
            <LogoImage src={logo} alt="logo" />
            <Close
              onClick={closeAction}
              sx={{ color: "#626262", fontSize: 25 }}
            />
          </RowSpace>
          <Space size={30} />
          <MainContainer>
            <ModalOption>About TrendGrabbr</ModalOption>
            <Space size={40} />
            <ModalOption>Blog</ModalOption>
            <Space size={40} />
            <ModalOption>Contact Us</ModalOption>
          </MainContainer>
          <BottomContainer>
            <MainContainer>
              <StyledButton title="Get Started" mobile />
              <Space size={25} />
              <StyledButton title="LOG IN" mobile variant="text" />
              <Space size={50} />
              <RowMiddle>
                <LogoIcon src={facebook} />
                <Space size={40} horizontal/>
                <LogoIcon src={twitter} />
                <Space size={40} horizontal/>
                <LogoIcon src={instagram} />
              </RowMiddle>
            </MainContainer>
          </BottomContainer>
        </ModalContainer>
      </Slide>
    </Modal>
  );
};
