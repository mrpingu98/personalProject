import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

const Error: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("error");

  return (
    <Box className={styles.container}>
      <Box className={styles.column}>
        <Typography variant="h1">{t("title")}</Typography>
        <Box marginTop={"5%"}>
          <Typography variant="body1">{t("description")}</Typography>
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

export { Error };
