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
} from "../../../Store/SpotifyAPI/components";
import { compose } from "redux";
import { useSpotifyData } from "../../../Store/SpotifyAPI/hooks";
import { PrimaryButton } from "../../../Components/PrimaryButton";

const PersonalisedSpotify = compose<React.FC>(
  withRefreshAccessToken(),
  withSpotifyUserPersonalData(),
  withSpotifyUserTopArtists(),
  withSpotifyUserTopTracks(),
  withSpotifyUserPlaylists()
)(() => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  const { spotifyUserData, userTopArtists, userTopTracks, userPlaylists } = useSpotifyData();

  const accessToken = localStorage.getItem("access_token");
  const [data, setData] = React.useState<any>();

  const fetchPlaylistTracks = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/5aFyYYjQLeLBrZIJqlsVt5",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
    const returnedData = await response.json();
    setData(returnedData);
    return returnedData;
  };

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
      <Typography variant="h4" marginTop={6}>
        {t("topArtistsSixMonths")}:
      </Typography>
      <Box marginTop={2} className={styles.row}>
        <Typography variant="body1">
          {userTopArtists?.name.join(", ")}
        </Typography>
      </Box>
      <Typography variant="h4" marginTop={6}>
        {t("topTracksSixMonths")}:
      </Typography>
      <Box marginTop={2}>
        {userTopTracks?.map((x) => (
          <Box marginTop={0.5} key={x.artist}>
            <Typography>
              {x.artist}: {x.song}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box marginTop={6}>
        <Typography variant="h4">{t("recentPlaylists")}:</Typography>
        {userPlaylists?.map((x) => (
          <Box className={styles.row} marginTop={4} key={x.name}>
            <Box marginTop={0.5}>
              <Typography>{x.name}:</Typography>
            </Box>
            <Box marginLeft={5}>
              <img
                src={x.imageUrl}
                alt="No picture available"
                className={styles.playlistPic}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <PrimaryButton onClick={fetchPlaylistTracks} text={'Playlist'}/>
      </Box>
      {data && (
        <Box marginTop={2}>
          {data.tracks.items.map((x: any) => (
            <Box marginTop={0.5}>
              <Typography>
                {x.track.artists[0].name}: {x.track.name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
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
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: "20%",
  },
  playlistPic: {
    height: 200,
    width: 200,
    borderRadius: "20%",
  },
});

export { PersonalisedSpotify };
