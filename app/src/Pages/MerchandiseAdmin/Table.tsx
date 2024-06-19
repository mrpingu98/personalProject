import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { useQueryClient } from "@tanstack/react-query";
import { EditDialogInitialValues, ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { useQueryGetProducts } from '../../Hooks/useQueryGet';
import { getProducts } from '../../Constants/QueryFunctions/QueryFunctions';


interface TableProps {
    setSelectedRowData: React.Dispatch<React.SetStateAction<EditDialogInitialValues>>,
}

const DataTable: React.FC<TableProps> = ({setSelectedRowData}) => {
    const queryClient = useQueryClient()
    const [rows, setRows] = React.useState<ProductTableRows[]>([])
    const [selectedRowId, setSelectedRowId] = React.useState<GridRowSelectionModel>()
    const apiRef = useGridApiRef();
    const { data } = useQueryGetProducts();

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

    React.useEffect (() => {
        const row = apiRef.current.getRow(selectedRowId ? selectedRowId[0] : '')
        setSelectedRowData(row)
    },[selectedRowId])


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

export { DataTable }