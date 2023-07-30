import React from "react";
import "./App.css";
import { HomeRoute } from "./Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { DrumAndBassRoute } from "./Routes/DrumAndBassRoutes";
import Layout from "./Layout";
import { MusicRoute } from "./Routes/MusicRoute";

function AppRoutes() {
  return (
    <>
      <Layout>
        <HomeRoute />
        <DrumAndBassRoute />
        <MusicRoute />
      </Layout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
