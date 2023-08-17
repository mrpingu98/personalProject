import React from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { TopSongsList } from "./TopSongsList";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";

const Music: React.FC = () => {
  const { t } = useTranslation("spotifyEmbedLinks");
  const styles = useStyles();

  const songList2023 = [
    t("imanuOfTwoMinds"),
    t("gyrofieldFemmeFatale"),
    t("yaanoHadEnough"),
    t('signalHowWillIKnow')
  ];

  return (

    <Box className={styles.listContainer}>
      <Box width='40%'>
      {songList2023.map(song => (
      <TopSongsList url={song} />
      ))}
      </Box>
    </Box>
  
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  listContainer: {
    padding: theme.spacing(4),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
});

export { Music };
