import { GridRowSelectionModel } from "@mui/x-data-grid";
import { createContext } from "react";

interface DarkThemeContextProps {
    darkTheme: boolean,
    toggle: () => void
}

export const DarkThemeContext = createContext<DarkThemeContextProps>({darkTheme: false, toggle: () => true})

interface ProductTableContextProps {
    isRowSelected: GridRowSelectionModel | undefined,
    setIsRowSelected: React.Dispatch<React.SetStateAction<GridRowSelectionModel | undefined>>
}

export const ProductTableContext = createContext<ProductTableContextProps>({isRowSelected: [], setIsRowSelected: () => undefined})