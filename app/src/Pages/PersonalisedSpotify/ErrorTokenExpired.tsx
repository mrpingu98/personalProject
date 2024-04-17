import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { useMutationSpotifyPost } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";

const ErrorTokenExpired: React.FC = () => {
  const { t } = useTranslation("error");

  const {mutation} = useMutationSpotifyPost(apiEndpoints.spotifyTokenRequest)

  return (
      <Container>
        <Typography variant="h1">{t("title")}</Typography>
        <Box marginTop={6}>
          <Typography variant="body1">{t("description")}</Typography>
        </Box>
        <Typography>Click the below button to refresh the connection to Spotify!</Typography>
        <Button onClick={() => mutation.mutate()}>Refresh</Button>
      </Container>
  );
};

const Container = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { ErrorTokenExpired };