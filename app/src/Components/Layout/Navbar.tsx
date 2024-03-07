import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { NavBarButton } from "./NavBarButton";
import useNavBar from "../../Hooks/useNavBar";

const NavBar: React.FC = () => {
  const { t } = useTranslation("navbar");
  const pages = [t("Muzik"), t("Merch")];
  const {handleNavbarNavigation, navigateHome, navigateMyProfile} = useNavBar()

  return (
    <AppBar sx={{ backgroundColor: "#858585", height: 65, position: 'fixed' }}>
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
        <Box sx={{  display: "flex", justifyContent: "flex-end"}}>
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

export default NavBar;
