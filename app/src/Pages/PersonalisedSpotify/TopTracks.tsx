import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { spotifyUserTopTracks } from "../../Constants/Types/Spotify";
import { useTranslation } from "react-i18next";

interface TopTracksProps {
  userTopTracks: spotifyUserTopTracks | null;
}

const TopTracks: React.FC<TopTracksProps> = ({ userTopTracks }) => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  return (
    <>
      <Typography variant="h4" marginTop={4}>
        {t("topTracks")}:
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
    </>
  );
};

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
});

export { TopTracks };
