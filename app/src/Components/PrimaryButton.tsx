import { Button } from "@mui/material";
import React from "react";
import { DarkThemeContext } from "../Contexts/DarkThemeContext";

interface PrimaryButtonProps {
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text, disabled, type }) => {
  const {darkTheme} = React.useContext(DarkThemeContext)
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type = {type}
      sx={{
        color: darkTheme ?  "#f3efeb" : "#656565",
        display: "block",
        bgcolor: darkTheme ? "#656565" : "#f3efeb" ,
        ":hover": {
          bgcolor: darkTheme ? "#f3efeb" : "#656565" ,
          color: darkTheme ?  "#656565" : "#f3efeb",
        },
      }}
    >
      {text}
    </Button>
  );
};

export { PrimaryButton };
