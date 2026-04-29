import { Outlet, NavLink } from "react-router";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen flex">
            <aside className="flex flex-col w-64 bg-black text-white p-6">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <nav className="flex flex-col gap-3">
                    <NavLink to="/dashboard">Inicio</NavLink>
                    <NavLink to="/dashboard/profile">Perfil</NavLink>
                    <NavLink to="/dashboard/settings">Configuración</NavLink>
                </nav>
                <NavLink to="/" className="mt-auto">Cerrar Sesion</NavLink>
            </aside>

            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}