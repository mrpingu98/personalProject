import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { routes } from "../Constants/Routes/RoutesEndpoints";

const useNavBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("navbar");
  
    const handleNavbarNavigation = (page: string) => {
      if (page === t("Muzik")) {
        navigate(routes.music);
      } 
      if (page === t("Merch")) {
        navigate(routes.merchandise);
      }else {
        console.log(`Page URL not found for: ${page}`);
      }
    };

    const navigateMyProfile = React.useCallback(() => {
      navigate(routes.myProfile);
    }, [navigate]);
  
    const navigateHome = React.useCallback(() => {
      navigate(routes.home);
    }, [navigate]);

    return {handleNavbarNavigation, navigateMyProfile, navigateHome}
};

export default useNavBar;