export default function FAQ() {
    const faqs = [
        { q: "How do you get the publisher emails?", a: "Our team manually verifies publisher websites, LinkedIn profiles, and press kits. We verify every email every 30 days." },
        { q: "Can I connect Outlook?", a: "Yes, we support Gmail, Outlook, and custom SMTP connections so emails come from your domain." },
        { q: "Does JustPublisher take a commission?", a: "Zero. We are a software tool, not an agency. You keep 100% of your deal." },
        { q: "Is this for mobile games too?", a: "Yes, we have a specific filter for Mobile Publishers and UA investors." },
    ];

    return (
        <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((f, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg border border-secondary">
                        <h3 className="font-bold text-lg mb-2">{f.q}</h3>
                        <p className="text-neutral-600">{f.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}