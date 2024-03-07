import React from "react";
import { Box, Typography } from "@mui/material";
import { TopSongsList } from "./TopSongsList";
import { useTranslation } from "react-i18next";
import { LinkButton } from "../../Components/LinkButton";
import { routes } from "../../Constants/Routes/RoutesEndpoints";
import useTopSongsList from "../../Hooks/useTopSongsList";
import { styled } from '@mui/system';

const Music: React.FC = () => {
  const { t } = useTranslation("music");
  const { t: tyear } = useTranslation("numbersAndDates");
  const { dnbList2023, rockList2023 } = useTopSongsList()
  const [haveAccessToken, setHaveAccessToken] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkAccessToken = localStorage.getItem("access_token") ? true : false;
    setHaveAccessToken(checkAccessToken);
  }, []);

  return (
    <>
      {!haveAccessToken &&
        <Title>
          <Box marginTop={"5%"}>
            <Typography variant="body2" data-test-id={"unauthorised-spotify-description"}>
              <em>
                {t("authoriseSpotify")}
              </em>
            </Typography>
          </Box>
        </Title>
      }
      <Links>
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
      </Links>
      <PageParameters>
        <Title>
          <Typography variant="h1" data-test-id={"music-title"}>{`${t('manvir')} ${tyear("2023")}`}</Typography>
        </Title>
        <MainContainer>
          <ListContainer data-test-id={'dnb-title'}>
            <TopSongsList songUrlList={dnbList2023} title={t("dnb")} />
          </ListContainer>
          <ListContainer data-test-id={"rock-title"}>
            <TopSongsList
              songUrlList={rockList2023}
              title={t("rockMetal")}
            />
          </ListContainer>
        </MainContainer>
      </PageParameters>
    </>
  );
};

const PageParameters = styled('div')({
  width: "60%",
  marginLeft: "20%",
});
const Title = styled('div')({
  justifyContent: "center",
  display: "flex",
});

const MainContainer = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  '@media (max-width: 600px)': {
    flexDirection: 'column', // Apply for screens up to 600px (xs screens)
  },
});

const ListContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

const Links = styled('div')(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center',
  marginTop: theme.spacing(4)
}));

export { Music };
