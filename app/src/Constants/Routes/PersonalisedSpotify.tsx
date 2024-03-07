import React from "react";
import { Route, Routes } from "react-router-dom";
import { PersonalisedSpotify } from "../../Pages/PersonalisedSpotify/PersonalisedSpotify";
import { routes } from "./Routes";

export const PersonalisedSpotifyRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.personalisedSpotify} element={<PersonalisedSpotify />} />
    </Routes>
  );
};