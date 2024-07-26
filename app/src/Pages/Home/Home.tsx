import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/system';
import { useMutationSpotifyPost } from "../../Hooks/useMutations";
import { apiEndpoints } from "../../Store/Endpoints";

const Home: React.FC<WithHomeProps> = ({counter, toggle}) => {
  const { t } = useTranslation("home");
  const { mutation } = useMutationSpotifyPost(apiEndpoints.spotifyTokenRequest)

React.useEffect(() => {
  const checkToken = localStorage.getItem("access_token") ? true : false
  if (checkToken) {
    mutation.mutate()
  }
},[])

  return (
    <MainContainer>
      <Typography variant="h1" data-test-id={"home-title"}>{t("welcome")}</Typography>
      <Box marginTop={"2%"}>
        <Typography variant="body1" data-test-id={"home-description"}>{t("welcomeMessage")}</Typography>
      </Box>
      <Button onClick={toggle}>{counter}</Button>
    </MainContainer>
  );
};

interface WithHomeProps {
  counter: number;
  toggle: () => void;
}

// WithHomeProps Interface: Defines the additional props (counter and toggle) that the HOC will inject.

const withHome = (Component: React.ComponentType<WithHomeProps>) => {
  const WrappedComponent: React.FC = (props) => {
    const  [counter, setCounter] = React.useState<number>(0)
    return (
      <Component 
      {...props}
      counter = {counter}
      toggle = {() => setCounter(counter + 1)}
      />
    )
  }
  return WrappedComponent
}

const MainContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default withHome(Home) ;
