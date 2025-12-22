"use client"
import { motion } from "framer-motion";

const testimonials = [
    { name: "Sarah Jenkins", handle: "@IndieSarah_Dev", text: "I was dreading the marketing phase. JustPublisher made it feel like a game. Signed with a mid-tier publisher in 3 weeks!" },
    { name: "Marcus Thorne", handle: "@ThorneGames", text: "The database is actually clean. No dead emails. That alone is worth the subscription." },
    { name: "Pixel Studio", handle: "@PixelHeroesXY", text: "Being able to send offers from my own Gmail but track them in a CRM is exactly what I needed." },
    { name: "David Chen", handle: "@DavidC_Art", text: "Sold my prototype. The 'Recent Deals' filter helped me find publishers looking for RPGs." },
];

export default function Testimonials() {
    return (
        <section className="py-24 overflow-hidden bg-background border-t border-secondary">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-3xl font-black">What devs are saying on X</h2>
            </div>

            {/* Marquee Effect */}
            <div className="flex gap-6 w-full overflow-hidden mask-gradient">
                <motion.div
                    className="flex gap-6 min-w-full"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="min-w-[350px] bg-white p-6 rounded-lg border border-secondary shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-secondary rounded-lg border border-secondary/50"></div> {/* Avatar Placeholder */}
                                    <div className="leading-tight">
                                        <p className="font-bold text-sm text-dark">{t.name}</p>
                                        <p className="text-xs text-neutral-400">{t.handle}</p>
                                    </div>
                                </div>
                                <div className="text-black font-black text-sm">𝕏</div>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed">{t.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}