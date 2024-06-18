import React from "react";
import { DarkThemeContext } from "../../Constants/Contexts";
import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { t } from "i18next";
import { LoadingCircle } from "../../Components/LoadingCircle";
import { ErrorHandling } from "../../Components/MutationErrorHandling";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { SnackBar } from "../../Components/SnackBar";
import { useTranslation } from "react-i18next";
import { EditDialogInitialValues, EditProductPayload } from "../../Constants/Types/Product";
import { useMutationAuthorisedPut, useMutationPut } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";

interface EditDialogProps {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    selectedItemInitialValues: EditDialogInitialValues,
    setSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>,
    //receive a pyload of data to give inital value for textfields 
}

const EditDialog: React.FC<EditDialogProps> = ({ open, setOpen, selectedItemInitialValues, setSnackbarActive }) => {
    const { darkTheme } = React.useContext(DarkThemeContext)
    const { t } = useTranslation('merchandiseAdmin')
    const { t: queryKey } = useTranslation('queryKeys')

    const [editProductPayload, setEditProductPayload] = React.useState<EditProductPayload>(
        {
        name: '',
        newName: '',
        description: '',
        price: 0,
        imageUrl: ''
    }
)

React.useEffect (() => {
    setEditProductPayload({
        name: selectedItemInitialValues?.product,
        newName: '',
        description: selectedItemInitialValues?.description,
        price: selectedItemInitialValues?.price,
        imageUrl: selectedItemInitialValues?.imageUrl
    })
},[selectedItemInitialValues])




    const { mutation: mutationEditProduct, snackbar: editProductSnackbar, setSnackbar: setEditProductSnackbar } = useMutationAuthorisedPut({url: apiEndpoints.products, payload: editProductPayload, key: queryKey('getProducts')})

    const onEdit = () => {
        mutationEditProduct.mutate()
    }

    // React.useEffect (() => {
    //     if(mutationEditProduct.isSuccess){
    //         setSnackbarActive(true)
    //         console.log('hit')
    //     }
    // },[mutationEditProduct])

    return (
        <>
            <Dialog
                PaperProps={{ sx: { width: '50%', maxHeight: 500, bgcolor: darkTheme ? "#656565" : "#f3efeb", color: darkTheme ? "#f3efeb" : "#656565" } }}
                open={open}
            >
                <DialogContent>
                    <Typography>{selectedItemInitialValues?.product}</Typography>
                    <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>

                    <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant='body1' marginTop='2%'>{t('name')}</Typography>
                    <TextField value={editProductPayload.name} onChange={(e) => setEditProductPayload({...editProductPayload, name: e.target.value})} />

                    <Typography variant='body1' marginTop='2%'>{t('newName')}</Typography>
                    <TextField onChange={(e) => setEditProductPayload({ ...editProductPayload, newName: e.target.value })} />

                    <Typography variant='body1' marginTop='2%'>{t('description')}</Typography>
                    <TextField value={editProductPayload.description} onChange={(e) => setEditProductPayload({ ...editProductPayload, description: e.target.value })} />

                    <Typography variant='body1' marginTop='2%'>{t('price')}</Typography>
                    <TextField type="number" value={editProductPayload.price} onChange={(e) => setEditProductPayload({ ...editProductPayload, price: isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)})} />

                    <Typography variant='body1' marginTop='2%'>{t('imageUrl')}</Typography>
                    <TextField value={editProductPayload.imageUrl ? editProductPayload.imageUrl : ''} onChange={(e) => setEditProductPayload({ ...editProductPayload, imageUrl: e.target.value })} />

                    <Box marginTop={2} display='flex' flexDirection='row' justifyItems='space-between'>
                        <PrimaryButton onClick={onEdit} text={t('editProduct')} />
                        <PrimaryButton onClick={() => setOpen(false)} text='Close' />
                    </Box>
                    <div>
                        {mutationEditProduct.isPending && <LoadingCircle />}
                        {mutationEditProduct.isError && <ErrorHandling mutation={mutationEditProduct} />}
                        {mutationEditProduct.isSuccess &&
                        <DialogContent>
                            <Typography>Product Updated!</Typography>
                            <PrimaryButton onClick={() => setOpen(false)} text='Close' />
                        </DialogContent>}
                    </div>
                    </Box>
                </DialogContent>
            </Dialog >
        </>
    )
}

export { EditDialog }


//the reason the state inside the dialog remains the same is because the component hasn't been unmounted/destroyed 
//all that's happenign is we are opening and then closing the dialog 
//although the dialog is closed, it hasn't been unmounted