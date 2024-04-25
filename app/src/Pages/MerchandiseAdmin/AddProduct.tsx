import { Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { LoadingCircle } from '../../Components/LoadingCircle';
import { SnackBar } from '../../Components/SnackBar';
import { useMutationPost } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { useTranslation } from 'react-i18next';
import { AddProductPayload } from '../../Constants/Types/Product';
import { ErrorHandling } from '../../Components/MutationErrorHandling';

const AddProduct: React.FC = () => {
  const { t } = useTranslation('merchandiseAdmin')
  const { t: queryKey } = useTranslation('queryKeys')
  const [addProductPayload, setAddProductPayload] = React.useState<AddProductPayload>({
    name: '',
    description: '',
    price: parseFloat('0'),
    imageUrl: ''
  })

  const { mutation: mutationAddProduct, snackbar: addProductSnackbar, setSnackbar: setAddProductSnackbar } = useMutationPost(apiEndpoints.products, addProductPayload, queryKey('getProducts'))

  console.log(addProductPayload)

  return (
    <>
      <Typography variant='h1'>{t('addProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, name: e.target.value })} />
      <Typography variant='body1'>{t('description')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, description: e.target.value })} />
      <Typography variant='body1'>{t('price')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, price: e.target.value == '' ? 0 : parseFloat(e.target.value) })
      //initially set to 0, if add number then delete it, is technically an empty string '' - this is not a number type and will cause an error
      //also if you enter a letter, it will return NaN - but when this is processed in the payload, it returns null 
      } />
      <Typography variant='body1'>{t('imageUrl')}</Typography>
      <TextField onChange={(e) => setAddProductPayload({ ...addProductPayload, imageUrl: e.target.value })} />
      <Button onClick={() => mutationAddProduct.mutate()}>{t('addProduct')}</Button>
      <div>
        {mutationAddProduct.isPending && <LoadingCircle />}
        {mutationAddProduct.isError &&
          <ErrorHandling mutation={mutationAddProduct} />}
        {mutationAddProduct.isSuccess &&
          <SnackBar
            snackbarActive={addProductSnackbar}
            setSnackbarActive={setAddProductSnackbar}
            message={t('productAdded')} />}
      </div>
    </>
  )
}

export { AddProduct }