import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        if (id) setActiveSection(id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <main className="font-sans bg-white text-gray-900 min-h-screen">
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

            {/* Home/Hero Section */}
            <section id="home" className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
                <h2 className="text-4xl font-extrabold mb-4">Hey, I’m Jada 👋</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    Software engineer, automation specialist, and builder of cool schtuff.
                </p>
            </section>

            {/* Main Sections */}
            <About />
            <Projects />
            <Experience />
            <Contact />

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Jada Thibodeaux. All rights reserved.
            </footer>
        </main>
    );
}
