import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useUserName } from "../Store/Username/hooks";
import { useTranslation } from "react-i18next";
import { NavBarButton } from "./NavBarButton";
import { routes } from "../Constants/Routes";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const styles = useStyles();
  const { userName } = useUserName();
  const { t } = useTranslation("navbar");

  const pages = [{title: t("Muzik"), route: routes.music}, {title: t("Merch"), route: routes.merchandise}];

  const navigateMyProfile = React.useCallback(() => {
    navigate(routes.myProfile);
  }, [navigate]);

  const navigateHome = React.useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  return (
    <AppBar className={styles.navBar} sx={{ backgroundColor: "#858585" }}>
      <Toolbar disableGutters sx={{ml: 2, mr:2}}>
        <NavBarButton onClick={navigateHome} text={t("home")} />
        <Box sx={{ flexGrow: 1, display: "flex"}}>
          {pages.map((page) => (
            <NavBarButton
              key={page.title}
              onClick={() => navigate(page.route)}
              text={page.title}
            />
          ))}
        </Box>
        <Box className={styles.userName}>
          <NavBarButton
            onClick={navigateMyProfile}
            text={t("myProfile")}
            icon={<AccountCircleIcon />}
          />
          <Typography>{userName}</Typography>
        </Box>
      </Toolbar>
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
  }
});
export default NavBar;
