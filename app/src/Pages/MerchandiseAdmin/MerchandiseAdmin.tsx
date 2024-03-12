import { Button, TextField, Typography } from "@mui/material"
import { useQueryDelete, useQueryPost, useQueryPut } from "../../Hooks/useMutations";
import { AddProductPayload, DeleteProductPayload, EditProductPayload } from "../../Constants/Types/Product";
import React from "react";
import { useTranslation } from "react-i18next";

const MerchandiseAdmin: React.FC = () => {
    const {t} = useTranslation('merchandiseAdmin')
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
        <Typography variant='h1'>{t('addProduct')}</Typography>
        <div>{t('name')}</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, name: e.target.value})}/>
        <div>{t('description')}</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, description: e.target.value})}/>
        <div>{t('price')}</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, price: parseFloat(e.target.value)})}/>
        <div>{t('imageUrl')}</div>
        <TextField onChange={(e) => setAddProductPayload({...addProductPayload, imageUrl: e.target.value})}/>
        <Button onClick={() => mutationAddProduct.mutate()}>{t('addProduct')}</Button>
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

      <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>
        <div>{t('name')}</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, name: e.target.value})}/>
        <div>{t('newName')}</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, newName: e.target.value})}/>
        <div>{t('description')}</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, description: e.target.value})}/>
        <div>{t('price')}</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, price: parseFloat(e.target.value)})}/>
        <div>{t('imageUrl')}</div>
        <TextField onChange={(e) => setEditProductPayload({...editProductPayload, imageUrl: e.target.value})}/>
        <Button onClick={() => mutationEditProduct.mutate()}>{t('editProduct')}</Button>
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

      <Typography variant='h1' marginTop='5%'>{t('deleteProduct')}</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setDeleteProductPayload({... deleteProductPayload, name: e.target.value})}/>
        <Button onClick={() => mutationDeleteProduct.mutate()}>{t('deleteProduct')}</Button>
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