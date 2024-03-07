import * as React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { TopSongsListItem } from "./TopSongsListItem";
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
      <Typography variant="h2" marginBottom={2}>
        {title}
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#f3efeb",
          position: "relative",
          overflow: "auto",
          maxHeight: 675,
          "& ul": { padding: 0 },
        }}
      >
        {songUrlList.map((x) => (
          <ListItem key={x}>
            <TopSongsListItem url={x} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
