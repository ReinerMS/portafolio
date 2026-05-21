import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Outlet />
    </main>
  );
}