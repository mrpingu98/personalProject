import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';

const ErrorInvalidToken: React.FC = () => {
  const { t } = useTranslation("error");

  return (
      <Container>
        <Typography variant="h1">{t("title")}</Typography>
        <Box marginTop={6}>
          <Typography variant="body1">{t("invalidTokenDescription")}</Typography>
        </Box>
      </Container>
  );
};

const Container = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { ErrorInvalidToken };