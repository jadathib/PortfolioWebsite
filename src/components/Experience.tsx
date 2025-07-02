// components/Experience.tsx
export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 bg-[#f1f2f1] scroll-mt-28 text-[#2f2a2a]"
        >
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold mb-10 text-center">Experience</h3>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                        <h4 className="text-lg font-semibold">
                            Full Stack Software Engineer – Fiverr Freelance
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Jan 2024 – Present</p>
                        <p>
                            Detail-oriented and adaptable QA professional with hands-on experience in both manual
                            and automated testing across web and mobile platforms. Adept at creating comprehensive
                            test plans, writing and executing test cases, and identifying critical bugs to ensure
                            software quality and stability. Skilled in tools like Selenium, Postman, JUnit, and
                            Cypress, with a strong understanding of Agile and Scrum methodologies. Known for clear
                            communication with dev teams, fast ramp-up on new projects, and a deep commitment to
                            improving user experience through rigorous testing. Proven success in freelance and
                            contract roles, balancing multiple clients and delivering high-impact QA solutions on time.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                        <h4 className="text-lg font-semibold">Software Specialist – Retensa</h4>
                        <p className="text-sm text-gray-600 mb-2">Aug 2022 – May 2025</p>
                        <p>
                            Collaborated with team to develop a feature-rich platform, increasing engagement by 20%.
                            Decreased production defects by 65% by implementing robust unit and continuous testing procedures.
                            Coordinated and executed agile ceremonies, enabling transparent project tracking and status updates;
                            improved stakeholder engagement by 50%, ensuring that all project milestones were achieved within designated
                            timelines and budgets. Assisting new associates with 3 new features, facilitating knowledge sharing and professional development.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                        <h4 className="text-lg font-semibold">QA Engineer – Retensa</h4>
                        <p className="text-sm text-gray-600 mb-2">Nov 2022 – Apr 2023</p>
                        <p>
                            Lead QA & Support to Senior Developer on SaaS retention feature product providing a 40%+ profit margin.
                            Product managed, source testing 4 major client production features using JavaScript and SQL.
                            Constructed automation script for 20 SaaS reports, increasing employee and client usage by 20%.
                            Developed client proposal project scope, feature request, and timeline with senior developer,
                            reducing 25% of projected budget hours.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                        <h4 className="text-lg font-semibold">Associate QA Engineer – Retensa</h4>
                        <p className="text-sm text-gray-600 mb-2">Sept 2022 – Nov 2022</p>
                        <p>
                            Lead QA & Support Product Specialists on R&D SaaS retention Agile Scrum project feature within first 60 days.
                            Executed comprehensive source testing procedures in staging and production environments using JavaScript and SQL,
                            resulting in a 40% reduction in software bugs and a 25% increase in product reliability.
                            Manage information software documentations to track progress and updates for half million employees.
                            Supply software to international companies Mastercard, Bayer HealthCare, PNC, & GE’s 400,000+ employees.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                        <h4 className="text-lg font-semibold">
                            Full Stack Software Engineer – Southern New Hampshire University
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">July 2022 – Sept 2022</p>
                        <p>
                            Customized, developed and updated full stack application SPA using 10+ RESTFUL API endpoints.
                            Architected MongoDB schema integrating 4+ frameworks in Express, Angular, and Node.js.
                            Deployed MVC Routing and Security for client frontend while updating principal engineer over 8 weeks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
