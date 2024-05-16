import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { useMutationSpotifyPost } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const { mutation } = useMutationSpotifyPost(apiEndpoints.spotifyTokenRequest)

React.useEffect(() => {
  const checkToken = localStorage.getItem("access_token") ? true : false
  if (checkToken) {
    mutation.mutate()
  }
},[])

  return (
    <MainContainer>
      <Typography variant="h1" data-test-id={"home-title"}>{t("welcome")}</Typography>
      <Box marginTop={"2%"}>
        <Typography variant="body1" data-test-id={"home-description"}>{t("welcomeMessage")}</Typography>
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { Home };
