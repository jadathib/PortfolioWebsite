// Projects.tsx
export default function Projects() {
    return (
        <section id="projects" className="pt-10 pb-18 min-h-screen bg-[#f1f2f1] px-6 scroll-mt-32 text-[#2f2a2a]">
        <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold mb-10 text-center">Projects</h3>
                <ul className="space-y-12 text-[#2f2a2a] leading-relaxed">
                    <li className="hover:shadow-lg hover:bg-white p-6 rounded transition duration-300">
                        <h4 className="text-2xl font-semibold mb-2">Blur – Collective Mental Wellness</h4>
                        <p>
                            Blur is a social wellness app designed for Gen Z and Millennials to support each other
                            through stress, anxiety, and burnout. It focuses on collective care, not self-help —
                            where users can journal privately, post anonymously, and get emotional support in real time.
                        </p>
                        <p>
                            I built the app using <strong>Flutter</strong> and <strong>Google Firebase</strong>, integrating
                            real-time chat, emotional check-ins, and AI-powered suggestions. Blur is currently in
                            pre-launch with plans to roll out weekly challenges, mood tracking, and deep topic rooms.
                        </p>
                        <p>
                            This project showcases my full-stack skills: mobile UI/UX, authentication, secure
                            data handling, and thoughtful feature design for vulnerable users.
                        </p>
                    </li>

                    <li className="hover:shadow-lg hover:bg-white p-6 rounded transition duration-300">
                        <h4 className="text-2xl font-semibold mb-2">LottaLivin – Travel Discovery & Life Bucket List</h4>
                        <p>
                            LottaLivin helps users dream big and stay inspired.
                            It's a travel and lifestyle planning app for those who want to check off
                            meaningful, fun, and spontaneous experiences—solo or with friends.
                        </p>
                        <p>
                            Built using <strong>Supabase</strong> and <strong>React + Vite</strong>,
                            the app features dynamic list creation, image uploads, and cloud storage.
                        </p>
                        <p>
                            It's designed with long-term scalability in mind, with an API-first approach and a future vision
                            of connecting users through shared goals and travel adventures.
                        </p>
                    </li>

                    {[
                        ["Travlr App", "Customized and updated a full-stack SPA using RESTful APIs. Built with Express, Angular, Node.js, and MongoDB. Implemented MVC routing and security protocols."],
                        ["Bank Application", "Two-part C++ banking tool built for high-security compliance. Used GTest and Cppcheck to prevent overflow injection and stabilize thousands of sensitive inputs."],
                        ["Shelter Database", "Backend application for 5 animal shelters using MongoDB and Python. Supported 10,000+ records and included Python widgets with quarterly prototypes."],
                        ["TeenBudgetingApp – Citi Hackathon Winner", "Budgeting tool for teens with auto-savings features, built to encourage emergency fund habits. Simple, intuitive UX for new savers."],
                        ["Jukebox", "Music selector tool built in collaboration with classmates. Used Java, Bitbucket, and Git. Allowed users to queue and automate playlists."],
                        ["Task Planner", "Automation testing framework using JUnit 6 in Eclipse. Monitored by senior engineers and optimized to reduce all bugs and CPU usage by 150%."],
                        ["Inventory Database", "Warehouse application for IT parts inventory. Handled RMA processing, order tracking, and SKUs. Built with MySQL and file output scripts."],
                        ["Travel Slideshow", "Personal travel inspiration app made with Java. Recommends trips based on user preference: cruise, tour, relaxation, and more. Includes hand-curated visuals and code built from Java basics."],
                    ].map(([title, desc]) => (
                        <li
                            key={title}
                            className="hover:shadow-md hover:bg-white p-6 rounded transition duration-300"
                        >
                            <h4 className="text-xl font-semibold mb-2">{title}</h4>
                            <p>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
