import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMixes from "../../Hooks/useMixes";
import { MixesList } from "./MixesList";
import { styled } from '@mui/system';

const Mixes = () => {
  const { t } = useTranslation("mixes");
  const { t: tdates } = useTranslation("numbersAndDates");

  const {mixes2022, mixes2023, mixes2024} = useMixes()

  return (
    <MainContainer>
      <Row>
        <Typography variant="h1">
          {t("mixes")}
        </Typography>
      </Row>
      <Typography variant="h3">{t("mixesDescription")}</Typography>
      <MixesList mixList={mixes2024} year={tdates('2024')} />
      <MixesList mixList={mixes2023} year={tdates('2023')} />
      <MixesList mixList={mixes2022} year={tdates('2022')} />
    </MainContainer>
  );
}
const Row = styled('div')({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  marginBottom: 4,
  justifyContent: "flex-start",
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const MainContainer = styled('div')({
  alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
});

export { Mixes };
