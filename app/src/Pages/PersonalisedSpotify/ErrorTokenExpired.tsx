import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { useMutationSpotifyPost } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";
import { SnackBar } from "../../Components/SnackBar";
import { LoadingCircle } from "../../Components/LoadingCircle";
import { PrimaryButton } from "../../Components/PrimaryButton";

const ErrorTokenExpired: React.FC = () => {
  const { t } = useTranslation("error");

  const {mutation, snackbar, setSnackbar} = useMutationSpotifyPost(apiEndpoints.spotifyTokenRequest)
  const refreshToken = () => {
    mutation.mutate()
  }

  return (
    <>
      <Container>
        <Typography variant="h1">{t("title")}</Typography>
        <Box marginTop={6}>
          <Typography variant="body1">{t("tokenExpiredDescription")}</Typography>
        </Box>
        <PrimaryButton onClick={refreshToken} text={t('refresh')} />
      </Container>

       <div>
       {mutation.isPending ? (<LoadingCircle />) :
         (
           <>
             {mutation.isError && (
               <div>An error occurred: {mutation.error.message}</div>
             )}
             {mutation.isSuccess &&
               <SnackBar
                 snackbarActive={snackbar}
                 setSnackbarActive={setSnackbar}
                 message={t('refreshed')}
               />}
           </>

         )}
     </div>
     </>
  );
};

const Container = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { ErrorTokenExpired };