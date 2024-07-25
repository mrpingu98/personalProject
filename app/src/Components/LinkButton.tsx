import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkThemeContext } from "../Contexts/DarkThemeContext";

interface LinkButtonProps {
  text?: string;
  route: string;
  disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, route, disabled }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(route);
  };

  const {darkTheme} = React.useContext(DarkThemeContext)

  return (
    <Button
      onClick={onClickButton}
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

export { LinkButton };
