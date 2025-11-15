// AppRoute.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebsiteRoutes from "./WebsiteRoute";
import DashboardRoutes from "./DashboardRoute";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
