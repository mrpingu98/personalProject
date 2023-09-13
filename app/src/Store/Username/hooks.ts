import { useDispatch, useSelector } from "react-redux";
import { userNameActions } from "./state";
import { AppState } from "../rootReducer";
import React from "react";


interface UserNameHook {
    userName: string;
    updateUserName: (userNameInputted: string) => void 
}

// () : <T> - means a function that returns a value of type T
export const useUserName = (): UserNameHook => {
    const dispatch = useDispatch();
    const {userName} = useSelector((state: AppState) => state.userName)

    const updateUserName = React.useCallback((string: string) => {
        dispatch(userNameActions.updateUsername(string))
    }, [dispatch])

    return {
    userName: userName,
    updateUserName, 
    }
};


    //useSelector(selectorFunction)
    //selectorFunction(state => state.propertyName)
    //the 'state' parameter is directly referring to the App's redux state - it is not the same as putting 'x', or an arbitrary prop 
    //So it will automatically pick up the App's redux state, as long as its been setup correctly 
    //All we add in TS is the type of state to expect (earlier we defined the rootReducer, which is the state tree, as type AppState)
    //so that's the type to expect for the state 

    //the state tree is an object with property names - those property names are set == to slices we've created 
    //So this returns the property of userName from the state tree object, which is == userName slice 

    //so the userSelector function retruns the userName slice object - we then use destructuring to takle out what we need 
    //object destructuring allows you to extract properties of that object 
    //In this example, we extract the property 'username' from the userName slice, and this value is assigned to the variable 'username' to be used in this file 
    //long story short, when destructuring, you just put in the property name you want to extract, and you can then refer to this property from that object within your file 