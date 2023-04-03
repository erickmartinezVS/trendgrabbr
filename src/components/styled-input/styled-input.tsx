import { Input, InputProps } from "@mui/material";
import { isMobile } from "react-device-detect";
import { Space } from "../space";
import { InputContainer, InputTitle } from "./styled-input.styles";

export const StyledInput = (props: InputProps) => (
  <InputContainer>
    <InputTitle>{props.title}</InputTitle>
    <Space size={0.5} test />
    <Input
      placeholder={props.placeholder}
      fullWidth
      sx={{
        fontSize: isMobile ? 18 : "1.1vw",
        fontWeight: 500,
        fontFamily: "AnekMalayalam",
        color: "#606060",
      }}
    />
  </InputContainer>
);
