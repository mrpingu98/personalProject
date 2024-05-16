import { Typography, TextField, Button, Box } from '@mui/material';
import React from 'react';
import { LoadingCircle } from '../../Components/LoadingCircle';
import { SnackBar } from '../../Components/SnackBar';
import { useMutationDelete } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { useTranslation } from 'react-i18next';
import { DeleteProductPayload } from '../../Constants/Types/Product';
import { ErrorHandling } from '../../Components/MutationErrorHandling';
import { PrimaryButton } from '../../Components/PrimaryButton';

const DeleteProduct: React.FC = () => {
  const { t } = useTranslation('merchandiseAdmin')
  const { t: queryKey } = useTranslation('queryKeys')
  const [deleteProductPayload, setDeleteProductPayload] = React.useState<DeleteProductPayload>({ name: '' });
  const { mutation: mutationDeleteProduct, snackbar: deleteProductSnackbar, setSnackbar: setDeleteProductSnackbar } = useMutationDelete(apiEndpoints.products, deleteProductPayload, queryKey('getProducts'))

  const onClick = () => {
    mutationDeleteProduct.mutate()
  }
  return (
    <>
      <Typography variant='h1' marginTop='5%'>{t('deleteProduct')}</Typography>
      <Typography variant='body1'>{t('name')}</Typography>
      <TextField onChange={(e) => setDeleteProductPayload({ ...deleteProductPayload, name: e.target.value })} />
      <Box marginTop={2}>
      <PrimaryButton onClick={onClick}  text={t('deleteProduct')}/>
      </Box>
      <>
        {mutationDeleteProduct.isPending && <LoadingCircle />}
        {mutationDeleteProduct.isError && <ErrorHandling mutation={mutationDeleteProduct} />}
        {mutationDeleteProduct.isSuccess &&
          <SnackBar
          snackbarActive={deleteProductSnackbar}
          setSnackbarActive={setDeleteProductSnackbar}
          message={t('productDeleted')}
          />} 
      </>
    </>
  )
}

export { DeleteProduct }