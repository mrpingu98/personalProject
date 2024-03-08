import React from "react";
import { Box, Typography } from "@mui/material";
import { spotifyUserTopTracks } from "../../Constants/Types/Spotify";
import { useTranslation } from "react-i18next";

interface TopTracksProps {
  userTopTracks: spotifyUserTopTracks | null;
}

const TopTracks: React.FC<TopTracksProps> = ({ userTopTracks }) => {
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

export { TopTracks };
