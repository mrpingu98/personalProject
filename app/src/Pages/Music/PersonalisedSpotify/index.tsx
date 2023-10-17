import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { getProfile } from "../../../Store/SpotifyAPI/getProfile";
import { refreshAccessToken } from "../../../Store/SpotifyAPI/refreshAccessToken";
import { AuthorisationRequest } from "../../../Store/SpotifyAPI/authorisationRequest";
import { useTranslation } from "react-i18next";

const PersonalisedSpotify: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");
  const hasUserAuthorised = localStorage.getItem('access_token')

  //this is just an initial setup for me to messa around with - will need to be updated and styled properly +
  //refresh api calls to happen automatically 

  const initalAuthorisaton = React.useCallback(() => {
    AuthorisationRequest();
  }, []);

  const getUserProfile = React.useCallback(() => {
    getProfile();
  }, []);

  const refreshToken = React.useCallback(() => {
    refreshAccessToken();
  }, []);

  //only works in prod - comment out and use buttons below for dev
  // React.useEffect (() => {
  //   if (hasUserAuthorised){
  //     refreshAccessToken()
  //   }
  // },[hasUserAuthorised])
  


  return (
    <Box className={styles.pageParameters}>
      {hasUserAuthorised  ?
       <>
       <Button onClick={getUserProfile}>{t("getProfile")}</Button>
       <Button onClick={refreshToken}>{t("refreshToken")}</Button>
       </>
       :
      <>
      <Button onClick={initalAuthorisaton}>{t("initialAuthorisation")}</Button>
      </>
      
}

  
    </Box>
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  pageParameters: {
    width: "80%",
    marginLeft: "10%",
  },
  title: {
    justifyContent: "center",
    display: "flex",
  },
  mainContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    padding: theme.spacing(4),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  links: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { PersonalisedSpotify };
  function getUserSpotifyData() {
    throw new Error("Function not implemented.");
  }

