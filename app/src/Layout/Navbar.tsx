import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useUserName } from "../Store/Username/hooks";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const styles = useStyles();
  const { userName } = useUserName();
  const { t } = useTranslation("navbar");

  const pages = [t("Muzik"), t("Merch")];

  const handleNavbarNavigation = (page: string) => {
    if (page === t('Muzik')) {
      navigate("/music");
    } else {
      console.log(`Page URL not found for: ${page}`);
    }
  };

  return (
    <AppBar className={styles.navBar} sx={{ backgroundColor: "#858585" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MRPINGU98
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavbarNavigation(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box className={styles.userName}>
            <AccountCircleIcon />
            <Typography marginLeft={2}>{userName}</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles({
  navBar: {
    height: 65,
    position: "fixed",
  },
  userName: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
export default NavBar;
