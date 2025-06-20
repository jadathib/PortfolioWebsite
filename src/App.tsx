import { StrictMode } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
    return (
        <main className="font-sans bg-white text-gray-900 min-h-screen">
            {/* Header */}
            <header className="p-6 shadow-md sticky top-0 bg-white z-10">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Jada Thibodeaux</h1>
                    <nav className="space-x-4">
                        <a href="#about" className="hover:text-blue-600">About</a>
                        <a href="#projects" className="hover:text-blue-600">Projects</a>
                        <a href="#experience" className="hover:text-blue-600">Experience</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
                <h2 className="text-4xl font-extrabold mb-4">Hey, I’m Jada 👋</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    Software engineer, automation specialist, and builder of cool sh*t.
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
