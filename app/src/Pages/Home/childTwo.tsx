import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ChildThree } from "./childThree";

interface ChildTwoProps {
    message: string
  }
  

const ChildTwo: React.FC<ChildTwoProps> = ({ message }) => {
    console.log('child two rendered')
    return (
        <>
        <Typography>Child two</Typography>
        <ChildThree message={message} />
        </>
    );
}
export { ChildTwo };