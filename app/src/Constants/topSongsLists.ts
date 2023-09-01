import { useTranslation } from "react-i18next";



export function TopDnb2023 (): string[] {
    const { t } = useTranslation("spotifyEmbedLinks");
    const songList = [
        t("imanuOfTwoMinds"),
        t("gyrofieldFemmeFatale"),
        t("yaanoHadEnough"),
        t('signalHowWillIKnow'),
        t('halogenixPFTD'),
        t('greyCodeShoyu'),
        t('wingzSorrow'),
        t('operateGrudges'),
        t('alibiForged'),
        t('gyrofieldVerveSweet'),
        t('imanuKotaro'),
        t('theUpbeatsRealm'),
        t('skylarkLoveHate'),
        t('gyrofieldFallenInDeep'),
        t('imanuSkinToSkin'),
        t('skrillexSupersonic'),
        t('skylarkCobalt')
      ];
    return songList
}