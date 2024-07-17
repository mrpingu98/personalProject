import React from "react";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { LoginDialog } from "../../Components/LoginDialog";
import { useMutationPostLogout } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";
import { Box, Typography } from "@mui/material";
import { DataTable } from "./Table";
import { EditDialog } from "./EditDialog";
import { SnackBar } from "../../Components/SnackBar";
import { useTranslation } from "react-i18next";
import { ProductTableContext } from "../../Constants/Contexts";


const MerchandiseAdmin: React.FC = () => {
  const {t} = useTranslation('merchandiseAdmin')
  const [openLogin, setOpenLogin] = React.useState<boolean>(false)
  const { mutation: mutationLogout } = useMutationPostLogout({ url: apiEndpoints.logout, payload: {} })
  const [editDialogOpen, setEditDialogOpen] = React.useState<boolean>(false)
  const [snackbar, setSnackbar] = React.useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = React.useState<any>()
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
        <DataTable
        setSelectedRowData={setSelectedRowData}
        />
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='center' marginTop={4}>
        <Box marginRight={10}>
          <PrimaryButton text={t('edit')} onClick={() => setEditDialogOpen(true)} disabled={(isRowSelected == undefined ||isRowSelected?.length == 0) ? true : false}/>
        </Box>
        <PrimaryButton text='Edit' onClick={() => setEditDialogOpen(true)} />
        <Box marginLeft={10}>
          <PrimaryButton text='Edit' onClick={() => setEditDialogOpen(true)} />
        </Box>
      </Box>

      <LoginDialog
        open={openLogin}
        setOpen={setOpenLogin}
      />
      <EditDialog
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        selectedItemInitialValues={selectedRowData}
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