
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { DarkThemeContext } from "../Contexts/DarkThemeContext";

const LoadingCircle: React.FC = () => {
    const {darkTheme} = React.useContext(DarkThemeContext)

    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '30%',
                left: '50%'
            }} >
                <CircularProgress sx={{ color:  darkTheme ? "#f3efeb": "#656565"  }} />
            </Box>
        </>
    );
};

export { LoadingCircle };