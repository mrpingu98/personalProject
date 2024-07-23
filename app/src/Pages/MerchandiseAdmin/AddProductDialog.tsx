import React from "react";
import { DarkThemeContext, ProductTableContext } from "../../Constants/Contexts";
import { Box, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { ErrorHandling } from "../../Components/MutationErrorHandling";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import { useMutationAddProducts } from "../../Hooks/useMutations";
import { AddProductPayload } from "../../Constants/Types/Product";



interface AddProductDialogProps {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    setSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({ open, setOpen, setSnackbarActive }) => {
    const [error, setError] = React.useState<boolean>(false)
    const { darkTheme } = React.useContext(DarkThemeContext)
    const { t } = useTranslation('merchandiseAdmin')
    const {mutation} = useMutationAddProducts();
    const initialValues: AddProductPayload = {
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values: AddProductPayload) => {
            try {
                await mutation.mutateAsync(values);
                setOpen(false)
                setError(false)
                setSnackbarActive(true)
                formik.resetForm({
                    values: initialValues
                })
            } catch (error) {
                setError(true)
            }
        },
    });

    const onClose = () => {
        setOpen(false)
        setError(false)
        formik.resetForm({
            values: initialValues
        });
    }

    return (
        <>
            <Dialog
                PaperProps={{ sx: { width: '50%', maxHeight: 500, bgcolor: darkTheme ? "#656565" : "#f3efeb", color: darkTheme ? "#f3efeb" : "#656565" } }}
                open={open}
            >
                <DialogContent>
                    <Typography variant='h1' marginTop='5%'>{t('addProduct')}</Typography>

                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant='body1' marginTop='5%'>{t('name')}</Typography>
                            <TextField
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />

                            <Typography variant='body1' marginTop='10%'>{t('description')}</Typography>
                            <TextField
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />

                            <Typography variant='body1' marginTop='10%'>{t('price')}</Typography>
                            <TextField
                                id="price"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />

                            <Typography variant='body1' marginTop='10%'>{t('imageUrl')}</Typography>
                            <TextField
                                id="imageUrl"
                                name="imageUrl"
                                onChange={formik.handleChange}
                                value={formik.values.imageUrl}
                            />
                            {error && <ErrorHandling mutation={mutation} />}
                            <Box marginTop={2} display='flex' flexDirection='row' alignItems='center'>
                                <PrimaryButton text={t('submit')} type='submit' />
                                <Box marginLeft={12}>
                                <PrimaryButton onClick={onClose} text={t('close')} />
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </DialogContent>
            </Dialog >
        </>
    )
}

export { AddProductDialog }