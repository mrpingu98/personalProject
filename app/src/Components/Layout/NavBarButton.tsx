import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface NavBarButtonProps {
  onClick: () => void;
  text: string;
  icon?: ReactNode;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ onClick, text, icon }) => {
  return (
    <>
      {icon ? (
        <Button
          onClick={onClick}
          sx={{
            my: 2,
            color: "white",
            bgcolor: "#858585",
            display: 'flex',
            alignItems:'center',
            ":hover": {
              bgcolor: "#656565",
              color: "white",
            },
          }}
        >
          {text} &nbsp; {icon}
        </Button>
      ) : (
        <Button
          onClick={onClick}
          sx={{
            my: 2,
            color: "white",
            display: 'flex',
            alignItems:'center',
            bgcolor: "#858585",
            ":hover": {
              bgcolor: "#656565",
              color: "white"
            },
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export { NavBarButton };
