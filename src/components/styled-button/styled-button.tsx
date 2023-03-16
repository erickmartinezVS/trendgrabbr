import { Button, IconButton, iconButtonClasses } from "@mui/material";
import { ButtonProps } from "./styled-button.types";

const colors = [
  {
    name: "primary",
    main: "#FF9933",
    second: "white",
  },
  {
    name: "secondary",
    main: "#3F5469",
    second: "white",
  },
];

export const StyledButton = ({
  title = "",
  color = "primary",
  variant = "contained",
  size = "medium",
  onlyIcon = false,
  disabled = false,
  selected = true,
  icon,
  onPress,
}: ButtonProps) => {
  const getColor = (type: string) => {
    let tempColor = colors.filter(function (value) {
      return value.name == color;
    });
    return type == "main" ? tempColor[0].main : tempColor[0].second;
  };

  return onlyIcon ? (
    <IconButton
      sx={
        !disabled
          ? {
              backgroundColor: getColor("main"),
              color: getColor("second"),
            }
          : {
              backgroundColor: getColor("second"),
              color: getColor("main"),
              border: `2px solid lightgray`,
            }
      }
      style={
        size == "medium"
          ? { borderRadius: 5, width: 70, height: 70 }
          : { borderRadius: 5, width: 45, height: 45 }
      }
      disabled={disabled}
      onClick={onPress}
    >
      {icon}
    </IconButton>
  ) : (
    <Button
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onPress}
      sx={
        selected
          ? {
              fontSize: 26,
              fontWeight: "bolder",
              fontFamily: "AnekMalayalam",
              textTransform: "none",
            }
          : {
              fontSize: 26,
              fontFamily: "AnekMalayalam",
              textTransform: "none",
            }
      }
      style={
        size == "medium"
          ? { height: 70, width: 200 }
          : { height: 45, width: 45 }
      }
    >
      {icon!}
      {title}
    </Button>
  );
};
