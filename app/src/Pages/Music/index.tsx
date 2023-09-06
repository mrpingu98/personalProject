import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { TopDnb2023, TopRockMetal2023 } from "../../Constants/TopSongsLists";
import { TopSongsList } from "./TopSongsList";
import { useTranslation } from "react-i18next";

const Music: React.FC = () => {
  const styles = useStyles();
  const topDnb2023 = TopDnb2023();
  const topRockMetal2023 = TopRockMetal2023();
  const { t } = useTranslation("music");
  const{t:tyear} = useTranslation("numbersAndDates")

  return (
    <Box className={styles.pageParameters}>
      <Box className={styles.title}>
    <Typography variant="h1" color={"#7FFFD4"}>{tyear('2023')}</Typography>
    </Box>
    <Box className={styles.mainContainer}>
    <Box className={styles.listContainer}>
      <TopSongsList songUrlList={topDnb2023} title={t("dnb")} />
    </Box>
    <Box className={styles.listContainer}>
      <TopSongsList songUrlList={topRockMetal2023} title={t("rockMetal")} />
    </Box>
    </Box>
    </Box>
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  pageParameters: {
    width: '60%', 
    marginLeft: '20%',
  },
  title: {
    justifyContent: "center",
    display: "flex",
  },
  mainContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    padding: theme.spacing(4),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export { Music };
