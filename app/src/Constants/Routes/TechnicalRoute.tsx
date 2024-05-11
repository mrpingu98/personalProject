import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./RoutesEndpoints";
import { Technical } from "../../Pages/Technical/Technical";

export const TechnicalRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.technical} element={<Technical />} />
    </Routes>
  );
};
