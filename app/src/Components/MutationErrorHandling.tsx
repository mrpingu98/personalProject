import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import React from 'react';
import { CustomError } from '../Constants/Types/ErrorHandling';
import { Typography } from '@mui/material';

interface ErrorProps {
    mutation: UseMutationResult<AxiosResponse<any, any>, CustomError, void, unknown>
}

const ErrorHandling: React.FC<ErrorProps> = React.memo(({ mutation }) => {
    console.log(mutation)
    const [networkError, setNetworkError] = React.useState<boolean>(false)
    const [customError, setCustomError] = React.useState<string>('')
    const [generalError, setGeneralError] = React.useState<boolean>(false)
    const [unauthorisedError, setUnauthorisedError] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (mutation.isError) {
            if (mutation.error.status == 500) {
                setNetworkError(true)
                setCustomError('')
                setGeneralError(false)
                setUnauthorisedError(false)
            }
            else if (mutation.error.status == 401) {
                setUnauthorisedError(true)
                setNetworkError(false)
                setCustomError('')
                setGeneralError(false)
            }
            else if (typeof mutation.error.customErrorMessage === 'string' && mutation.error.customErrorMessage != "") {
                setCustomError(mutation.error.customErrorMessage)
                setNetworkError(false)
                setGeneralError(false)
                setUnauthorisedError(false)
                //if multiple errors occur, the data becomes an object, with errors[] inside it 
            }
            else {
                setGeneralError(true)
                setCustomError('')
                setNetworkError(false)
                setUnauthorisedError(false)
            }
        }
    }, [mutation])

    return (
        <>
            {networkError &&
                <Typography color={'red'} marginTop={4}>An error occurred during the request. Please try again later.</Typography>
            }
            {customError &&
                <Typography color={'red'} marginTop={4}>{customError}</Typography>
            }
            {generalError &&
                <Typography color={'red'} marginTop={4}>An error occurred. Please try again later</Typography>
            }
            {unauthorisedError && 
                <Typography color={'red'} marginTop={4}>You are not authorised for this process.</Typography>
            }
        </>
    )
})

export { ErrorHandling }