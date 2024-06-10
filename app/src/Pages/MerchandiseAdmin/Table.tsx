import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useQueryClient } from "@tanstack/react-query";
import { ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { get } from '../../Store/apiStore';
import { apiEndpoints } from '../../Store/Endpoints';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '../../Components/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DataTable: React.FC = () => {
    const queryClient = useQueryClient()
    const [rows, setRows] = React.useState<ProductTableRows[]>([])

    const getProducts = async () => {
        try {
            const data = await get(apiEndpoints.products)
            return data
        }
        catch (error: any) {
            console.log(error)
        }}

    React.useEffect(() => {
        const fetchProducts = async () => {
            const productsCache: Promise<ProductResponse[]> = queryClient.ensureQueryData({ queryKey: ['getProducts'], queryFn: getProducts })
            const response = await productsCache
            setRows(
                response.map(product => ({
                    id: product.id,
                    product: product.name,
                    description: product.description,
                    price: product.price
                })))
            console.log('hit')
        }
        fetchProducts()
    }, [queryClient])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', filterable: false, width: 70 },
        { field: 'product', headerName: 'Product', width: 400 },
        { field: 'description', headerName: 'Description', width: 400 },
        { field: 'price', headerName: 'Price', width: 400 },
        { field: 'editDelete', headerName: 'Edit / Delete', filterable: false, width: 400, renderCell:() => {
            return (
            <>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <IconButton 
            icon={<EditIcon />}
            onClick={() => console.log('click')}
            />
            <IconButton 
            icon={<DeleteIcon />}
            onClick={() => console.log('click')}
            />
            </Box>
            </>)
        }},
    ];

    const hiddenFields = ['id'];
    const getTogglableColumns = (columns: GridColDef[]) => {
        return columns
          .filter((column) => !hiddenFields.includes(column.field))
          .map((column) => column.field);
      };

    return (
        <div style={{ height: 400, width: 'fit-content' }}>
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
                slotProps={{
                    columnsManagement: {
                      getTogglableColumns,
                    },
                  }}
                disableColumnSelector
                disableColumnMenu
                disableRowSelectionOnClick
                sx={{
                    "& .MuiDataGrid-row:hover": {
                      backgroundColor: "inherit"
                    }
                  }}
            />
        </div>
    );
}

export { DataTable }