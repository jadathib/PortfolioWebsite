// components/ScrollToTop.tsx
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 bg-[#b23e4f] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:scale-110 hover:bg-[#7d2c3a] focus:outline-none ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
}
