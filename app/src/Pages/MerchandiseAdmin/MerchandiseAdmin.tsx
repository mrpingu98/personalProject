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


const MerchandiseAdmin: React.FC = () => {
  const [openLogin, setOpenLogin] = React.useState<boolean>(false)
  const { mutation: mutationLogout } = useMutationPostLogout({ url: apiEndpoints.logout, payload: {} })
  
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
      <DataTable />
    </>
  )
}

export { MerchandiseAdmin }