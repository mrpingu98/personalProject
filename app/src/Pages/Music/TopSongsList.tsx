import React from "react";
import "../../App.css";
import { makeStyles } from "@mui/styles";
interface TopSongsListProps {
  url: string;
}

const TopSongsList: React.FC<TopSongsListProps> = ({ url }) => {
  const styles = useStyles();

  return (
    <div>
      <iframe
        className={styles.spotifyElement}
        src={url}
        title="Spotify Track"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

const useStyles = makeStyles({
  spotifyElement: {
    height: 152,
  },
});

export { TopSongsList };
