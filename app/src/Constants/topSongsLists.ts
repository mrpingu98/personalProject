import { useTranslation } from "react-i18next";

export function TopDnb2023 (): string[] {
    const { t } = useTranslation("spotifyEmbedLinks");
    const songList = [
        t("gyrofieldFemmeFatale"),
        t("imanuOfTwoMinds"),
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

export function TopRockMetal2023 (): string[] {
  const { t } = useTranslation("spotifyEmbedLinks");
  const songList = [
      t("linkinParkFightingMyself"),
      t('pvrisEvergreen'),
      t('bmthAmen'),
      t('enterShikariItHurts'),
      t('roloTomassiAlmostAlways'),
      t('superHeavenYoungestDaughter'),
      t('spiritboxTheVoid'),
      t('bmthWerewolf'),
      t('roloTomassiDrip'),
      t('pendulumHalo'),
      t('seeYouSpaceCowboyWithArmsThatBind'),
      t('roloTomassiAFloodOfLight'),
      t('spiritboxJaded'),
      t('pvrisDontwannaDoThisAnymore'),

    ];
  return songList
}