import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  withRefreshAccessToken,
  withSpotifyUserPersonalData,
  withSpotifyUserTopArtists,
  withSpotifyUserTopTracks,
  withSpotifyUserPlaylists,
  withSpotifyAllTimeUserTopTracks,
  withSpotifyAllTimeUserTopArtists,
} from "../../Store/SpotifyAPI/components";
import { compose } from "redux";
import { useSpotifyData } from "../../Store/SpotifyAPI/hooks";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
import { Playlists } from "./Playlists";
import { styled } from '@mui/system';

const PersonalisedSpotify = compose<React.FC>(
  withRefreshAccessToken(),
  withSpotifyUserPersonalData(),
  withSpotifyUserTopArtists(),
  withSpotifyUserTopTracks(),
  withSpotifyUserPlaylists(),
  withSpotifyAllTimeUserTopTracks(),
  withSpotifyAllTimeUserTopArtists()
)(() => {

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
    <MainContainer>
      <Row>
        <Typography variant="h1">
          {`${t("hello")} ${spotifyUserData?.name}`}
        </Typography>
        <Box marginLeft={4}>
          <img
            src={spotifyUserData?.image}
            alt="Profile"
            style = {{ height: 150, width: 150, borderRadius: "20%"}}
          />
        </Box>
      </Row>
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
    </MainContainer>
  );
});

const Row = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  marginBottom: 4,
  justifyContent: "flex-start",
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const MainContainer = styled('div')({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

export { PersonalisedSpotify };
