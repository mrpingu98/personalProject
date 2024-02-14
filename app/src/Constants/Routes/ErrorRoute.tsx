import { Error } from "../../Pages/Error/Error";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

export const ErrorRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.error} element={<Error />} />
    </Routes>
  );
};
