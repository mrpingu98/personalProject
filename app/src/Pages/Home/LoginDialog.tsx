import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, DialogContent, TextField, Typography } from '@mui/material';
import { useMutationPostLogin } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { ErrorHandling } from '../../Components/MutationErrorHandling';
import { PrimaryButton } from '../../Components/PrimaryButton';
import { DarkThemeContext } from '../../Constants/Contexts';


interface Props {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
}


const LoginDialog: React.FC<Props> = ({open, setOpen}) => {

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const {mutation} = useMutationPostLogin({url: apiEndpoints.login, payload: {email: email, password: password}})
    const {darkTheme} = React.useContext(DarkThemeContext)
    return(
        <>
        <Dialog
        PaperProps={{sx: {width:'50%', maxHeight: 500,  bgcolor: darkTheme ? "#656565" : "#f3efeb" , color: darkTheme ?  "#f3efeb" : "#656565"}}}
        open = {open}
        
        >
<DialogContent>
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant='h2'>Login</Typography>
            <Typography marginTop={3}>Email</Typography>
    <TextField onChange={(e) => setEmail(e.target.value)}/>
    <Typography marginTop={3}>Password</Typography>
    <TextField onChange={(e) => setPassword(e.target.value)}/>
         <Box  display={'flex'} alignItems={'center'} flexDirection={'row'} marginTop={3}>
            <PrimaryButton onClick={() => setOpen(false)}  text='Close'/>
            <Box marginLeft={5}>
            <PrimaryButton onClick={() => mutation.mutate()} text='Login' />
            </Box>
        </Box>
            {mutation.isError &&
         <ErrorHandling mutation={mutation} />}
         {mutation.isSuccess &&  
                <Typography marginTop={3}>Logged in successfully</Typography>}

</Box>
</DialogContent>
        </Dialog>
  
        </>
    )
}

//make dialog component 
//then make login dialo content component, and pass in dialog component to it 


//will have to override colour of texfields based on light / dark theme 

export {LoginDialog}