import React from "react";
import { Box } from "@mui/material";

interface TopSongsListItemProps {
  url: string;
}

const TopSongsListItem: React.FC<TopSongsListItemProps> = ({ url }) => {

  return (
    <Box width="40%">
      <iframe
        style = {{height: 152, border: 'none', borderRadius: '15px'}}
        src={url}
        title="Spotify Track"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

export { TopSongsListItem };
