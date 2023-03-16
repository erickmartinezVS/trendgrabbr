import { Input, InputProps } from "@mui/material";
import { Space } from "../space";
import { InputContainer, InputTitle } from "./styled-input.styles";

export const StyledInput = (props: InputProps) => (
  <InputContainer>
    <InputTitle>{props.title}</InputTitle>
    <Space size={5} />
    <Input
      placeholder={props.placeholder}
      fullWidth
      sx={{
        fontSize: 26,
        fontWeight: 500,
        fontFamily: "AnekMalayalam",
        color: "#606060",
      }}
    />
  </InputContainer>
);
