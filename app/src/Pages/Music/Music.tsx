import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import { TopDnb2023, TopRockMetal2023 } from "../../Constants/topSongsLists";
import { TopSongsList } from "./TopSongsList";
import { useTranslation } from "react-i18next";
import { LinkButton } from "../../Components/LinkButton";
import { routes } from "../../Constants/Routes";

const Music: React.FC = () => {
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
      {!haveAccessToken &&
        <Box marginTop={"5%"} className={styles.title}>
          <Typography variant="body2" data-test-id={"unauthorised-spotify-description"}>
            <em>
              {t("authoriseSpotify")}
            </em>
          </Typography>
        </Box>
      }
      <Box className={styles.links}>
        <LinkButton
          text={t("yourSpotify")}
          route={routes.personalisedSpotify}
          disabled={!haveAccessToken}
        />
        <Box marginLeft={2}>
          <LinkButton
            data-test-id={"Mixes-link-button"}
            text={t("mixes")}
            route={routes.mixes}
          />
        </Box>
      </Box>
      <Box className={styles.pageParameters}>
        <Box className={styles.title}>
          <Typography variant="h1" data-test-id={"music-title"}>{`${t('manvir')} ${tyear("2023")}`}</Typography>
        </Box>
        <Box className={styles.mainContainer}>
          <Box className={styles.listContainer} data-test-id={'dnb-title'}>
            <TopSongsList songUrlList={topDnb2023} title={t("dnb")} />
          </Box>
          <Box className={styles.listContainer} data-test-id={"rock-title"}>
            <TopSongsList
              songUrlList={topRockMetal2023}
              title={t("rockMetal")}
            />
          </Box>
        </Box>
      </Box>
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

export { Music };
