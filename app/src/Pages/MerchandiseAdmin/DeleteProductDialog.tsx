import { Typography, Box, Dialog, DialogContent } from '@mui/material';
import React, { useContext } from 'react';
import { useMutationAuthorisedDelete, useMutationDelete } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { useTranslation } from 'react-i18next';
import { ErrorHandling } from '../../Components/MutationErrorHandling';
import { PrimaryButton } from '../../Components/PrimaryButton';
import { ProductTableContext } from '../../Constants/Contexts';
import { DarkThemeContext } from '../../Contexts/DarkThemeContext';

interface DeleteDialogProps {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    setSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteProductDialog: React.FC<DeleteDialogProps> = ({open, setOpen, setSnackbarActive}) => {
  const { t } = useTranslation('merchandiseAdmin')
  const { t: queryKey } = useTranslation('queryKeys')
  const {darkTheme} = useContext(DarkThemeContext)
  const {selectedRowData} = useContext(ProductTableContext)
  const [error, setError] = React.useState<boolean>(false)
  const { mutation: mutationDeleteProduct } = useMutationAuthorisedDelete({url: apiEndpoints.products, payload:{name: selectedRowData && selectedRowData.name}, key: queryKey('getProducts')})

  const onClose = () => {
    setOpen(false)
    setError(false)
  }

  const onDelete = async () => {
    try{
        await mutationDeleteProduct.mutateAsync()
        setOpen(false)
        setError(false)
        setSnackbarActive(true)
    }
    catch(err){
        setError(true)
    }
  }

  return (
    <>
        <Dialog
                PaperProps={{ sx: { width: '50%', maxHeight: 500, bgcolor: darkTheme ? "#656565" : "#f3efeb", color: darkTheme ? "#f3efeb" : "#656565" } }}
                open={open}
            >
                <DialogContent>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant='body1'>{t('deleteMessage')}"{selectedRowData && selectedRowData.name}"?</Typography>
                    {error && <ErrorHandling mutation={mutationDeleteProduct}/>}
                    <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop={2}>
                    <PrimaryButton text={t('cancel')} onClick={onClose} />
                    <Box marginLeft={4}>
                    <PrimaryButton text={t('delete')} onClick={onDelete} />
                    </Box>
                    </Box>
                    </Box>           
                </DialogContent>
            </Dialog>
    </>
  )
}

export { DeleteProductDialog }