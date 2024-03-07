import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { NavBarButton } from "./NavBarButton";
import useNavBar from "../../Hooks/useNavBar";

const NavBar: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("navbar");
  const pages = [t("Muzik")];
  const {handleNavbarNavigation, navigateHome, navigateMyProfile} = useNavBar()

  return (
    <AppBar className={styles.navBar} sx={{ backgroundColor: "#858585" }}>
      <Toolbar disableGutters sx={{ml: 2, mr:2}}>
        <NavBarButton onClick={navigateHome} text={t("home")} />
        <Box sx={{ flexGrow: 1, display: "flex"}}>
          {pages.map((page) => (
            <NavBarButton
              key={page}
              onClick={() => handleNavbarNavigation(page)}
              text={page}
            />
          ))}
        </Box>
        <Box className={styles.userName}>
          <NavBarButton
            onClick={navigateMyProfile}
            text={t("myProfile")}
            icon={<AccountCircleIcon />}
          />
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
