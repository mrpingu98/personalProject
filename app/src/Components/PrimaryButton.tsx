import { Button } from "@mui/material";
import React from "react";

interface LinkButtonProps {
  onClick?: () => void;
  text?: string;
}

const PrimaryButton: React.FC<LinkButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "#f3efeb",
        display: "block",
        bgcolor:  "#656565",
        ":hover": {
          bgcolor:"#858585",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export { PrimaryButton };
