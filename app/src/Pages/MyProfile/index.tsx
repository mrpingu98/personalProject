import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { authorisationRequest } from "../../Store/SpotifyAPI/authorisationRequest";
import { fetchTokenRequest } from "../../Store/SpotifyAPI/fetchTokenRequest";

export const MyProfile: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("myProfile");
  const [haveAccessToken, setHaveAccessToken] = React.useState<boolean>(false);

  const fetchAuthorisation = React.useCallback(() => {
    authorisationRequest();
  }, []);

  React.useEffect(() => {
    fetchTokenRequest().then(() => {
      const checkAccessToken = localStorage.getItem("access_token") ? true : false;
      setHaveAccessToken(checkAccessToken);
    });
  }, []);

  return (
    <Box className={styles.listContainer}>
        <Box marginBottom={4}>
        <Typography variant="h1">{t('myProfile')}</Typography>
        </Box>
      <Typography variant="h3">{t('spotifyAuthorisation')}</Typography>
      <Box className={styles.container} marginTop={2}>
        <Typography variant="body1">
            {haveAccessToken ?  t('haveAuthorised') :  t('spotifyDescription')}
        </Typography>
        <Box marginLeft={2}>
        <PrimaryButton
          text={t("authorise")}
          onClick={fetchAuthorisation}
          disabled={haveAccessToken}
        />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
});
