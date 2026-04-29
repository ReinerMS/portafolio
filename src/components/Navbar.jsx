import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex gap-4 p-4 justify-between bg-black text-white">
            <div className="flex gap-4">
                <p className="font-bold">Portafolio</p>
                <NavLink to="/">Inicio</NavLink>
            </div>
            <div className="flex gap-4">
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}