import React from "react";
import "./App.css";
import { HomeRoute } from "./Constants/Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { MixesRoute } from "./Constants/Routes/MixesRoutes";
import Layout from "./Components/Layout";
import { MusicRoute } from "./Constants/Routes/MusicRoute";
import './Configuration/configurei18n';
//to allow the useTranslation to work, seem to just have to import the configuration here - not wrap it around anything
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import { store } from "./Store/configureStore";
import { Provider } from 'react-redux'
import { PersonalisedSpotifyRoute } from "./Constants/Routes/PersonalisedSpotify";
import { MyProfileRoute } from "./Constants/Routes/MyProfileRoute";
import { ErrorRoute } from "./Constants/Routes/ErrorRoute";

const muiTheme = createTheme(theme)

function AppRoutes() {
  return (
    <>
        <HomeRoute />
        <MixesRoute />
        <MusicRoute />
        <PersonalisedSpotifyRoute />
        <MyProfileRoute />
        <ErrorRoute />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Layout>
      <ThemeProvider theme={muiTheme}>
      <AppRoutes />
      </ThemeProvider>
    </Layout>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
