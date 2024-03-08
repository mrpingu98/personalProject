import React from "react";
import { Box, Typography } from "@mui/material";
import { spotifyUserPlaylists } from "../../Constants/Types/Spotify";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';

interface PlaylistsProps {
  playlists: spotifyUserPlaylists | null;
}

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  const { t } = useTranslation("personalisedSpotify");

  return (
    <>
     <Box marginTop={6}>
        <Typography variant="h4">{t("recentPlaylists")}:</Typography>
        {playlists?.map((playlist) => (
          <Row key={playlist.name}>
            <Box marginTop={0.5}>
              <Typography>{playlist.name}:</Typography>
            </Box>
            <Box marginLeft={5}>
              <img
                src={playlist.imageUrl}
                alt="No picture available"
                style = {{ height: 200, width: 200, borderRadius: "20%"}}
              />
            </Box>
          </Row>
        ))}
      </Box>
    </>
  );
};

const Row = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  marginTop: 4,
  justifyContent: "flex-start",
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

export { Playlists };