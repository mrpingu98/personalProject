import React from "react";
import { EditProduct } from "./EditProduct";
import { AddProduct } from "./AddProduct";
import { DeleteProduct } from "./DeleteProduct";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { LoginDialog } from "../../Components/LoginDialog";
import { useMutationPostLogout } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";
import { Box } from "@mui/material";
import { DataTable } from "./Table";
import { EditDialog } from "./EditDialog";
import { EditDialogInitialValues } from "../../Constants/Types/Product";
import { SnackBar } from "../../Components/SnackBar";


const MerchandiseAdmin: React.FC = () => {
  const [openLogin, setOpenLogin] = React.useState<boolean>(false)
  const { mutation: mutationLogout } = useMutationPostLogout({ url: apiEndpoints.logout, payload: {} })
  const [editDialogOpen, setEditDialogOpen] = React.useState<boolean>(false)
  const [snackbar, setSnackbar] = React.useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = React.useState<any>()

  const onClickLogin = () => {
    setOpenLogin(true)
  }
  const onClickLogout = () => {
    mutationLogout.mutate()
  }

  return (
    <>
      <Box display='flex' flexDirection='row' justifyContent='flex-end'>
        <Box marginRight={4}>
          <PrimaryButton onClick={onClickLogin} text="Admin Login" />
        </Box>
        <PrimaryButton onClick={onClickLogout} text="Admin Logout" />
      </Box>
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
      <LoginDialog
        open={openLogin}
        setOpen={setOpenLogin}
      />
      <PrimaryButton text='Edit' onClick={() => setEditDialogOpen(true)} />
      <DataTable
        setSelectedRowData={setSelectedRowData}
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
        message={'Product Updated'}
      />
    </>
  )
}

export { MerchandiseAdmin }