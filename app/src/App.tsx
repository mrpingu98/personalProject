import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomeRoute } from "./Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";

function AppRoutes() {
  return <HomeRoute />;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
