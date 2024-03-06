import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { TopDnb2023, TopRockMetal2023 } from "../../Constants/topSongsLists";
import { useTranslation } from "react-i18next";

const Merchandise: React.FC = () => {
  const styles = useStyles();
  const topDnb2023 = TopDnb2023();
  const topRockMetal2023 = TopRockMetal2023();
  const { t } = useTranslation("music");
  const { t: tyear } = useTranslation("numbersAndDates");
  const [haveAccessToken, setHaveAccessToken] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkAccessToken = localStorage.getItem("access_token") ? true : false;
    setHaveAccessToken(checkAccessToken);
  }, []);

  return (
   <>
   <Typography>test</Typography>
   </>
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  pageParameters: {
    width: "60%",
    marginLeft: "20%",
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
    '@media (max-width: 600px)': {
      flexDirection: 'column', // Apply for screens up to 600px (xs screens)
    },
  },
  listContainer: {
    padding: theme.spacing(4),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  links: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  },
});

export { Merchandise };