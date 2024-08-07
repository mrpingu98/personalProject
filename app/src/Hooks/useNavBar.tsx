import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { routes } from "../Constants/routes";

const useNavBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("navbar");
  
    const handleNavbarNavigation = (page: string) => {
      if (page === t("muzik")) {
        navigate(routes.music);
      } 
      if (page === t("merch")) {
        navigate(routes.merchandise);
      }
      if (page === t("technical")) {
        navigate(routes.technical);
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