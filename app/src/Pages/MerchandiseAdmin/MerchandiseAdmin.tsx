import React from "react";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { LoginDialog } from "../../Components/LoginDialog";
import { useMutationPostLogout } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";
import { Box, Typography } from "@mui/material";
import { ProductTable } from "./ProductTable";
import { EditProductDialog } from "./EditProductDialog";
import { SnackBar } from "../../Components/SnackBar";
import { useTranslation } from "react-i18next";
import { ProductTableContext } from "../../Constants/Contexts";
import { DeleteProductDialog } from "./DeleteProductDialog";


const MerchandiseAdmin: React.FC = () => {
  const {t} = useTranslation('merchandiseAdmin')
  const [openLogin, setOpenLogin] = React.useState<boolean>(false)
  const { mutation: mutationLogout } = useMutationPostLogout({ url: apiEndpoints.logout, payload: {} })
  const [editDialogOpen, setEditDialogOpen] = React.useState<boolean>(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false)
  const [snackbar, setSnackbar] = React.useState<boolean>(false);
  const { isRowSelected } = React.useContext(ProductTableContext);

  const onClickLogin = () => {
    setOpenLogin(true)
  }
  const onClickLogout = () => {
    mutationLogout.mutate()
  }

  return (
    <>
      <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box display='flex' flexDirection='column'>
          <Typography variant="h1">{t('pmc')}</Typography>
        </Box>
        <Box display='flex' flexDirection='column'>
          <Box display="flex" flexDirection="row" marginTop={2}>
            <Box marginRight={4}>
              <PrimaryButton onClick={onClickLogin} text={t('adminLogin')} />
            </Box>
            <PrimaryButton onClick={onClickLogout} text={t('adminLogout')} />
          </Box>
        </Box>
      </Box>
      <Box marginTop={4}>
        <ProductTable
        />
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='center' marginTop={4}>
        <Box marginRight={10}>
          <PrimaryButton text='Add'/>
        </Box>
        <PrimaryButton text={t('edit')} onClick={() => setEditDialogOpen(true)} disabled={(isRowSelected == undefined ||isRowSelected?.length == 0) ? true : false}/>
        <Box marginLeft={10}>
          <PrimaryButton onClick={() => setDeleteDialogOpen(true)} text='Delete' disabled={(isRowSelected == undefined ||isRowSelected?.length == 0) ? true : false}/>
        </Box>
      </Box>

      <LoginDialog
        open={openLogin}
        setOpen={setOpenLogin}
      />
      <EditProductDialog
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        setSnackbarActive={setSnackbar}
      />
      <DeleteProductDialog 
      open={deleteDialogOpen}
      setOpen={setDeleteDialogOpen}
      setSnackbarActive={setSnackbar}
      />
      <SnackBar
        snackbarActive={snackbar}
        setSnackbarActive={setSnackbar}
        message={t('changesSaved')}
      />
    </>
  )
}

export { MerchandiseAdmin }