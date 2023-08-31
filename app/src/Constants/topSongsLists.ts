import { useTranslation } from "react-i18next";



export function TopDnb2023 (): string[] {
    const { t } = useTranslation("spotifyEmbedLinks");
    const songList2023 = [
        t("imanuOfTwoMinds"),
        t("gyrofieldFemmeFatale"),
        t("yaanoHadEnough"),
        t('signalHowWillIKnow')
      ];
    return songList2023
}