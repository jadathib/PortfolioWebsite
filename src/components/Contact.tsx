export default function Contact() {
    return (
        <section
            id="contact"
            className="pt-20 pb-6 px-4 scroll-mt-28 min-h-[35vh] bg-white"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-gray-700 mb-6">
                    Want to work together or have a question? Reach out!
                </p>
                <a
                    href="mailto:jada.r.thibodeaux@gmail.com"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Say Hello
                </a>

                {/* Optional micro spacer for scroll detection (can tweak height) */}
                <div className="h-12 md:h-16" aria-hidden="true" />
                <div className="h-24" aria-hidden="true" />

            </div>
        </section>
    );
}
