import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { useQueryClient } from "@tanstack/react-query";
import { EditDialogInitialValues, ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { useQueryGetProducts } from '../../Hooks/useQueryGet';
import { getProducts } from '../../Constants/QueryFunctions/QueryFunctions';
import { ProductTableContext } from '../../Constants/Contexts';

const ProductTable: React.FC = () => {
    const queryClient = useQueryClient()
    const [rows, setRows] = React.useState<ProductTableRows[]>([])
    const [selectedRowId, setSelectedRowId] = React.useState<GridRowSelectionModel>()
    const apiRef = useGridApiRef();
    const { data } = useQueryGetProducts();
    const{setIsRowSelected, setSelectedRowData} = React.useContext(ProductTableContext)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', filterable: false, width: 70 },
        { field: 'name', headerName: 'Product', width: 300 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'price', headerName: 'Price', width: 300 },
        { field: 'imageUrl', headerName: 'Image Url', width: 300}
    ];

    React.useEffect(() => {
        const fetchProducts = async () => {
            const productsCache: Promise<ProductResponse[]> = queryClient.ensureQueryData({ queryKey: ['getProducts'], queryFn: getProducts })
            const response = await productsCache
            setRows(
                response.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    imageUrl: product.imageUrl
                })))
        }
        fetchProducts()
    }, [data])

    //query will become invalidated when put request goes through. The invalidation will cause the query to be refetched instantly. And as such, the cached data changes 
    //when this data changes, the useEffect runs again - it ensures that the getProduct query has been run (will fetch its cache, if no cache exists will run the query)
    //in this case a cache exists, so fetches this cache - we then reset the values for the rows in the table 
    //why do we need the esnure bit - incase someone refreshed the page while on the merchandise page 

    React.useEffect (() => {
        const row = apiRef.current.getRow(selectedRowId ? selectedRowId[0] : '')
        setSelectedRowData(row)
    },[selectedRowId, rows])
    //added in rows as a depedency - so when you edit a product, if you reoopen the dialog, it will have updated the selectedRowData

    return (
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                columnVisibilityModel={{id: false}}
                slots={{toolbar: GridToolbar}}
                disableColumnSelector
                disableColumnMenu
                disableMultipleRowSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setSelectedRowId(newRowSelectionModel)
                    setIsRowSelected(newRowSelectionModel)
                  }}
                rowSelectionModel={selectedRowId}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    "& .MuiDataGrid-row:hover": {
                      backgroundColor: "inherit"
                    },
                    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
                        outline: "none"},
                  }}
                  apiRef={apiRef}
            />         
        </div>
    );
}

export { ProductTable }