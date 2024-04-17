import { createContext } from "react";

interface DarkThemeContextProps {
    darkTheme: boolean,
    toggle: () => void
}

export const DarkThemeContext = createContext<DarkThemeContextProps>({darkTheme: false, toggle: () => true})