import React from "react";
import "../../App.css";
import { TopSongsList } from "./TopSongsList";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { TopDnb2023 } from "../../Constants/topSongsLists";

const Music: React.FC = () => {
  const styles = useStyles();
  const topDnb2023 = TopDnb2023();

  return (

    <Box className={styles.listContainer}>
      <Box width='40%'>
      {topDnb2023.map(song => (
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
