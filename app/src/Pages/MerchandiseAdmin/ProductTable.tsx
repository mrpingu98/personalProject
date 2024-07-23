import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { useQueryGetProducts } from '../../Hooks/useQueryGet';
import { ProductTableContext } from '../../Constants/Contexts';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductTable: React.FC = () => {
    const [rows, setRows] = React.useState<ProductTableRows[]>([])
    const [selectedRowId, setSelectedRowId] = React.useState<GridRowSelectionModel>()
    const {t} = useTranslation('merchandiseAdmin')
    const apiRef = useGridApiRef();
    const { data, error } = useQueryGetProducts();
    const{setIsRowSelected, setSelectedRowData} = React.useContext(ProductTableContext)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', filterable: false, width: 70 },
        { field: 'name', headerName: 'Product', width: 300 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'price', headerName: 'Price', width: 300 },
        { field: 'imageUrl', headerName: 'Image Url', width: 200}
    ];

    React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await data
                if(response){
                    setRows(response.map((product: ProductResponse) => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        imageUrl: product.imageUrl
                    })))    
                }
                else{
                    setRows([])
                }}
        fetchProducts()
    }, [data])

    React.useEffect (() => {
        const row = apiRef.current.getRow(selectedRowId ? selectedRowId[0] : '')
        setSelectedRowData(row)
    },[selectedRowId, rows])
    //added in rows as a depedency - so when you edit a product, if you reoopen the dialog, it will have updated the selectedRowData

    return (
        <div style={{ height: 400 }}>
            {error && <Typography variant='h4' color={'red'} marginTop={4} marginBottom={4}>{t('tableError')}</Typography>}
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