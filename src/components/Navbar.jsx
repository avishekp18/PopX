import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    return (
        <nav className="top-0 sticky z-50 w-full bg-white shadow-md p-4">
            <div className="flex justify-between items-center">
                {/* ✅ Left: Hamburger + Logo */}
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✖" : "☰"}
                    </button>
                    <div className="text-2xl font-bold text-purple-600">PopX</div>
                </div>

                {/* ✅ Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-1 font-medium rounded transition ${location.pathname === link.path
                                ? "text-purple-600 border-b-2 border-purple-500"
                                : "text-gray-700 hover:text-purple-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* ✅ Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-2xl font-bold text-purple-600">PopX</span>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl text-gray-600"
                    >
                        ✖
                    </button>
                </div>

                <nav className="flex flex-col gap-4 p-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={`text-lg ${location.pathname === link.path
                                ? "text-purple-600 font-semibold"
                                : "text-gray-700 hover:text-purple-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </nav>
    );
}
