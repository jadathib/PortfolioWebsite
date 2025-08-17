// components/Experience.tsx

import { Link } from "react-router-dom";

type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    summary?: string;
    bullets?: string[];
    tech?: string[];
    caseStudySlug?: string;
};

const EXPERIENCE: ExperienceItem[] = [
    {
        title: "Full Stack Software Engineer",
        company: "Fiverr (Freelance)",
        period: "Jan 2024 – Present",
        summary:
            "Detail-oriented QA + full-stack delivery across web and mobile, combining clear specs with automation for consistent releases.",
        bullets: [
            "Created test plans and UI/API automation (Cypress, Selenium, Postman) to cut regressions.",
            "Shipped features end-to-end with React/Flutter + Node; collaborated on ACs to reduce rework.",
            "Balanced multiple clients; delivered on time with CI checks and lightweight observability.",
        ],
        tech: ["React", "TypeScript", "Node", "Cypress", "Selenium", "Postman", "JUnit"],
        // caseStudySlug: "travlr", // uncomment if a case study maps to this role
    },
    {
        title: "Software Specialist",
        company: "Retensa",
        period: "Aug 2022 – May 2025",
        summary:
            "Built and hardened feature sets for a large-scale platform; elevated quality and stakeholder visibility via testing + agile rhythms.",
        bullets: [
            "Increased engagement ~20% through iterative feature development and telemetry-based tweaks.",
            "Reduced production defects ~65% by adding unit tests and CI coverage.",
            "Improved stakeholder alignment ~50% by running clear standups/planning/reviews.",
        ],
        tech: ["TypeScript", "React", "Node", "SQL", "Jest", "GitHub Actions"],
        caseStudySlug: "qa-automation-visualizer",
    },
    {
        title: "QA Engineer",
        company: "Retensa",
        period: "Nov 2022 – Apr 2023",
        summary:
            "Led QA on a retention feature set; prioritized automation and rapid feedback loops to protect business KPIs.",
        bullets: [
            "Supported senior dev on high-margin feature area (40%+ contribution).",
            "Automated ~20 analytics reports; boosted usage ~20%.",
            "Scoped proposals/timelines, trimming ~25% from projected budgets.",
        ],
        tech: ["Java", "Selenium", "Cucumber", "Maven", "SQL"],
        caseStudySlug: "qa-automation-visualizer",
    },
    {
        title: "Associate QA Engineer",
        company: "Retensa",
        period: "Sept 2022 – Nov 2022",
        summary:
            "Executed staging/production test passes; documented workflows at enterprise scale.",
        bullets: [
            "Reduced bugs ~40% and increased reliability ~25% with comprehensive test cycles.",
            "Maintained documentation used across orgs serving 400k+ employees (GE, Mastercard, Bayer, PNC).",
        ],
        tech: ["JavaScript", "SQL", "Jira", "Confluence"],
        caseStudySlug: "qa-automation-visualizer",
    },
    {
        title: "Full Stack Software Engineer",
        company: "Southern New Hampshire University",
        period: "July 2022 – Sept 2022",
        summary:
            "Customized SPA using 10+ REST endpoints; added secure routing and DB schema updates.",
        bullets: [
            "Architected MongoDB schema and integrated Express + Angular + Node.",
            "Implemented MVC routing and auth; coordinated with principal engineer.",
        ],
        tech: ["Angular", "Node", "Express", "MongoDB", "JWT"],
        // caseStudySlug: "blur-mental-health", // map if applicable
    },
]
export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 bg-[#f1f2f1] scroll-mt-28 text-[#2f2a2a]"
        >
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold mb-10 text-center">Experience</h3>
                <div className="space-y-8">
                    {EXPERIENCE.map((item, idx) => (
                        <article key={`${item.company}-${idx}`} className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                            {/* Header*/}
                            <header className="mb-2">
                                <h4 className="text-lg font-semibold">
                                    {item.title} - {item.company}
                                </h4>
                            </header>
                            {/* Summary */}
                            {item.summary &&
                            <p className= "mt-2 mb-3">
                                {item.summary}
                            </p>
                            }
                            {/* Bullets */}
                            {item.bullets?.length ? (
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    {item.bullets.map((b, i) => (
                                        <li key={i}>{b}
                                        </li>
                                    ))}
                                </ul>
                            ) : null }
                            {/* Tech badges */}
                            {item.tech?.length ? (
                                <div className="flex flex-wrap gap-2 mb-4">
                            {item.tech.map((t) => (
                                <span
                                key={t}
                            className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                ) : null}

                {/* Footer (Case Study link if available) */}
                {item.caseStudySlug && (
                <footer className="flex justify-end">
                    <Link
                        to={`/projects/${item.caseStudySlug}`}
                        className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow-md transition-shadow"
                    >
                        View Case Study →
                    </Link>
                </footer>
                )}
            </article>
            ))}
        </div>
</div>
</section>
    );
}
