import React from "react";
import { Route, Routes } from "react-router-dom";
import {Mixes} from "../../Pages/Mixes/Mixes";
import { routes } from "./RoutesEndpoints";

export const MixesRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.mixes} element={<Mixes />} />
    </Routes>
  );
};
