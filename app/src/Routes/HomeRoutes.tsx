import { Home } from "../Pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
