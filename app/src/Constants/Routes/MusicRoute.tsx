import React from "react";
import { Route, Routes } from "react-router-dom";
import { Music } from "../../Pages/Music/Music";
import { routes } from "./RoutesEndpoints";


export const MusicRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.music}element={<Music />} />
    </Routes>
  );
};
