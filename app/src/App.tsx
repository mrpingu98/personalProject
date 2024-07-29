import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import './Configuration/configurei18n';
import './index.css'
import { store } from "./Store/configureStore";
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Home } from "./Pages/Home/Home";
import { routes } from "./Constants/routes";
import { Merchandise } from "./Pages/Merchandise/Merchandise";
import { MerchandiseAdmin } from "./Pages/MerchandiseAdmin/MerchandiseAdmin";
import { Mixes } from "./Pages/Mixes/Mixes";
import { Music } from "./Pages/Music/Music";
import { MyProfile } from "./Pages/MyProfile/MyProfile";
import { PersonalisedSpotify } from "./Pages/PersonalisedSpotify/PersonalisedSpotify";
import { Error } from "./Pages/Error/Error";
import { Technical } from "./Pages/Technical/Technical";


const queryClient = new QueryClient();

function AppRoutes() {
  return(
    <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.merchandise} element={<Merchandise />} />
            <Route path={routes.merchandiseAdmin} element={<MerchandiseAdmin />} />
            <Route path={routes.mixes} element={<Mixes />} />
            <Route path={routes.music}element={<Music />} />
            <Route path={routes.myProfile} element={<MyProfile />} />
            <Route path={routes.personalisedSpotify} element={<PersonalisedSpotify />} />
            <Route path={routes.error} element={<Error />} />
            <Route path={routes.technical} element={<Technical />} />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
              <AppRoutes />
              <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;