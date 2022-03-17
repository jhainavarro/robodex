import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { RobotsList, Robot, SaveRobot, EditRobot } from "Robots";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<RobotsList />} index />
          <Route element={<SaveRobot />} path="add" />
          <Route element={<EditRobot />} path="edit/:guid" />
          <Route element={<Robot />} path=":guid" />

          {/* If path is 404, redirect to base */}
          <Route element={<Navigate to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
