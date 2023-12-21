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
      const checkAccessToken = localStorage.getItem("access_token")
        ? true
        : false;
      setHaveAccessToken(checkAccessToken);
    });
  }, []);

  return (
    <Box className={styles.listContainer}>
      <Box marginBottom={4}>
        <Typography variant="h1" data-test-id={"myprofile-title"}>
          {t("myProfile")}
        </Typography>
      </Box>
      <Typography variant="h3" data-test-id={"myprofile-spotify-title"}>
        {t("spotifyAuthorisation")}
      </Typography>
      <Box className={styles.container} marginTop={2}>
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
            disabled={haveAccessToken}
          />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  listContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
});
