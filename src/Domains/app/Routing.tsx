import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { RobotsList, Robot, SaveRobot, EditRobot } from "Domains/robots";
import Home from "Domains/home";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Home />} index />
          <Route element={<RobotsList />} path="robots" />
          <Route element={<SaveRobot />} path="robots/add" />
          <Route element={<EditRobot />} path="robots/edit/:guid" />
          <Route element={<Robot />} path="robots/:guid" />

          {/* If path is 404, redirect to base */}
          <Route element={<Navigate to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
