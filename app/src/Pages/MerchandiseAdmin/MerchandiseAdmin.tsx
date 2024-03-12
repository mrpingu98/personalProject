import { Button, TextField, Typography } from "@mui/material"
import { useQueryDelete, useQueryPost, useQueryPut } from "../../Hooks/useMutations";
import { AddProductPayload, DeleteProductPayload, EditProductPayload } from "../../Constants/Types/Product";
import React from "react";

const MerchandiseAdmin: React.FC = () => {
    const [deleteProductPayload, setDeleteProductPayload] = React.useState<DeleteProductPayload>({name: ''});
    const [addProductPayload, setAddProductPayload] = React.useState<AddProductPayload>({
      name: '',
      description: '',
      price: parseFloat('0'),
      imageUrl: ''})
    
    const [editProductPayload, setEditProductPayload] = React.useState<EditProductPayload>({
      name: '',
      newName:'',
      description: '',
      price: parseFloat('0'),
      imageUrl: ''
    })

    const {mutation: mutationAddProduct} = useQueryPost('https://localhost:7119/product', addProductPayload);

    const {mutation: mutationEditProduct} = useQueryPut('https://localhost:7119/product', editProductPayload)

    const {mutation: mutationDeleteProduct} = useQueryDelete('https://localhost:7119/product', deleteProductPayload)

    return (
        <>
        <Typography variant='h1'>Add Product</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, name: e.target.value})}/>
        <div>Description</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, description: e.target.value})}/>
        <div>Price</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, price: parseFloat(e.target.value)})}/>
        <div>ImageUrl</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, imageUrl: e.target.value})}/>
        <Button onClick={() => mutationAddProduct.mutate()}>Add Product</Button>
        <div>
        {mutationAddProduct.isPending ? (
          'Adding todo...'
        ) : (
          <>
            {mutationAddProduct.isError ? (
              <div>An error occurred: {mutationAddProduct.error.message}</div>
            ) : null}

            {mutationAddProduct.isSuccess ? <div>Todo added!</div> : null}
          </>
        )}
      </div>

      <Typography variant='h1' marginTop='5%'>Edit Product</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, name: e.target.value})}/>
        <div>New Name</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, newName: e.target.value})}/>
        <div>Description</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, description: e.target.value})}/>
        <div>Price</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, price: parseFloat(e.target.value)})}/>
        <div>ImageUrl</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, imageUrl: e.target.value})}/>
        <Button onClick={() => mutationEditProduct.mutate()}>Edit Product</Button>
        <div>
        {mutationEditProduct.isPending ? (
          'Adding todo...'
        ) : (
          <>
            {mutationEditProduct.isError ? (
              <div>An error occurred: {mutationEditProduct.error.message}</div>
            ) : null}

            {mutationEditProduct.isSuccess ? <div>Todo added!</div> : null}
          </>
        )}
      </div>

      <Typography variant='h1' marginTop='5%'>Delete Product</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setDeleteProductPayload({... deleteProductPayload, name: e.target.value})}/>
        <Button onClick={() => mutationDeleteProduct.mutate()}>Delete Product</Button>
        <div>
        {mutationDeleteProduct.isPending ? (
          'Adding todo...'
        ) : (
          <>
            {mutationDeleteProduct.isError ? (
              <div>An error occurred: {mutationDeleteProduct.error.message}</div>
            ) : null}

            {mutationDeleteProduct.isSuccess ? <div>Todo added!</div> : null}
          </>
        )}
      </div>
        </>
    )
}

export {MerchandiseAdmin}