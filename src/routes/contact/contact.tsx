import {
  BottomContainer,
  ContentContainer,
  ContentLink,
  ContentText,
  FormContainer,
  FormContent,
  FormText,
  ModalTitle,
  RowInline,
} from "./contact.styles";

import { ChevronRight } from "@mui/icons-material";

import { StyledButton } from "../../components/styled-button";
import { StyledInput } from "../../components/styled-input";
import { Space } from "../../components/space";
import { Footer } from "../../components/footer";

import { isMobile } from "react-device-detect";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const [heightBottom, setHeightBottom] = useState<number>(0);
  const refBottom = useRef<any>(null);

  useEffect(() => {
    setHeightBottom(refBottom.current?.clientHeight);
  }, [refBottom.current]);

  return (
    <>
      <ContentContainer>
        {isMobile ? (
          <ModalTitle>Contact Us</ModalTitle>
        ) : (
          <RowInline>
            <ContentLink to={"/"}>Home</ContentLink>
            <ChevronRight
              color="primary"
              sx={{ fontSize: "1.8vw", marginInline: "0.5vw" }}
            />
            <ContentText selected>Contact Us</ContentText>
          </RowInline>
        )}
        {isMobile ? <Space size={30} /> : <Space size={4} test />}
        <FormContainer>
          <FormContent>
            <FormText>
              Need to get in touch with us? Either fill out the form below with
              your inquiry.
            </FormText>
            <Space size={3.5} test />
            <StyledInput title="Full Name" placeholder="Enter full name here" />
            <Space size={3.5} test />
            <StyledInput
              title="Email Address"
              placeholder="Enter email address here"
            />
            <Space size={3.5} test />
            <StyledInput title="Message" placeholder="Enter text here" />
            <Space size={5} test />
            {!isMobile && <StyledButton title="Submit" />}
          </FormContent>
        </FormContainer>
        {isMobile && (
          <BottomContainer ref={refBottom}>
            <StyledButton title="SUBMIT" mobile />
          </BottomContainer>
        )}
      </ContentContainer>
      {!isMobile &&  <Footer />}
    </>
  );
};
