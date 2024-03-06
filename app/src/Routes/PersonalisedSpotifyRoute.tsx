import React from "react";
import { Route, Routes } from "react-router-dom";
import { PersonalisedSpotify } from "../Pages/Music/PersonalisedSpotify";
import { routes } from "../Constants/Routes";

export const PersonalisedSpotifyRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.personalisedSpotify} element={<PersonalisedSpotify />} />
    </Routes>
  );
};