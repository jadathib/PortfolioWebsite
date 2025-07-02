// App.tsx
import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from "./components/Home";
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let closestSectionId = '';
            let minDistance = Number.POSITIVE_INFINITY;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top - 120);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestSectionId = section.id;
                }
            });

            if (closestSectionId && closestSectionId !== activeSection) {
                setActiveSection(closestSectionId);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full bg-white shadow z-20 border-b border-transparent">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold hover:text-[#b23e4f] transition-colors">
                        Jada R. Thibodeaux
                    </h1>
                    <nav className="hidden md:flex space-x-4">
                        {navLinks.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`transition-colors relative hover:text-[#7d2c3a] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#b23e4f] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${
                                    activeSection === id ? 'text-[#b23e4f] font-semibold after:scale-x-100' : ''
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-gray-700 hover:text-[#b23e4f] focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                {/* MOBILE MENU */}
                {mobileOpen && (
                    <div className="md:hidden px-6 pb-4 space-y-2">
                        {navLinks.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setMobileOpen(false)}
                                className={`block text-sm transition-colors hover:text-[#7d2c3a] ${
                                    activeSection === id ? 'text-[#b23e4f] font-semibold' : ''
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* MAIN SECTIONS */}
            <main className="pt-16">
                <Home />
                <About />
                <Projects />
                <Experience />
                <Contact />

                <footer className="pt-1 pb-1 py-6 text-center text-gray-500 text-sm mt-20">
                    © {new Date().getFullYear()} Jada Thibodeaux. All rights reserved.
                </footer>

                <ScrollToTop />
            </main>
        </>
    );
}
