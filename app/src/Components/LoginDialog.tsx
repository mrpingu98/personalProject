import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, DialogContent, TextField, Typography } from '@mui/material';
import { useMutationPostLogin } from '../Hooks/useMutations';
import { apiEndpoints } from '../Store/Endpoints';
import { ErrorHandling } from './MutationErrorHandling';
import { PrimaryButton } from './PrimaryButton';
import { DarkThemeContext } from '../Contexts/DarkThemeContext';
import { useTranslation } from 'react-i18next';


interface Props {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
}


const LoginDialog: React.FC<Props> = ({ open, setOpen }) => {
    const {t} = useTranslation('login')
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const { mutation } = useMutationPostLogin({ url: apiEndpoints.login, payload: { email: email, password: password } })
    const { darkTheme } = React.useContext(DarkThemeContext)
    return (
        <>
            <Dialog
            open={open}
            PaperProps={{ sx: { width: '50%', maxHeight: 500, bgcolor: darkTheme ? "#656565" : "#f3efeb", color: darkTheme ? "#f3efeb" : "#656565" } }}
            >
                <DialogContent>
                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                        <Typography variant='h2'>{t('login')}</Typography>
                        <Typography marginTop={3}>{t('email')}</Typography>
                        <TextField onChange={(e) => setEmail(e.target.value)} />
                        <Typography marginTop={3}>{t('password')}</Typography>
                        <TextField onChange={(e) => setPassword(e.target.value)} />
                        <Box display={'flex'} alignItems={'center'} flexDirection={'row'} marginTop={3}>
                            <PrimaryButton onClick={() => setOpen(false)} text={t('close')} />
                            <Box marginLeft={5}>
                                <PrimaryButton onClick={() => mutation.mutate()} text={t('login')} />
                            </Box>
                        </Box>
                        {mutation.isError &&
                            <ErrorHandling mutation={mutation} />}
                        {mutation.isSuccess &&
                            <Typography marginTop={3}>{t('success')}</Typography>}

                    </Box>
                </DialogContent>
            </Dialog>

        </>
    )
}

//will have to override colour of texfields based on light / dark theme 

export { LoginDialog }