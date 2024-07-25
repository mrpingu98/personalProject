import React from "react";
import { ReactNode, createContext } from "react";

interface DarkThemeContextProps {
    darkTheme: boolean,
    toggle: () => void
}

export const DarkThemeContext = createContext<DarkThemeContextProps>({darkTheme: false, toggle: () => true})



interface DarkThemeContextProviderProps {
    children: ReactNode;
  }

  const DarkThemeContextProvider: React.FC<DarkThemeContextProviderProps> = ({children}) => {
    const [darkTheme, setDarkTheme] = React.useState<boolean>(false);
    const toggle = () => {
      setDarkTheme(!darkTheme);
    };
    const value = { darkTheme, toggle };
  
    return (
      <div>
        <DarkThemeContext.Provider value={value}>
          {children}
        </DarkThemeContext.Provider>
      </div>
    );
  };
  
  export default DarkThemeContextProvider;