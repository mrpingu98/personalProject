import React from "react";
import { Route, Routes } from "react-router-dom";
import {DrumAndBass} from "../Pages/DrumAndBass";

export const DrumAndBassRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/music/dnb" element={<DrumAndBass />} />
    </Routes>
  );
};
