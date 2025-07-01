// Navbar.tsx
import React from "react";
import clsx from "clsx"; // ✅ FIXED: use "clsx", not "clsx"

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const sections = ["home", "about", "projects", "experience", "contact"];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-lg font-semibold">Jada Thibodeaux</h1>
                <ul className="flex space-x-6">
                    {sections.map(section => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={clsx(
                                    "text-sm font-medium hover:text-blue-500 transition-colors",
                                    activeSection === section ? "text-blue-600" : "text-gray-700"
                                )}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
