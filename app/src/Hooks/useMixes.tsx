import { useTranslation } from "react-i18next";
import { mixes } from "../Constants/Types/Mixes";

const useMixes = () => {
  const { t } = useTranslation("mixes");

  const mixes2022: mixes = {
    December: [{ name: t("dark7"), link: t("dark7Link") }],
    October: [{ name: t("dark6"), link: t("dark6Link") }],
    September: [{ name: t("dark5"), link: t("dark5Link") }],
    July: [
      { name: t("skatty1"), link: t("skatty1Link") },
      { name: t("dark4"), link: t("dark4Link") },
      { name: t("hospitality2"), link: t("hospitality2Link") },
    ],
    May: [{ name: t("dark3"), link: t("dark3Link") }],
    April: [{ name: t("dark2"), link: t("dark2Link") }],
  };

  const mixes2023: mixes = {
    December: [{ name: t("dark13Dnb"), link: t("dark13DnbLink") }],
    August: [{ name: t("dark11"), link: t("dark11Link") }],
    July: [{ name: t("dark10"), link: t("dark10Link") }],
    March: [{ name: t("dark9"), link: t("dark9Link") }],
    January: [{ name: t("dark8"), link: t("dark8Link") }],
  };

  const mixes2024: mixes = {
    January: [{ name: t("dark13140"), link: t("dark13140Link") }],
  };

  return { mixes2022, mixes2023, mixes2024 };
};

export default useMixes;
