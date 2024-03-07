import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import { Merchandise } from "../../Pages/Merchandise/Merchandise";

export const MerchandiseRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.merchandise} element={<Merchandise />} />
    </Routes>
  );
};