import React from "react";
import { DarkThemeContext } from "../../Constants/Contexts";
import { Box, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { ErrorHandling } from "../../Components/MutationErrorHandling";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { useTranslation } from "react-i18next";
import { EditDialogInitialValues } from "../../Constants/Types/Product";
import { useFormik } from 'formik';
import { useMutationEditProducts } from "../../Hooks/useMutations";



interface EditDialogProps {
    open: boolean,
    setOpen: (newState: boolean | ((prevState: boolean) => boolean)) => void,
    selectedItemInitialValues: EditDialogInitialValues,
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

const EditDialog: React.FC<EditDialogProps> = ({ open, setOpen, selectedItemInitialValues, setSnackbarActive }) => {
    const [error, setError] = React.useState<boolean>(false)
    const { darkTheme } = React.useContext(DarkThemeContext)
    const { t } = useTranslation('merchandiseAdmin')

    React.useEffect(() => {
        formik.resetForm({
            values: { ...selectedItemInitialValues, newName: '' }
        });
    }, [selectedItemInitialValues])

    const {mutation} = useMutationEditProducts();

    const onClose = () => {
        setOpen(false)
        setError(false)
    }

    const formik = useFormik({
        initialValues: { ...selectedItemInitialValues, newName: '' },
        onSubmit: async (values: PayloadProps) => {
            try {
                await mutation.mutateAsync(values);
                setOpen(false)
                setError(false)
                setSnackbarActive(true)
            } catch (error) {
                setError(true)
            }
        },
    });

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
                            <Typography variant='body1' marginTop='2%'>{t('name')}</Typography>
                            <TextField
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />

                            <Typography variant='body1' marginTop='2%'>{t('newName')}</Typography>
                            <TextField
                                id="newName"
                                name="newName"
                                onChange={formik.handleChange}
                                value={formik.values.newName}
                            />

                            <Typography variant='body1' marginTop='2%'>{t('description')}</Typography>
                            <TextField
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />

                            <Typography variant='body1' marginTop='2%'>{t('price')}</Typography>
                            <TextField
                                id="price"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />

                            <Typography variant='body1' marginTop='2%'>{t('imageUrl')}</Typography>
                            <TextField
                                id="imageUrl"
                                name="imageUrl"
                                onChange={formik.handleChange}
                                value={formik.values.imageUrl}
                            />
                            {error && <ErrorHandling mutation={mutation} />}
                            <Box marginTop={2} display='flex' flexDirection='row' alignItems='center'>
                                <PrimaryButton text='Submit' type='submit' />
                                <Box marginLeft={12}>
                                <PrimaryButton onClick={onClose} text='Close' />
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </DialogContent>
            </Dialog >
        </>
    )
}

export { EditDialog }