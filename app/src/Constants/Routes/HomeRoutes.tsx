import { Home } from "../../Pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../Routes";

export const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
