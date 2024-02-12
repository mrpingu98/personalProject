import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { spotifyUserTopArtist } from "../../../Types/Spotify";
import { useTranslation } from "react-i18next";

interface TopArtistsProps {
  userTopArtists: spotifyUserTopArtist | null;
}

const TopArtists: React.FC<TopArtistsProps> = ({ userTopArtists }) => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  return (
    <>
    <Typography variant="h4" marginTop={4}>{t("topArtists")}:</Typography>
    <Box marginTop={2} className={styles.row}>
      <Typography variant="body1">
        {userTopArtists?.name.join(", ")}
      </Typography>
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
});

export { TopArtists };