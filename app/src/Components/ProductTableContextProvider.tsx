import * as React from "react";
import { ReactNode } from "react";
import { ProductTableContext } from "../Constants/Contexts";
import { GridRowSelectionModel } from "@mui/x-data-grid";

interface ProductTableContextProviderProps {
  children: ReactNode;
}

const ProductTableContextProvider: React.FC<ProductTableContextProviderProps> = ({children}) => {
  const [isRowSelected, setIsRowSelected] = React.useState<GridRowSelectionModel>();
  const [selectedRowData, setSelectedRowData] = React.useState<any>()
  const value = { isRowSelected, setIsRowSelected, selectedRowData, setSelectedRowData };

  return (
    <div>
      <ProductTableContext.Provider value={value}>
        {children}
      </ProductTableContext.Provider>
    </div>
  );
};

export default ProductTableContextProvider;
