import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./RoutesEndpoints";
import { MerchandiseAdmin } from "../../Pages/MerchandiseAdmin/MerchandiseAdmin";

export const MerchandiseAdminRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.merchandiseAdmin} element={<MerchandiseAdmin />} />
    </Routes>
  );
};
