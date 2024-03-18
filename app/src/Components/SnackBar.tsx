import { Alert, IconButton, Snackbar } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

interface SnackBarProps {
    snackbarActive: boolean,
    setSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>,
    message: string
}

const SnackBar: React.FC<SnackBarProps> = ({ snackbarActive, setSnackbarActive, message }) => {
    const handleClose = () => {
        setSnackbarActive(false);
    };
    
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <Snackbar
            open={snackbarActive}
            autoHideDuration={6000}
            onClose={handleClose}
            action={action}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
        </Snackbar>
    )
}

export { SnackBar }