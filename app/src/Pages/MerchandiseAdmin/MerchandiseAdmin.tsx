import React from "react";
import { Button, TextField, Typography } from "@mui/material"
import { useMutationDelete, useMutationPost, useMutationPut } from "../../Hooks/useMutations";
import { AddProductPayload, DeleteProductPayload, EditProductPayload } from "../../Constants/Types/Product";
import { useTranslation } from "react-i18next";
import { apiEndpoints } from "../../Store/Endpoints";
import { LoadingCircle } from "../../Components/LoadingCircle";
import { SnackBar } from "../../Components/SnackBar";


const MerchandiseAdmin: React.FC = () => {
  const { t } = useTranslation('merchandiseAdmin')
  const [deleteProductPayload, setDeleteProductPayload] = React.useState<DeleteProductPayload>({ name: '' });
  const [addProductPayload, setAddProductPayload] = React.useState<AddProductPayload>({
    name: '',
    description: '',
    price: parseFloat('0'),
    imageUrl: ''
  })

  const [editProductPayload, setEditProductPayload] = React.useState<EditProductPayload>({
    name: '',
    newName: '',
    description: '',
    price: parseFloat('0'),
    imageUrl: ''
  })

  const { mutation: mutationAddProduct, snackbar: addProductSnackbar, setSnackbar: setAddProductSnackbar } = useMutationPost(apiEndpoints.products, addProductPayload, 'getProducts');

  const { mutation: mutationEditProduct, snackbar: editProductSnackbar, setSnackbar: setEditProductSnackbar } = useMutationPut(apiEndpoints.products, editProductPayload, 'getProducts')

  const { mutation: mutationDeleteProduct, snackbar: deleteProductSnackbar, setSnackbar: setDeleteProductSnackbar } = useMutationDelete(apiEndpoints.products, deleteProductPayload, 'getProducts')

  return (
    <>
      <Typography variant='h1'>{t('addProduct')}</Typography>
      <div>{t('name')}</div>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, name: e.target.value })} />
      <div>{t('description')}</div>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, description: e.target.value })} />
      <div>{t('price')}</div>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, price: parseFloat(e.target.value) })} />
      <div>{t('imageUrl')}</div>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, imageUrl: e.target.value })} />
      <Button onClick={() => mutationAddProduct.mutate()}>{t('addProduct')}</Button>
      <div>
        {mutationAddProduct.isPending ? (<LoadingCircle />)
          :
          (
            <>
              {mutationAddProduct.isError && (
                <div>An error occurred: {mutationAddProduct.error.message}</div>
              )}
              {mutationAddProduct.isSuccess &&
                <SnackBar
                  snackbarActive={addProductSnackbar}
                  setSnackbarActive={setAddProductSnackbar}
                  message='Product Added'
                />}
            </>

          )}
      </div>

      <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>
      <div>{t('name')}</div>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, name: e.target.value })} />
      <div>{t('newName')}</div>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, newName: e.target.value })} />
      <div>{t('description')}</div>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, description: e.target.value })} />
      <div>{t('price')}</div>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, price: parseFloat(e.target.value) })} />
      <div>{t('imageUrl')}</div>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, imageUrl: e.target.value })} />
      <Button onClick={() => mutationEditProduct.mutate()}>{t('editProduct')}</Button>
      <div>
        {mutationEditProduct.isPending ? (<LoadingCircle />)
          :
          (
            <>
              {mutationEditProduct.isError && (
                <div>An error occurred: {mutationEditProduct.error.message}</div>
              )}
              {mutationEditProduct.isSuccess &&
                <SnackBar
                  snackbarActive={editProductSnackbar}
                  setSnackbarActive={setEditProductSnackbar}
                  message='Product Updates'
                />}
            </>

          )}
      </div>

      <Typography variant='h1' marginTop='5%'>{t('deleteProduct')}</Typography>
      <div>{t('name')}</div>
      <TextField onChange={(e) => setDeleteProductPayload({ ...deleteProductPayload, name: e.target.value })} />
      <Button onClick={() => mutationDeleteProduct.mutate()}>{t('deleteProduct')}</Button>
      <div>
        {mutationDeleteProduct.isPending ? (<LoadingCircle />)
          :
          (
            <>
              {mutationDeleteProduct.isError && (
                <div>An error occurred: {mutationDeleteProduct.error.message}</div>
              )}
              {mutationDeleteProduct.isSuccess &&
                <SnackBar
                  snackbarActive={deleteProductSnackbar}
                  setSnackbarActive={setDeleteProductSnackbar}
                  message='Product Deleted'
                />}
            </>

          )}
      </div>
    </>
  )
}

export { MerchandiseAdmin }