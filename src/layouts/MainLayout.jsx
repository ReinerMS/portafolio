import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-6">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}