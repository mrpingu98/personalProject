import React, { ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import { NormalFunctionChild } from "./normalFunctionChild";
import { CallbackFunctionChild } from "./callbackChild";
import { ChildOne } from "./childOne";
import { HomeContext } from "./context";
import { AddProductPayload } from "../../Constants/Types/Product";
import { UseRefImageChild } from "./useRefImageChild";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const [counter, setCounter] = React.useState<number>(0);

  const [counterTwo, setCounterTwo] = React.useState<number>(0);

  const [counterThree, setCounterThree] = React.useState<number>(0);

  // React.useEffect(() => {
  //   console.log("no dependency array");
  // });

  // React.useEffect(() => {
  //   console.log("empty dependency array");
  // }, []);

  // React.useEffect(() => {
  //   console.log("counter dependency");
  // }, [counter]);

  // React.useEffect(() => {
  //   console.log("counter two dependency");
  // }, [counterTwo]);

  const refCounter = React.useRef(0);

  // const memoizedValue = React.useMemo(() => {
  //   const costlyCalculation = (5 * 85 * 96) / 64 + counter;
  //   console.log("memoized", costlyCalculation);
  //   return costlyCalculation;
  // }, [counter]);

  // const memoizedValueEmptyDependency = React.useMemo(() => {
  //   const costlyCalculation = (5 * 85 * 96) / 64 + counter;
  //   console.log("memoizedEmptyDependency", costlyCalculation);
  //   return costlyCalculation;
  // }, []);

  // const nonMemoizedValue = () => {
  //   const costlyCalculation = (5 * 85 * 96) / 64 + counter;
  //   console.log("nonMemoized", costlyCalculation);
  //   return costlyCalculation;
  // };

  // const callbackFunction = React.useCallback(() => {
  //   console.log("callback function invoked");
  // }, []);

  // const normalFunction = () => {
  //   console.log("normal function invoked");
  // };

  // React.useEffect(() => {
  //   console.log("normal function");
  // }, [normalFunction]);

  // React.useEffect(() => {
  //   console.log("callback function");
  // }, [callbackFunction]);

  const [contextValue, setContextValue] = React.useState("message passed using useContext"); //context passed to childthree component

  const countReducer = (count: number, action: { type: string }) => {
    switch (action.type) {
      case "increment":
        return count + 1;
      default:
        return count;
    }
  };

  const [count, countDispatch] = React.useReducer(countReducer, 10);
  //useReducer counter instead of using useEffect

  //an much more simplified version of using useReducer to add 1 to a counter
  // '_' is used to denote a a parameter in a function that is deliberately ignored
  //a reducer function expects state and action parameters - we don't need to do anything with the state in this example though 
  //so we use '_' to pass effectively an empty parameter through - it's only there to appease the function syntax 
  const [countTwo, countTwoDispatch] = React.useReducer((_: any, action: number) => action, 5)

  //initial value of 5 assigned to countTwo 
  //button below calls countTwoDispatch - which takes the current countTwo, and adds 1 to it
  //the reducer function expects two arguments, state and action
  //we don't need to use the state (countTwo) here, so pass an 'empty' parameter 
  //whatever is returned by dispatch becomes the second (action) parameter in the reducer function (the action object) 
  //our dispatch returns countTwo + 1 (hence why we set action as type number)
  //the reducer function then just returns the action parameter 
  //whatever the reducer returns is what the state will be updated to
  //so this now works exactly the saema s updating a counter using useState 


  const addProductReducer = (addproductPayload: AddProductPayload, action: {type: string, data: string}) => {
    switch(action.type){
      case 'name':
        return  {...addproductPayload, name: action.data}
      default:
        return {
          name: '',
          description: '',
          price: parseFloat('0'),
          imageUrl: ''
        }
    }
  }

  const [addproductPayload, dispatch] = React.useReducer(addProductReducer, {
    name: '',
    description: '',
    price: parseFloat('0'),
    imageUrl: ''
  } )

  // console.log(addproductPayload)

  //useReducer example of updating an object with text entered in a textfield


  //cleanup this file so its easy to see where the examples are 
  //add useref example for colourising an image 

  return (
    <HomeContext.Provider value={{contextValue, setContextValue}}>
      <MainContainer>
        <Typography variant="h1" data-test-id={"home-title"}>
          {t("welcome")}
        </Typography>
        <Box marginTop={"2%"}>
          <Typography variant="body1" data-test-id={"home-description"}>
            {t("welcomeMessage")}
          </Typography>
        </Box>
        <Button onClick={() => setCounter(counter + 1)}>counter {counter}</Button>
        <Button onClick={() => setCounterTwo(counterTwo + 1)}>
          counter two{counterTwo}
        </Button>
        <Button onClick={() => setCounterThree(counterThree + 1)}>
          counter three
        </Button>

        <ChildOne message="message passed down using props" />
        {/* <NormalFunctionChild normalFunction={normalFunction} />
        <CallbackFunctionChild callbackFunction={callbackFunction} /> */}
        <Button onClick={() => refCounter.current++}>Add 1 to ref</Button>
        <Button onClick={() => console.log(refCounter.current)}>
          console.log ref
        </Button>
        {/* <Typography>{memoizedValue}</Typography>
        <Typography>{nonMemoizedValue()}</Typography>
        <Typography>{memoizedValueEmptyDependency}</Typography>
        <Button onClick={() => countDispatch({ type: "increment" })}>useReducer{count}</Button>
        <Button onClick={() => countTwoDispatch(countTwo + 1)}>useReducer{countTwo}</Button>
        <TextField onChange={(e) => dispatch({type: 'name', data: (e.target.value)})} /> */}
        <UseRefImageChild url='https://www.rollingstone.com/wp-content/uploads/2023/03/LP.jpg?w=1581&h=1054&crop=1' />
        <UseRefImageChild url='https://www.rollingstone.com/wp-content/uploads/2023/03/LP.jpg?w=1581&h=1054&crop=1' />
        <UseRefImageChild url='https://www.rollingstone.com/wp-content/uploads/2023/03/LP.jpg?w=1581&h=1054&crop=1' />
        <UseRefImageChild url='https://www.rollingstone.com/wp-content/uploads/2023/03/LP.jpg?w=1581&h=1054&crop=1' />
        <UseRefImageChild url='https://www.rollingstone.com/wp-content/uploads/2023/03/LP.jpg?w=1581&h=1054&crop=1' />
      </MainContainer>
    </HomeContext.Provider>
  );
};

const MainContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { Home };
