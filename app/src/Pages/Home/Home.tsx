import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("home");

  return (
    <Box className={styles.container}>
      <Box className={styles.column}>
        <Typography variant="h1" data-test-id={"home-title"}>{t("welcome")}</Typography>
        <Box marginTop={"5%"}>
          <Typography variant="body1" data-test-id={"home-description"}>{t("welcomeMessage")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  column: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export { Home };
