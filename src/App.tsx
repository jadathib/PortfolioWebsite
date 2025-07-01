// App.tsx
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
    const sectionRefs = {
        home: useRef<HTMLElement | null>(null),
        about: useRef<HTMLElement | null>(null),
        projects: useRef<HTMLElement | null>(null),
        experience: useRef<HTMLElement | null>(null),
        contact: useRef<HTMLElement | null>(null),
    };

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-45% 0px -50% 0px",
                threshold: 0.1,
            }
        );

        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <main>
                <Home ref={sectionRefs.home} />
                <About ref={sectionRefs.about} />
                <Projects ref={sectionRefs.projects} />
                <Experience ref={sectionRefs.experience} />
                <Contact ref={sectionRefs.contact} />
            </main>
        </>
    );
}
