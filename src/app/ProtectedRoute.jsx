import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}