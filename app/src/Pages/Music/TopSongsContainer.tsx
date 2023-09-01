import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

interface TopSongsContainerProps {
  url: string;
}

const TopSongsContainer: React.FC<TopSongsContainerProps> = ({ url }) => {
  const styles = useStyles();

  return (
    <Box width="40%">
      <iframe
        className={styles.spotifyElement}
        src={url}
        title="Spotify Track"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

const useStyles = makeStyles({
  spotifyElement: {
    height: 152,
    borderRadius: '15px',
  },
});

export { TopSongsContainer };
