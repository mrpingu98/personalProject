import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQueryClient } from "@tanstack/react-query";
import { ProductResponse, ProductTableRows } from '../../Constants/Types/Product';
import { get } from '../../Store/apiStore';
import { apiEndpoints } from '../../Store/Endpoints';

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
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'product', headerName: 'Product', width: 400 },
        { field: 'description', headerName: 'Description', width: 400 },
        { field: 'price', headerName: 'Price', width: 400 },
    ];

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
                checkboxSelection
            />
        </div>
    );
}

export { DataTable }