
import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingCircle: React.FC = () => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '30%',
                left: '50%'
            }} >
                <CircularProgress sx={{ color: "#858585" }} />
            </Box>
        </>
    );
};

export { LoadingCircle };