export default function HowItWorks() {
    const steps = [
        { num: "01", title: "Import Your Game", desc: "Create a pitch deck profile. Upload your GDD, trailer links, and budget requirements." },
        { num: "02", title: "Select Publishers", desc: "Our AI matches you with the best publishers for your specific genre and platform." },
        { num: "03", title: "Launch Campaign", desc: "Send personalized bulk emails via Gmail. Track who reads your pitch deck in real-time." }
    ];

    return (
        <section className="py-24 bg-white border-y border-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-black text-center mb-16">From "Indie" to "Signed" in 3 Steps</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.num} className="relative p-8 rounded-lg bg-background border border-secondary hover:border-primary transition-colors cursor-default">
                            <span className="text-6xl font-black text-secondary/50 absolute top-4 right-6 pointer-events-none select-none">{step.num}</span>
                            <h3 className="text-xl font-bold mb-4 mt-8 relative z-10">{step.title}</h3>
                            <p className="text-neutral-600 relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}