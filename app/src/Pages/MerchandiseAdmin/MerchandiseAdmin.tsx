import React from "react";
import { Button, TextField, Typography } from "@mui/material"
import { useMutationDelete, useMutationPost, useMutationPut } from "../../Hooks/useMutations";
import { AddProductPayload, DeleteProductPayload, EditProductPayload } from "../../Constants/Types/Product";
import { useTranslation } from "react-i18next";
import { apiEndpoints } from "../../Store/Endpoints";
import { LoadingCircle } from "../../Components/LoadingCircle";
import { SnackBar } from "../../Components/SnackBar";
import { StringChain } from "cypress/types/lodash";


const MerchandiseAdmin: React.FC = () => {
  const { t } = useTranslation('merchandiseAdmin')
  const {t: queryKey} = useTranslation('queryKeys')
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
  
  const { mutation: mutationAddProduct, snackbar: addProductSnackbar, setSnackbar: setAddProductSnackbar } = useMutationPost(apiEndpoints.products, addProductPayload, queryKey('getProducts'));

  const { mutation: mutationEditProduct, snackbar: editProductSnackbar, setSnackbar: setEditProductSnackbar } = useMutationPut(apiEndpoints.products, editProductPayload, queryKey('getProducts'))

  const { mutation: mutationDeleteProduct, snackbar: deleteProductSnackbar, setSnackbar: setDeleteProductSnackbar } = useMutationDelete(apiEndpoints.products, deleteProductPayload, queryKey('getProducts'))


  return (
    <>
      <Typography variant='h1'>{t('addProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, name: e.target.value })} />
      <Typography variant='body1'>{t('description')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, description: e.target.value })} />
      <Typography variant='body1'>{t('price')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, price: parseFloat(e.target.value) })} />
      <Typography variant='body1'>{t('imageUrl')}</Typography>
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
                  message={t('productAdded')}

                />}
            </>

          )}
      </div>

      <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, name: e.target.value })} />
      <Typography variant='body1'>{t('newName')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, newName: e.target.value })} />
      <Typography variant='body1'>{t('description')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, description: e.target.value })} />
      <Typography variant='body1'>{t('price')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, price: parseFloat(e.target.value) })} />
      <Typography variant='body1'>{t('imageUrl')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, imageUrl: e.target.value })} />
      <Button onClick={() => mutationEditProduct.mutate()}>{t('editProduct')}</Button>
      <div>
        {mutationEditProduct.isPending ? (<LoadingCircle />)
          :
          (
            <>
              {mutationEditProduct.isError && (
                <div>An error occurred: {mutationEditProduct.error.message} {(mutationEditProduct.error.customMessage)}</div>
              )}
              {mutationEditProduct.isSuccess &&
                <SnackBar
                  snackbarActive={editProductSnackbar}
                  setSnackbarActive={setEditProductSnackbar}
                  message={t('productUpdated')}

                />}
            </>

          )}
      </div>

      <Typography variant='h1' marginTop='5%'>{t('deleteProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
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
                  message={t('productDeleted')}

                />}
            </>

          )}
      </div>
    </>
  )
}

export { MerchandiseAdmin }