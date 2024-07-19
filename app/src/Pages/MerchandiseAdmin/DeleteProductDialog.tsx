import { Typography, TextField, Button, Box, Dialog, DialogContent } from '@mui/material';
import React, { useContext } from 'react';
import { LoadingCircle } from '../../Components/LoadingCircle';
import { SnackBar } from '../../Components/SnackBar';
import { useMutationAuthorisedDelete, useMutationDelete } from '../../Hooks/useMutations';
import { apiEndpoints } from '../../Store/Endpoints';
import { useTranslation } from 'react-i18next';
import { DeleteProductPayload } from '../../Constants/Types/Product';
import { ErrorHandling } from '../../Components/MutationErrorHandling';
import { PrimaryButton } from '../../Components/PrimaryButton';
import { DarkThemeContext, ProductTableContext } from '../../Constants/Contexts';

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
                    <Typography variant='h1'>Delete Product</Typography>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop={2}>
                    <Typography variant='body1'>Are you sure you want to delete "{selectedRowData && selectedRowData.name}"?</Typography>
                    {error && <ErrorHandling mutation={mutationDeleteProduct}/>}
                    <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop={2}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Box marginLeft={4}>
                    <Button onClick={onDelete}>Delete</Button>
                    </Box>
                    </Box>
                    </Box>           
                </DialogContent>
          
                
            
            </Dialog>
    </>
  )
}

export { DeleteProductDialog }