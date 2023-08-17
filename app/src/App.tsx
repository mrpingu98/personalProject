import React from "react";
import "./App.css";
import { HomeRoute } from "./Routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { DrumAndBassRoute } from "./Routes/DrumAndBassRoutes";
import Layout from "./Layout";
import { MusicRoute } from "./Routes/MusicRoute";
import './Configuration/configurei18n';
//to allow the useTranslation to work, seem to just have to import the configuration here - not wrap it around anything

function AppRoutes() {
  return (
    <>
        <HomeRoute />
        <DrumAndBassRoute />
        <MusicRoute />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
    </BrowserRouter>
  );
}

export default App;
