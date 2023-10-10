import { Button } from "@mui/material";
import React from "react";

interface LinkButtonProps {
  onClick?: () => void;
  text?: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ onClick, text, href }) => {
  return (
    <Button
      onClick={onClick}
      href={href}
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
