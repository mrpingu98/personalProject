import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { authorisationRequest } from "../../Store/SpotifyAPI/AuthorisationAndToken/authorisationRequest";
import { fetchTokenRequest } from "../../Store/SpotifyAPI/AuthorisationAndToken/fetchTokenRequest";
import { styled } from '@mui/system';
import { DarkThemeContext } from "../../Constants/Contexts";

export const MyProfile: React.FC = () => {
  const { t } = useTranslation("myProfile");
  const [haveAccessToken, setHaveAccessToken] = React.useState<boolean>(false);

  const fetchAuthorisation = React.useCallback(() => {
    authorisationRequest();
  }, []);

  React.useEffect(() => {
    fetchTokenRequest().then(() => {
      const checkAccessToken = localStorage.getItem("access_token")
        ? true
        : false;
      setHaveAccessToken(checkAccessToken);
    });
  }, []);

  const {darkTheme, toggle}= React.useContext(DarkThemeContext)

  return (
    <ListContainer>
      <Box marginBottom={4}>
        <Typography variant="h1" data-test-id={"myprofile-title"}>
          {t("myProfile")}
        </Typography>
      </Box>
      <Typography variant="h3" data-test-id={"myprofile-spotify-title"}>
        {t("spotifyAuthorisation")}
      </Typography>
      <Box marginBottom={4}>
        <Container>
          <Typography variant="body1">
            {haveAccessToken ? (
              <div data-test-id={"authorised-description"}>
                {t("haveAuthorised")}
              </div>
            ) : (
              <div data-test-id={"unauthorised-description"}>
                {t("spotifyDescription")}
              </div>
            )}
          </Typography>
          <Box marginLeft={2}>
            <PrimaryButton
              text={t("authorise")}
              onClick={fetchAuthorisation}
            />
          </Box>
        </Container>
      </Box>
      <Typography variant="h3" data-test-id={"myprofile-spotify-title"}>
        {t('theme')}
      </Typography>
      <Container>
        {darkTheme && (
          <>
            <Typography>{t('setTheme')}</Typography>
            <Box marginLeft={4}>
              <PrimaryButton text={t('lightTheme')} onClick={toggle} />
            </Box>
          </>
        )}
        {!darkTheme && (
          <>
            <Typography>{t('setTheme')}</Typography>
            <Box marginLeft={4}>
              <PrimaryButton text={t('darkTheme')} onClick={toggle} />
            </Box>
          </>
        )}
      </Container>
    </ListContainer>
  );
};

const Container = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: 2
});

const ListContainer = styled('div')({
  alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
});
