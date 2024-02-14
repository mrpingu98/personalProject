import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { MixesList2022, MixesList2023, MixesList2024 } from "./mixesByYear";
import { MixesList } from "./MixesList";

const Mixes = () => {
  const styles = useStyles();
  const { t } = useTranslation("mixes");
  const { t: tdates } = useTranslation("numbersAndDates");

  const mixesList2023 = MixesList2023();
  const mixesList2022 = MixesList2022();
  const mixesList2024 = MixesList2024();

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.row} marginBottom={4}>
        <Typography variant="h1">
          {t("mixes")}
        </Typography>
      </Box>
      <Typography variant="h3">{t("mixesDescription")}</Typography>
      <MixesList mixList={mixesList2024} year={tdates('2024')} />
      <MixesList mixList={mixesList2023} year={tdates('2023')} />
      <MixesList mixList={mixesList2022} year={tdates('2022')} />
    </Box>
  );
}

const useStyles = makeStyles({
  row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  mainContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
});

export { Mixes };
