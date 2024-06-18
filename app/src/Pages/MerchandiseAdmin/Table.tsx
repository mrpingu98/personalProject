import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { useQueryClient } from "@tanstack/react-query";
import { EditDialogInitialValues, ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { get } from '../../Store/apiStore';
import { apiEndpoints } from '../../Store/Endpoints';
import { useQueryGetProducts } from '../../Hooks/useQueryGet';


interface TableProps {
    setSelectedRowData: React.Dispatch<React.SetStateAction<EditDialogInitialValues>>,
}

const DataTable: React.FC<TableProps> = ({setSelectedRowData}) => {
    const queryClient = useQueryClient()
    const [rows, setRows] = React.useState<ProductTableRows[]>([])
    const [selectedRowId, setSelectedRowId] = React.useState<GridRowSelectionModel>()
    const apiRef = useGridApiRef();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', filterable: false, width: 70 },
        { field: 'product', headerName: 'Product', width: 300 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'price', headerName: 'Price', width: 300 },
        { field: 'imageUrl', headerName: 'Image Url', width: 300}
    ];

    const getProducts = async () => {
        try {
            const data = await get(apiEndpoints.products)
            return data
        }
        catch (error: any) {
            console.log(error)
        }}

        const { data } = useQueryGetProducts();

    React.useEffect(() => {
        const fetchProducts = async () => {
            const productsCache: Promise<ProductResponse[]> = queryClient.ensureQueryData({ queryKey: ['getProducts'], queryFn: getProducts })
            const response = await productsCache
            setRows(
                response.map(product => ({
                    id: product.id,
                    product: product.name,
                    description: product.description,
                    price: product.price,
                    imageUrl: product.imageUrl
                })))
        }
        fetchProducts()
    }, [data])
    //will need to check if a double api request is sent (the original invalidate query, and then this one)

    React.useEffect (() => {
        const row = apiRef.current.getRow(selectedRowId ? selectedRowId[0] : '')
        setSelectedRowData(row)
    },[selectedRowId])

    const hiddenFields = ['id'];
    const getTogglableColumns = (columns: GridColDef[]) => {
        return columns
          .filter((column) => !hiddenFields.includes(column.field))
          .map((column) => column.field);
      };
      //make sure to explain this in english to myself - this is for hidden columns



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