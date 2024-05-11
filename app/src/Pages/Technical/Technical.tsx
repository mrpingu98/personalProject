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