import * as React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { TopSongsContainer } from "./TopSongsContainer";
import { Typography } from "@mui/material";

interface TopSongsListProps {
  songUrlList: string[];
  title: string;
}

export const TopSongsList: React.FC<TopSongsListProps> = ({
  songUrlList,
  title,
}) => {
  return (
    <>
      <Typography variant="h2" marginBottom={2} color={"#7FFFD4"}>
        {title}
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#282c34",
          position: "relative",
          overflow: "auto",
          maxHeight: 675,
          "& ul": { padding: 0 },
        }}
      >
        {songUrlList.map((x) => (
          <ListItem>
            <TopSongsContainer url={x} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
