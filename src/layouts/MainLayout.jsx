import { Outlet } from "react-router"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen p-6">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}