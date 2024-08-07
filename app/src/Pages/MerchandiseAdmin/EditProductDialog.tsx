import React from "react";
import { DarkThemeContext } from "../../Contexts/DarkThemeContext";
import { Box, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { ErrorHandling } from "../../Components/MutationErrorHandling";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import { useMutationEditProducts } from "../../Hooks/useMutations";
import { MerchandiseAdminContext } from "../../Contexts/MerchandiseAdminContext";



interface EditProductDialogProps {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    setSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>,
}

interface PayloadProps {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    newName: string
}
//id isn't used atm - but can restructure back-end to use id to lookup product rather than using the name
//and remove 'newName' variable 

const EditProductDialog: React.FC<EditProductDialogProps> = ({ open, setOpen, setSnackbarActive }) => {
    const [error, setError] = React.useState<boolean>(false)
    const { darkTheme } = React.useContext(DarkThemeContext)
    const { t } = useTranslation('merchandiseAdmin')
    const {mutation} = useMutationEditProducts();
    const {selectedRowData: selectedItemInitialValues} = React.useContext(MerchandiseAdminContext)

    const formik = useFormik({
        initialValues: { ...selectedItemInitialValues, newName: '' },
        onSubmit: async (values: PayloadProps) => {
            try {
                await mutation.mutateAsync(values);
                setOpen(false)
                setError(false)
                setSnackbarActive(true)
                formik.resetForm({
                    values: { ...selectedItemInitialValues, newName: '' }
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
            values: { ...selectedItemInitialValues, newName: '' }
        });
    }

    React.useEffect(() => {
        formik.resetForm({
            values: { ...selectedItemInitialValues, newName: '' }
        });
    }, [selectedItemInitialValues])

    return (
        <>
            <Dialog
                PaperProps={{ sx: { width: '50%', maxHeight: 500, bgcolor: darkTheme ? "#656565" : "#f3efeb", color: darkTheme ? "#f3efeb" : "#656565" } }}
                open={open}
            >
                <DialogContent>
                    <Typography variant='h1' marginTop='5%'>{t('editProduct')}</Typography>

                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant='body1' marginTop='5%'>{t('name')}</Typography>
                            <TextField
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />

                            <Typography variant='body1' marginTop='10%'>{t('newName')}</Typography>
                            <TextField
                                id="newName"
                                name="newName"
                                onChange={formik.handleChange}
                                value={formik.values.newName}
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

export { EditProductDialog }