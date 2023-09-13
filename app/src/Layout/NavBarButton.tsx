import { Button } from "@mui/material";
import React from "react";

interface NavBarButtonProps {
  onClick: () => void;
  text: string;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        my: 2,
        color: "white",
        display: "block",
        bgcolor: "#858585",
        ":hover": {
          bgcolor: "#656565",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export { NavBarButton };
