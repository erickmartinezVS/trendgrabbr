import {
  ContentContainer,
  ContentLink,
  ContentText,
  FormContainer,
  FormContent,
  FormText,
  RowInline,
} from "./contact.styles";

import { ChevronRight } from "@mui/icons-material";

import { StyledButton } from "../../components/styled-button";
import { StyledInput } from "../../components/styled-input";
import { Space } from "../../components/space";

export const Contact = () => {
  return (
    <ContentContainer>
      <RowInline>
        <ContentLink to={"/"}>Home</ContentLink>
        <ChevronRight
          color="primary"
          sx={{ fontSize: 45, marginInline: 1.5 }}
        />
        <ContentText selected>Contact Us</ContentText>
      </RowInline>
      <FormContainer>
        <FormContent>
          <FormText>
            Need to get in touch with us? Either fill out the form below with
            your inquiry.
          </FormText>
          <Space size={40}/>
          <StyledInput title="Full Name" placeholder="Enter full name here"/>
          <Space size={40}/>
          <StyledInput title="Email Address" placeholder="Enter email address here"/>
          <Space size={40}/>
          <StyledInput title="Message" placeholder="Enter text here"/>
          <Space size={60}/>
          <StyledButton title="Submit" />
        </FormContent>
      </FormContainer>
    </ContentContainer>
  );
};
