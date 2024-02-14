import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../Routes";
import { MyProfile } from "../../Pages/MyProfile/MyProfile";

export const MyProfileRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.myProfile} element={<MyProfile />} />
    </Routes>
  );
};