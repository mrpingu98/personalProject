import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
import { Playlists } from "./Playlists";
import { styled } from '@mui/system';
import { LoadingCircle } from "../../Components/LoadingCircle";
import { useQuerySpotifyUserPlaylists, useQuerySpotifyUserProfile, useQuerySpotifyUserTopArtists, useQuerySpotifyUserTopTracks } from "../../Hooks/useQueryGet";
import { apiEndpoints } from "../../Store/Endpoints";
import { Error } from "../Error/Error";

const PersonalisedSpotify: React.FC = () => {

  const { t } = useTranslation("personalisedSpotify");
  const {t:tkey} = useTranslation("queryKeys")

  const {data: userProfile, error: userProfileError, isPending: userProfilePending} = useQuerySpotifyUserProfile({url: apiEndpoints.spotifyUserProfile, key: tkey('spotifyUserProfile'), enabled: true})
  const {data: userPlaylists, error: userPlaylistsError, isPending: userPlaylistsPending} = useQuerySpotifyUserPlaylists({url: apiEndpoints.spotifyUserPlaylists, key: tkey('spotifyUserPlaylists'), enabled: !!userProfile })
  const {data: userTopArtists, error: userTopArtistsError, isPending: userTopArtistsPending} = useQuerySpotifyUserTopArtists({url: apiEndpoints.spotifyUserTopArtists, key: tkey('spotifyUserTopArtists'), enabled: !!userPlaylists})
  const {data: userTopTracks, error: userTopTracksError, isPending: userTopTracksPending} = useQuerySpotifyUserTopTracks({url: apiEndpoints.spotifyUserTopTracks, key: tkey('spotifyUserTopTracks'), enabled: !!userTopArtists})
  const {data: userAllTimeTopArtists, error: userAllTimeTopArtistsError, isPending: userAllTimeTopArtistsPending} = useQuerySpotifyUserTopArtists({url: apiEndpoints.spotifyUserAllTimeTopArtists, key: tkey('spotifyUserAllTimeTopArtists'), enabled: !!userTopTracks })
  const {data: userAllTimeTopTracks, error: userAllTimeTopTracksError, isPending: userAllTimeTopTracksPending} = useQuerySpotifyUserTopTracks({url: apiEndpoints.spotifyUserAllTimeTopTracks, key: tkey('spotifyUserAllTimeTopTracks'), enabled: !!userAllTimeTopArtists})
  if (userProfilePending || userPlaylistsPending || userTopArtistsPending || userTopTracksPending || userAllTimeTopArtistsPending || userAllTimeTopTracksPending) return <LoadingCircle />
  if (userProfileError || userPlaylistsError || userTopArtistsError || userTopTracksError || userAllTimeTopArtistsError || userAllTimeTopTracksError) return <Error />

  return (
    <MainContainer>
      <Row>
        <Typography variant="h1">
          {`${t("hello")} ${userProfile?.name}`}
        </Typography>
        <Box marginLeft={4}>
          <img
            src={userProfile?.image}
            alt="Profile"
            style={{ height: 150, width: 150, borderRadius: "20%" }}
          />
        </Box>
      </Row>
      <Typography variant="h3">{t("welcomeMessage")}</Typography>
      <Typography variant="h1" marginTop={6}>
        {t("allTime")}
      </Typography>
      <TopArtists userTopArtists={userAllTimeTopArtists} />
      <TopTracks userTopTracks={userAllTimeTopTracks} />
      <Typography variant="h1" marginTop={6}>
        {t("sixMonths")}
      </Typography>
      <TopArtists userTopArtists={userTopArtists} />
      <TopTracks userTopTracks={userTopTracks} />
      <Playlists playlists={userPlaylists} />
    </MainContainer>
  );
};

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
