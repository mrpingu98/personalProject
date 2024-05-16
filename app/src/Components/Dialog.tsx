import React, { ReactNode } from 'react'
import Dialog from '@mui/material/Dialog';
import { Button, DialogContent, TextField, Typography } from '@mui/material';
import { UseMutationResult } from '@tanstack/react-query';
import { CustomError } from '../Constants/Types/ErrorHandling';
import { ErrorHandling } from './MutationErrorHandling';
import { DarkThemeContext } from '../Constants/Contexts';


interface Props {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    onClick: () => void,
    buttonText: string,
    mutation: UseMutationResult<any, CustomError, void, unknown>,
    successMessage?: string,
    dialogContent: ReactNode
}


const DialogComponent: React.FC<Props> = ({dialogContent}) => {
    const [open, setOpen] = React.useState<boolean>(false)
    const {darkTheme} = React.useContext(DarkThemeContext)

    return(
        <>
        <Dialog
           PaperProps={{sx: {width:'50%', maxHeight: 500,  bgcolor: darkTheme ? "#656565" : "#f3efeb" , color: darkTheme ?  "#f3efeb" : "#656565"}}}
           open = {open}
        >
                <DialogContent>
                    {dialogContent}
                </DialogContent>
        </Dialog >
        </>
    )
}

export {DialogComponent}