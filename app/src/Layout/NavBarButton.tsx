import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import { makeStyles } from "@mui/styles";
interface NavBarButtonProps {
  onClick: () => void;
  text: string;
  icon?: ReactNode;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ onClick, text, icon }) => {
  const styles = useStyles();
  return (
    <>
      {icon ? (
        <Button
          className={styles.button}
          onClick={onClick}
          sx={{
            my: 2,
            color: "white",
            bgcolor: "#858585",
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
          className={styles.button}
          onClick={onClick}
          sx={{
            my: 2,
            color: "white",
            bgcolor: "#858585",
            ":hover": {
              bgcolor: "#656565",
              color: "white",
            },
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
};

const useStyles = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
  },
});

export { NavBarButton };
