export default function Contact() {
    return (
        <section
            id="contact"
            className="pt-1 pb-1 scroll-mt-28 py-24 bg-[#f1f2f1]"
        >
            <div className="max-w-4xl mx-auto text-center px-4">
                <h3 className="text-2xl font-bold mb-4 text-[#5c7260]">Contact</h3>

                <p className="text-[#3d3d3d] mb-6 text-lg">
                    Want to work together or have a question? Reach out!
                </p>

                <a
                    href="mailto:jada.r.thibodeaux@gmail.com"
                    className="inline-block bg-[#b23e4f] text-white font-semibold py-2 px-6 rounded hover:bg-[#7d2c3a] mb-6 transition-colors"
                >
                    Say Hello
                </a>

                <p className="text-[#3d3d3d] text-sm max-w-xl mx-auto mb-8">
                    You can also reach me directly at{" "}
                    <a
                        href="mailto:jada.r.thibodeaux@gmail.com"
                        className="text-[#b23e4f] underline hover:text-[#7d2c3a]"
                    >
                        jada.r.thibodeaux@gmail.com
                    </a>
                    .<br /> I'm always open to tech chats, collabs, or anime recs 🧠✨
                </p>

                <div className="flex justify-center gap-6 mb-6 text-sm font-medium text-[#3d3d3d]">
                    <a
                        href="https://github.com/jadathib"
                        target="_blank"
                        className="underline hover:text-[#b23e4f]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jadathibodeaux/"
                        target="_blank"
                        className="underline hover:text-[#b23e4f]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="public/Jada_Thibodeaux_Software Engineer_Resume.pdf"
                        target="_blank"
                        className="underline hover:text-[#b23e4f]"
                    >
                        Resume
                    </a>
                </div>

                <p className="text-xs text-[#6b7280]">
                    Currently open to full-time roles & freelance QA contracts.
                    <br />
                    Available for remote or hybrid work.
                </p>
            </div>
        </section>
    );
}
