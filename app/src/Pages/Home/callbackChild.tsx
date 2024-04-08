import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface CallbackFunctionChildProps {
    callbackFunction: () => void
  }
  

const CallbackFunctionChild: React.FC<CallbackFunctionChildProps> = React.memo(({ callbackFunction  }) => {
    console.log('callback child just rendered')
    return (
        <>
        <Button onClick={callbackFunction}>callback function child</Button>
        </>
    );
})
export { CallbackFunctionChild };