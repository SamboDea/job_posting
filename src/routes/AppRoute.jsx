import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebsiteRoutes from "./WebsiteRoute";
import DashboardRoutes from "./DashboardRoute";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First render: redirect / → /jobposting */}
        <Route path="/" element={<Navigate to="/jobposting" replace />} />

        {/* All website routes */}
        <Route path="/jobposting/*" element={<WebsiteRoutes />} />

        {/* Dashboard */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />

        {/* Fallback: redirect everything else */}
        <Route path="*" element={<Navigate to="/jobposting" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
