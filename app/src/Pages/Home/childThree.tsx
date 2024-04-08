import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { HomeContext } from "./context";

interface ChildThreeProps {
    message: string
  }
  
const ChildThree: React.FC<ChildThreeProps> = ({ message }) => {
    const value = useContext(HomeContext)
    console.log('child three rendered')
    return (
        <>
        <Typography>Child three + {message}</Typography>
        <Typography>{value}</Typography>
        </>
    );
}
export { ChildThree };