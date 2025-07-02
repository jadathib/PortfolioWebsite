export default function Home () {
    return (
        <section id="home" className="pt-0 pb-5 text-center bg-gradient-to-[#f1f2f1] to bg-[#f1f2f1] scroll-mt-0">
            <h1 style={{ fontFamily: '"VT323", monospace', fontSize: '5rem' }}>
                Hi, I’m Jada
            </h1>

            {/**<h2 className="text-4xl font-extrabold font-vt323 text-gray-900 mb-4">Hi, I’m Jada</h2>**/}
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Software engineer, automation specialist, and builder of cool schtuff.
            </p>
        </section>
    );
}
