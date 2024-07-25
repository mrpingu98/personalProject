import { GridRowSelectionModel } from "@mui/x-data-grid"
import { ReactNode, createContext } from "react"
import { ProductTableRows } from "../Constants/Types/Product"
import React from "react"


interface MerchandiseAdminContextProps {
    isRowSelected: GridRowSelectionModel | undefined,
    setIsRowSelected: React.Dispatch<React.SetStateAction<GridRowSelectionModel | undefined>>,
    selectedRowData: ProductTableRows,
    setSelectedRowData: React.Dispatch<React.SetStateAction<ProductTableRows>>
}

const initialValues = {
    id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
}

export const MerchandiseAdminContext = createContext<MerchandiseAdminContextProps>({isRowSelected: [], setIsRowSelected: () => undefined, selectedRowData: initialValues, setSelectedRowData: () => {}})




interface MerchandiseAdminContextProviderProps {
    children: ReactNode;
  }
  
  const MerchandiseAdminContextProvider: React.FC<MerchandiseAdminContextProviderProps> = ({children}) => {
    const [isRowSelected, setIsRowSelected] = React.useState<GridRowSelectionModel>();
    const [selectedRowData, setSelectedRowData] = React.useState<any>()
    const value = { isRowSelected, setIsRowSelected, selectedRowData, setSelectedRowData };
  
    return (
      <div>
        <MerchandiseAdminContext.Provider value={value}>
          {children}
        </MerchandiseAdminContext.Provider>
      </div>
    );
  };
  
  export default MerchandiseAdminContextProvider;


  //this context is used to pass through props from the ProductTable component, to the edit dialog component within merchandise admin 