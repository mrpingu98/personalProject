import React from 'react'
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Technical: React.FC = () => {
    const {t} = useTranslation("technical")

    return(
        <>       
        <Title>
            <Typography variant="h3">{t('mainTitle')}</Typography>
        </Title>
        <Description>
            <Typography variant='body1' marginTop={4}>{t('mainDescriptionOne')}</Typography>
            <Typography variant='body1' marginTop={4}>{t('mainDescriptionTwo')}</Typography>
            <Typography variant='body1' marginTop={4}>{t('mainDescriptionThree')}</Typography>
            <Typography variant='body1' marginTop={4}>{t('mainDescriptionFour')}</Typography>
        </Description>
        <Title>
            <Typography variant="h3" marginTop={8}>{t('setupTitle')}</Typography>
        </Title>
        <Description>
            <ul>
                <li>
                    <Typography variant="body1">{t('setupDescriptionOne')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('setupDescriptionTwo')}</Typography>
                </li>
                <li>
                    <Box flexDirection="row" display = "flex">
                    <Typography variant="body1" marginTop={2}>{t('frontEndRepo')}<a href={t('frontEndRepoUrl')} target='_blank'>{t('frontEndRepoUrl')}</a></Typography>
                    </Box>
                </li>
                <li>
                    <Box flexDirection="row" display = "flex">
                    <Typography variant="body1" marginTop={2}>{t('backEndRepo')}<a href={t('backEndRepoUrl')} target='_blank'>{t('backEndRepoUrl')}</a></Typography>
                    </Box>
                </li>
            </ul>
        </Description>
        <Title>
            <Typography variant="h3" marginTop={8}>{t('pagesTitle')}</Typography>
        </Title>
        <Description>
            <ul>
                <li>
                    <Typography variant="body1">{t('muzikPage')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('yourSpotify')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('myProfile')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('merch')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('admin')}</Typography>
                </li>
            </ul>
        </Description>
        <Title>
            <Typography variant="h3" marginTop={8}>{t('frontEndTitle')}</Typography>
        </Title>
        <Description>
            <ul>
                <li>
                    <Typography variant="body1">{t('frontEndDescriptionOne')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionTwo')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionThree')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionFour')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionFive')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionSix')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('frontEndDescriptionSeven')}</Typography>
                </li>
            </ul>
        </Description>
        <Title>
            <Typography variant="h3" marginTop={8}>{t('backEndTitle')}</Typography>
        </Title>
        <Description>
            <ul>
                <li>
                    <Typography variant="body1">{t('backEndDescriptionOne')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionTwo')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionThree')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionFour')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionFive')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionSix')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionSeven')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionEight')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionNine')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('backEndDescriptionTen')}</Typography>
                </li>
            </ul>
        </Description>
        <Title>
            <Typography variant="h3" marginTop={8}>{t('azureTitle')}</Typography>
        </Title>
        <Description>
            <ul>
                <li>
                    <Typography variant="body1">{t('azureDescriptionOne')}</Typography>
                </li>
                <li>
                    <Typography variant="body1" marginTop={2}>{t('azureDescriptionTwo')}</Typography>
                </li>
            </ul>
        </Description>
        

        </>
    )
}

const Description = styled('div')({
    alignItems: "flex-start"
  });
  
  const Title = styled('div')({
    alignItems: "center",
      display: "flex",
      flexDirection: "column",
  });

export {Technical}