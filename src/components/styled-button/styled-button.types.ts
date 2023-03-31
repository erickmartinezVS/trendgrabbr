import { MouseEventHandler } from "react";

export interface ButtonProps {
  title?: string | number;
  color?: "primary" | "inherit" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  size?: "small" | "medium";
  onlyIcon?: boolean;
  disabled?: boolean;
  selected?: boolean;
  mobile?: boolean;
  icon?: JSX.Element;
  onPress?: MouseEventHandler;
}