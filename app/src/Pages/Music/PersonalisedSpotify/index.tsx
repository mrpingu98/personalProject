import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import {
  withRefreshAccessToken,
  withSpotifyUserPersonalData,
  withSpotifyUserTopArtists,
  withSpotifyUserTopTracks,
  withSpotifyUserPlaylists,
  withSpotifyAllTimeUserTopTracks,
  withSpotifyAllTimeUserTopArtists,
} from "../../../Store/SpotifyAPI/components";
import { compose } from "redux";
import { useSpotifyData } from "../../../Store/SpotifyAPI/hooks";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
import { Playlists } from "./Playlists";

const PersonalisedSpotify = compose<React.FC>(
  withRefreshAccessToken(),
  withSpotifyUserPersonalData(),
  withSpotifyUserTopArtists(),
  withSpotifyUserTopTracks(),
  withSpotifyUserPlaylists(),
  withSpotifyAllTimeUserTopTracks(),
  withSpotifyAllTimeUserTopArtists()
)(() => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  const {
    spotifyUserData,
    userTopArtists,
    userTopTracks,
    userPlaylists,
    allTimeUserTopTracks,
    allTimeUserTopArtists,
  } = useSpotifyData();

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
            className={styles.profilePic}
          />
        </Box>
      </Box>
      <Typography variant="h3">{t("welcomeMessage")}</Typography>
      <Typography variant="h1" marginTop={6}>
        {t("allTime")}
      </Typography>
      <TopArtists userTopArtists={allTimeUserTopArtists} />
      <TopTracks userTopTracks={allTimeUserTopTracks} />
      <Typography variant="h1" marginTop={6}>
        {t("sixMonths")}
      </Typography>
      <TopArtists userTopArtists={userTopArtists} />
      <TopTracks userTopTracks={userTopTracks} />
      <Playlists playlists={userPlaylists} />
    </Box>
  );
});

const useStyles = makeStyles({
  row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  mainContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: "20%",
  },
});

export { PersonalisedSpotify };
