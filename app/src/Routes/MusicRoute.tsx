import React from "react";
import { Route, Routes } from "react-router-dom";
import { Music } from "../Pages/Music";


export const MusicRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/music" element={<Music />} />
    </Routes>
  );
};
