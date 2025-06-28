export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Projects</h3>
                <ul className="space-y-6">
                    <li>
                        <h4 className="text-xl font-semibold">Travlr App</h4>
                        <p className="text-gray-700">
                            A custom travel itinerary builder built with MongoDB, Express, and Angular.
                        </p>
                    </li>
                    <li>
                        <h4 className="text-xl font-semibold">Blur App</h4>
                        <p className="text-gray-700">
                            A wellness app focused on collective care, powered by Supabase and Flutter.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}