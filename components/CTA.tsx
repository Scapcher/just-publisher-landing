export default function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto bg-primary rounded-lg p-12 md:p-24 text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.png')]"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Stop dreaming. Start pitching.</h2>
                    <p className="text-xl mb-10 opacity-90">Join the platform where the next big indie hits are finding their partners.</p>
                    <button className="bg-white text-primary px-10 py-5 rounded-lg font-black text-xl hover:scale-105 transition-transform shadow-lg">
                        Create Free Account
                    </button>
                    <p className="mt-4 text-xs opacity-70">No credit card required for free plan.</p>
                </div>
            </div>
        </section>
    );
}