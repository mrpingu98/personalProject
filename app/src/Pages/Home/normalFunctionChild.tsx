import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface NormalFunctionChildProps {
    normalFunction: () => void
  }
  

const NormalFunctionChild: React.FC<NormalFunctionChildProps> = React.memo(({ normalFunction  }) => {
    console.log('normal child just rendered')
    return (
        <>
        <Button onClick={normalFunction}>Normal function child</Button>
        </>
    );
})
export { NormalFunctionChild };