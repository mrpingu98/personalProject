import React from "react";
import { HomeRoute } from "./Constants/Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { MixesRoute } from "./Constants/Routes/MixesRoutes";
import Layout from "./Components/Layout/Layout";
import { MusicRoute } from "./Constants/Routes/MusicRoute";
import './Configuration/configurei18n';
import './index.css'

//to allow the useTranslation to work, seem to just have to import the configuration here - not wrap it around anything
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./Constants/Theme";
import { store } from "./Store/configureStore";
import { Provider } from 'react-redux'
import { PersonalisedSpotifyRoute } from "./Constants/Routes/PersonalisedSpotify";
import { MyProfileRoute } from "./Constants/Routes/MyProfileRoute";
import { ErrorRoute } from "./Constants/Routes/ErrorRoute";
import { MerchandiseRoute } from "./Constants/Routes/MerchandiseRoute";
import { MerchandiseAdminRoute } from "./Constants/Routes/MerchandiseAdminRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const muiTheme = createTheme(theme);
const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <>
      <HomeRoute />
      <MixesRoute />
      <MusicRoute />
      <PersonalisedSpotifyRoute />
      <MyProfileRoute />
      <ErrorRoute />
      <MerchandiseRoute />
      <MerchandiseAdminRoute />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <ThemeProvider theme={muiTheme}>
              <AppRoutes />
              <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
          </Layout>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
