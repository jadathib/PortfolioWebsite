export default function About() {
    return (
        <section
            id="about"
            className="pt-10 pb-20 px-6 bg-[#f1f2f1] scroll-mt-24"
        >
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl text-center mb-10 text-[#5c7260]">
                    About Me
                </h3>

                {/* Use a block wrapper to space paragraphs */}
                <div className="space-y-4 text-lg leading-relaxed text-[#2f2a2a]">
                    <p>
                        I’m a software engineer and QA automation specialist passionate about building
                        tools that make life simpler and smarter. Whether it’s through clean code,
                        rigorous testing, or intuitive user experiences, I believe in crafting software
                        that solves real problems.
                    </p>
                    <p>
                        My current stack includes JavaScript, TypeScript, React, Node.js, and testing
                        frameworks like Selenium, JUnit, and Cypress. I also build mobile experiences
                        with Flutter and Firebase. I've worked across freelance gigs, startups, and
                        agile teams—always with a curiosity to learn and improve.
                    </p>
                    <p>
                        Outside of tech, I love anime, music festivals, and wandering new cities with a
                        camera in hand. I bring the same curiosity and creative spark to every project I join.
                    </p>
                    <p>
                        Testing commit for staging, woadie
                    </p>
                </div>
            </div>
        </section>
    );
}
