import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateJob from "../pages/dashboard/CreateJob";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          // <ProtectedRoute>
          //   <Dashboard />
          // </ProtectedRoute>
          <Dashboard />
        }
      >
        <Route index element={<CreateJob />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
