import React from "react";
import "./App.css";
import { HomeRoute } from "./Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import {DrumAndBassRoute} from "./Routes/DrumAndBassRoutes";

function AppRoutes() {
  return (
  <>
    <HomeRoute />
    <DrumAndBassRoute />
</>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
