import { Button } from "@mui/material";
import React from "react";

interface PrimaryButtonProps {
  onClick: () => void;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "white",
        display: "block",
        bgcolor: "#656565",
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

export { PrimaryButton };
