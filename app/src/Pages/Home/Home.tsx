import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { useMutationPostLogin, useMutationPostLogout, useMutationSpotifyPost } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";
import { DialogComponent } from "../../Components/Dialog";
import { LoginDialog } from "./LoginDialog";
import { Login } from "./Login";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const { mutation } = useMutationSpotifyPost(apiEndpoints.spotifyTokenRequest)

  React.useEffect(() => {
    const checkToken = localStorage.getItem("access_token") ? true : false
    if (checkToken) {
      mutation.mutate()
    }
  }, [])

  const [open, setOpen] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const {mutation: mutationLogin} = useMutationPostLogin({url: apiEndpoints.login, payload: {email: email, password: password}})
  const {mutation: mutations } = useMutationPostLogout({url: apiEndpoints.logout, payload: {}})

  return (
    <MainContainer>
      <Typography variant="h1" data-test-id={"home-title"}>{t("welcome")}</Typography>
      <Box marginTop={"2%"}>
        <Typography variant="body1" data-test-id={"home-description"}>{t("welcomeMessage")}</Typography>
      </Box>
      <Box marginTop={'2%'}>
        Some parts of the app require you to be logged in. Login or Register below:
      </Box>
      {/* <Button onClick={() => setOpen(true)}>Login</Button> */}
      <Login />
      {/* <DialogComponent 
      open = {open}
      setOpen = {setOpen}
      buttonText="Login"
      onClick={() => mutationLogin.mutate}
      mutation={mutationLogin}
      successMessage="Successfully Logged in"
      /> */}
    {/* <Button onClick={() => mutations.mutate()}>Logout</Button> */}
    </MainContainer>
  );
};

const MainContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export { Home };
