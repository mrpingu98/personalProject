import React from "react";
import { Route, Routes } from "react-router-dom";
import {DrumAndBass} from "../Pages/DrumAndBass";
import { routes } from "../Constants/Routes";

export const DrumAndBassRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.dnb} element={<DrumAndBass />} />
    </Routes>
  );
};
