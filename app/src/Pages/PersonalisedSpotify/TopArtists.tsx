import React from "react";
import { Typography } from "@mui/material";
import { spotifyUserTopArtist } from "../../Constants/Types/Spotify";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';

interface TopArtistsProps {
  userTopArtists: spotifyUserTopArtist | null;
}

const TopArtists: React.FC<TopArtistsProps> = ({ userTopArtists }) => {
  const { t } = useTranslation("personalisedSpotify");

  return (
    <>
    <Typography variant="h4" marginTop={4}>{t("topArtists")}:</Typography>
    <Row>
      <Typography variant="body1">
        {userTopArtists?.name.join(", ")}
      </Typography>
    </Row>
    </>
  );
};

const Row = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  marginTop: 2,
  justifyContent: "flex-start",
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

export { TopArtists };