import React, { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface ContextType {
    contextValue: string,
     setContextValue: Dispatch<SetStateAction<string>>
    }

export const HomeContext = createContext<ContextType>({contextValue: 'test message', setContextValue: () => {'s'}})
//is there a way to create a ocntext without having to pass default values?
//because when providing the context, you have to pass in a value prop - so it wil always have a value given to it? 