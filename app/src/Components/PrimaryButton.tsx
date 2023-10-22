import { Button } from "@mui/material";
import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        color: "white",
        display: "block",
        bgcolor: "#858585",
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
