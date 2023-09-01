import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { TopDnb2023 } from "../../Constants/TopSongsLists";
import { TopSongsList } from "./TopSongsList";
import { useTranslation } from "react-i18next";

const Music: React.FC = () => {
  const styles = useStyles();
  const topDnb2023 = TopDnb2023();
  const { t } = useTranslation("music");

  return (
    <Box className={styles.listContainer}>
      <TopSongsList songUrlList={topDnb2023} title={t("topDnb2023")} />
    </Box>
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  listContainer: {
    padding: theme.spacing(4),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export { Music };
