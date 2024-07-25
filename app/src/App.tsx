import { HomeRoute } from "./Constants/Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { MixesRoute } from "./Constants/Routes/MixesRoutes";
import Layout from "./Components/Layout/Layout";
import { MusicRoute } from "./Constants/Routes/MusicRoute";
import './Configuration/configurei18n';
import './index.css'
import { store } from "./Store/configureStore";
import { Provider } from 'react-redux'
import { PersonalisedSpotifyRoute } from "./Constants/Routes/PersonalisedSpotify";
import { MyProfileRoute } from "./Constants/Routes/MyProfileRoute";
import { ErrorRoute } from "./Constants/Routes/ErrorRoute";
import { MerchandiseRoute } from "./Constants/Routes/MerchandiseRoute";
import { MerchandiseAdminRoute } from "./Constants/Routes/MerchandiseAdminRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TechnicalRoute } from "./Constants/Routes/TechnicalRoute";

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
      <TechnicalRoute />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          {/* <DarkThemeContextProvider> */}
          <Layout>
              <AppRoutes />
              <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
          {/* </DarkThemeContextProvider> */}
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
