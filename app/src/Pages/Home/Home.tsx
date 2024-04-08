import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { NormalFunctionChild } from "./normalFunctionChild";
import { CallbackFunctionChild } from "./callbackChild";
import { ChildOne } from "./childOne";
import { HomeContext } from "./context";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const [counter, setCounter] = React.useState<number>(0)

  const [counterTwo, setCounterTwo] = React.useState<number>(0)

  const [counterThree, setCounterThree] = React.useState<number>(0)

React.useEffect(() => {
    console.log('no dependency array')
  })

  React.useEffect(() => {
    console.log('empty dependency array')
  }, [])

  React.useEffect(() => {
    console.log('counter dependency')
  },[counter])

  React.useEffect(() => {
    console.log('counter two dependency')
  },[counterTwo])

  const refCounter = React.useRef(0)

  const memoizedValue = React.useMemo(() => {
    const costlyCalculation = (5*85*96/64) + counter
    console.log('memoized', costlyCalculation)
    return costlyCalculation
  },[counter])

  const memoizedValueEmptyDependency = React.useMemo(() => {
    const costlyCalculation = (5*85*96/64) + counter
    console.log('memoizedEmptyDependency', costlyCalculation)
    return costlyCalculation
  },[])

  const nonMemoizedValue = () => {
    const costlyCalculation = (5*85*96/64) + counter
    console.log('nonMemoized', costlyCalculation)
    return costlyCalculation
  }

  const callbackFunction = React.useCallback(() => {
    console.log('callback function invoked')
}, [])

const normalFunction = () => {
  console.log('normal function invoked')
}

React.useEffect(() => {
    console.log('normal function')
  }, [normalFunction])

  React.useEffect(() => {
    console.log('callback function')
  }, [callbackFunction])

const contextValue = 'message passed using useContext'
  
  return (
    <HomeContext.Provider value={contextValue}>
    <MainContainer>
        <Typography variant="h1" data-test-id={"home-title"}>{t("welcome")}</Typography>
        <Box marginTop={"2%"}>
          <Typography variant="body1" data-test-id={"home-description"}>{t("welcomeMessage")}</Typography>
        </Box>
        <Button onClick={() => setCounter(counter + 1)}>counter</Button>
        <Button onClick={() => setCounterTwo(counterTwo + 1)}>counter two</Button>
        <Button onClick={() => setCounterThree(counterThree + 1)}>counter three</Button>
       
        <ChildOne message="message passed down using props" /> 
        <NormalFunctionChild normalFunction={normalFunction} />
        <CallbackFunctionChild callbackFunction={callbackFunction}/>
        <Button onClick={() => refCounter.current++}>Add 1 to ref</Button>
        <Button onClick={() => console.log(refCounter.current)}>console.log ref</Button>
        <Typography>{memoizedValue}</Typography>
        <Typography>{nonMemoizedValue()}</Typography>
        <Typography>{memoizedValueEmptyDependency}</Typography>
            </MainContainer>
            </HomeContext.Provider>
  );
};

const MainContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { Home };


