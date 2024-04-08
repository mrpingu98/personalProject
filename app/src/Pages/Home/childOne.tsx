import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ChildTwo } from "./childTwo";

interface ChildOneProps {
    message: string
  }
  

const ChildOne: React.FC<ChildOneProps> = ({ message }) => {
    console.log('child one rendered')
    return (
        <>
        <Typography>Child one </Typography>
        <ChildTwo message={message}/>
        </>
    );
}
export { ChildOne };