import { Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { LoadingCircle } from '../../Components/LoadingCircle';
import { SnackBar } from '../../Components/SnackBar';
import { useMutationPut } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { useTranslation } from 'react-i18next';
import { EditProductPayload } from '../../Constants/Types/Product';
import { ErrorHandling } from '../../Components/MutationErrorHandling';

const EditProduct: React.FC = () => {
    const { t } = useTranslation('merchandiseAdmin')
    const {t: queryKey} = useTranslation('queryKeys')
  
  const [editProductPayload, setEditProductPayload] = React.useState<EditProductPayload>({
    name: '',
    newName: '',
    description: '',
    price: parseFloat('0'),
    imageUrl: ''
  })
  
  const { mutation: mutationEditProduct, snackbar: editProductSnackbar, setSnackbar: setEditProductSnackbar } = useMutationPut(apiEndpoints.products, editProductPayload, queryKey('getProducts'))


    return(
       <>
     <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, name: e.target.value })} />
      <Typography variant='body1'>{t('newName')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, newName: e.target.value })} />
      <Typography variant='body1'>{t('description')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, description: e.target.value })} />
      <Typography variant='body1'>{t('price')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, price: e.target.value == '' ? 0 : parseFloat(e.target.value)  })} />
      <Typography variant='body1'>{t('imageUrl')}</Typography>
      <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, imageUrl: e.target.value })} />
      <Button onClick={() => mutationEditProduct.mutate()}>{t('editProduct')}</Button>
      <div>
        {mutationEditProduct.isPending&& <LoadingCircle />}
        {mutationEditProduct.isError && <ErrorHandling mutation={mutationEditProduct} />}
        {mutationEditProduct.isSuccess &&
          <SnackBar
            snackbarActive={editProductSnackbar}
            setSnackbarActive={setEditProductSnackbar}
            message={t('productUpdated')}
                />}
      </div>
      </>
    )
}

export {EditProduct}