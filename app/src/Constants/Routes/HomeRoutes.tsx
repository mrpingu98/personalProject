import { Home } from "../../Pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./RoutesEndpoints";

export const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
