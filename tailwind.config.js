/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        theme: {
            extend: {
                colors: {
                    primary: "#793537",        // Accent red
                    darkAccent: "#622A2C",     // Hover red
                    cocoa: "#412E30",          // Deep cocoa brown
                    lightGray: "#B0A89B",      // Background gray
                    midGray: "#7D8482",        // Card borders, less important text
                    darkGray: "#4C525A",       // Section text
                },
                fontFamily: {
                    sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                    serif: ['Playfair Display', 'ui-serif', 'Georgia'],
                    vt323: ['"VT323"', 'monospace'],
                },
            },
        },
        plugins: [],
    }
};
