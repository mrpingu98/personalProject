import { useTranslation } from "react-i18next";

const useTopSongsList = () => {
  const { t } = useTranslation("spotifyEmbedLinks");
    const dnbList2023 = [
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
        t('skylarkCobalt'),
        t('visagesMKULTRA'),
        t('koherentStabTrilogy'),
        t('buunshinMakeMoney'),
      ];

      const rockList2023 = [
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
        t('deftonesDriveFarAwayAcoustic'),
      ];

    return {dnbList2023, rockList2023}
};

export default useTopSongsList;