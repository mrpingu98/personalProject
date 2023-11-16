import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getSpotifyUserProfile } from "../../../Store/SpotifyAPI/getSpotifyUserProfile";
import { refreshAccessToken } from "../../../Store/SpotifyAPI/refreshAccessToken";
import { useTranslation } from "react-i18next";
import {
  withRefreshAccessToken,
  withSpotifyUserPersonalData,
} from "../../../Store/SpotifyAPI/components";
import { compose } from "redux";
import { fetchPersonalisedSpotifyData } from "../../../Store/SpotifyAPI/fetchPersonalisedSpotifyData";
import { PrimaryButton } from "../../../Components/PrimaryButton";
import { useSpotifyData } from "../../../Store/SpotifyAPI/hooks";

const PersonalisedSpotify = compose<React.FC>(
  withRefreshAccessToken(),
  withSpotifyUserPersonalData()
)(() => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  const getUserProfile = React.useCallback(() => {
    getSpotifyUserProfile();
  }, []);

  const refreshToken = React.useCallback(() => {
    refreshAccessToken();
  }, []);

  const { spotifyUserData } = useSpotifyData();

  // only works in prod - comment out and use buttons below for dev
  // React.useEffect (() => {
  //   if (hasUserAuthorised){
  //     fetchPersonalisedSpotifyData()
  //   }
  // },[hasUserAuthorised])

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.row} marginBottom={4}>
        <Typography variant="h1">
          {`${t("hello")} ${spotifyUserData?.name}`}
        </Typography>
        <Box marginLeft={4}>
          <img
            src={spotifyUserData?.image}
            alt="Profile"
            height={100}
            width={100}
          />
        </Box>
      </Box>
      <Typography variant="h3">{t("welcomeMessage")}</Typography>
      <Box marginTop={4} className={styles.row}>
        <Typography variant="body1">{`${t("followers")} ${spotifyUserData?.followers}`}</Typography>
      </Box>
    </Box>
  );
});

const useStyles = makeStyles({
  row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  mainContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 100,
    width: 100,
  },
});

export { PersonalisedSpotify };
