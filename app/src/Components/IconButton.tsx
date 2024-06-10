import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import { DarkThemeContext } from "../Constants/Contexts";

interface IconButtonProps {
  icon: ReactNode,
  onClick: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  const {darkTheme} = React.useContext(DarkThemeContext)
  return (
    <Button
      onClick={onClick}
      sx={{
        color: darkTheme ?  "#f3efeb" : "#656565",
        bgcolor: darkTheme ? "#656565" : "#f3efeb" ,
        ":hover": {
          bgcolor: darkTheme ? "#f3efeb" : "#656565" ,
          color: darkTheme ?  "#656565" : "#f3efeb",
        },
      }}
    >
      {icon}
    </Button>
  );
};

export { IconButton };