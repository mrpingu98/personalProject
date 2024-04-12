import { Button } from "@mui/material";
import React from "react";
import { DarkThemeContext } from "../Constants/Contexts";

interface PrimaryButtonProps {
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text, disabled }) => {
  const {darkTheme} = React.useContext(DarkThemeContext)
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
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
