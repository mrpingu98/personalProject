import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../Constants/Routes";

interface LinkButtonProps {
  text?: string;
  route: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, route }) => {

  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(route);
  }

  return (
    <Button
      onClick={onClickButton}
      sx={{
        color: "#656565",
        display: "block",
        bgcolor: "#f3efeb",
        ":hover": {
          bgcolor: "#858585",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export { LinkButton };
