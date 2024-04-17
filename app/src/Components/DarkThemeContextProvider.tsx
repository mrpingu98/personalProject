import * as React from "react";
import { ReactNode } from "react";
import { DarkThemeContext } from "../Constants/Contexts";

interface DarkThemeContextProviderProps {
  children: ReactNode;
}

const DarkThemeContextProvider: React.FC<DarkThemeContextProviderProps> = ({children}) => {
  const [darkTheme, setDarkTheme] = React.useState<boolean>(false);
  const toggle = () => {
    setDarkTheme(!darkTheme);
  };
  const value = { darkTheme, toggle };

  //the above could be put in a custom hook, and then passed through
  //so as to keep seperation of concerns, handle this logic elsewhere
  //but for this simple example ok to keep logic here

  return (
    <div>
      <DarkThemeContext.Provider value={value}>
        {children}
      </DarkThemeContext.Provider>
    </div>
  );
};

export default DarkThemeContextProvider;
