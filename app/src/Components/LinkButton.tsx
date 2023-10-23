import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    <Button
      onClick={onClickButton}
      disabled={disabled}
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
