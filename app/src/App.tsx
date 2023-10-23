import React from "react";
import "./App.css";
import { HomeRoute } from "./Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { DrumAndBassRoute } from "./Routes/DrumAndBassRoutes";
import Layout from "./Layout";
import { MusicRoute } from "./Routes/MusicRoute";
import './Configuration/configurei18n';
//to allow the useTranslation to work, seem to just have to import the configuration here - not wrap it around anything
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import { store } from "./Store/configureStore";
import { Provider } from 'react-redux'
import { PersonalisedSpotifyRoute } from "./Routes/PersonalisedSpotify";
import { MyProfileRoute } from "./Routes/MyProfileRoute";

const muiTheme = createTheme(theme)

function AppRoutes() {
  return (
    <>
        <HomeRoute />
        <DrumAndBassRoute />
        <MusicRoute />
        <PersonalisedSpotifyRoute />
        <MyProfileRoute />
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
