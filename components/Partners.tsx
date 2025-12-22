export default function Partners() {
    const partners = ["DEVOLVER", "TINYBUILD", "ANNAPURNA", "RAW FURY", "TEAM17", "CURVE"];

    return (
        <section className="py-12 border-y border-secondary bg-white/50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-8">
                    Helping studios sign deals with top tier publishers
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((p) => (
                        <h3 key={p} className="text-2xl md:text-3xl font-black text-dark/80">{p}</h3>
                    ))}
                </div>
            </div>
        </section>
    );
}