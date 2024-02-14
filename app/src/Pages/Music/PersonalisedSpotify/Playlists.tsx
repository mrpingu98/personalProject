import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { spotifyUserPlaylists, spotifyUserTopArtist } from "../../../Constants/Types/Spotify";
import { useTranslation } from "react-i18next";

interface PlaylistsProps {
  playlists: spotifyUserPlaylists | null;
}

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  return (
    <>
     <Box marginTop={6}>
        <Typography variant="h4">{t("recentPlaylists")}:</Typography>
        {playlists?.map((x) => (
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
    </>
  );
};

const useStyles = makeStyles({
    row: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        '@media (max-width: 600px)': {
          flexDirection: 'column',
        },
      },
    playlistPic: {
        height: 200,
        width: 200,
        borderRadius: "20%",
      },
});

export { Playlists };