// App.tsx
import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from "./components/Home";

export default function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let closestSectionId = '';
            let minDistance = Number.POSITIVE_INFINITY;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top - 120); // Adjust 120 to match your sticky header + offset

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


    return (
        <main className="sticky top-0 z-10 bg-white shadow-md">
            {/* Header */}
            <header className="p-6 shadow-md sticky top-0 bg-white z-10">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Jada Thibodeaux</h1>
                    <nav className="space-x-4">
                        <a
                            href="#home"
                            className={`hover:text-blue-600 ${
                                activeSection === 'home' ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`hover:text-blue-600 ${
                                activeSection === 'about' ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className={`hover:text-blue-600 ${
                                activeSection === 'projects' ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className={`hover:text-blue-600 ${
                                activeSection === 'experience' ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                            Experience
                        </a>
                        <a
                            href="#contact"
                            className={`hover:text-blue-600 ${
                                activeSection === 'contact' ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Sections */}

            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />

            <footer className="py-6 text-center text-gray-500 text-sm mt-20">
                © {new Date().getFullYear()} Jada Thibodeaux. All rights reserved.
            </footer>
        </main>
    );
}
