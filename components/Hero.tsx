"use client"
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-40 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">

                {/* Social Proof Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-white border border-secondary px-4 py-2 rounded-lg mb-8 shadow-sm"
                >
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map((_,i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
                    </div>
                    <span className="text-xs font-bold text-neutral-600">Rated #1 CRM for Indie Devs</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-dark leading-[1.1] mb-8"
                >
                    Don't chase publishers. <br />
                    <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4">Make them come to you.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    JustPublisher combines a verified database of 5,000+ publisher emails with a powerful CRM. Sync your Gmail, send personalized pitches, and get your game funded.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all flex items-center gap-2">
                        Find Publishers Now <ArrowRight size={20} />
                    </button>
                    <button className="bg-white border-2 border-secondary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/20 transition-colors">
                        View Live Demo
                    </button>
                </motion.div>

                {/* Dashboard Preview (Abstract Representation) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 mx-auto max-w-5xl bg-white p-2 rounded-lg border border-secondary shadow-2xl"
                >
                    <div className="bg-neutral-100 aspect-[16/9] rounded-lg flex items-center justify-center border border-neutral-200">
                        <span className="text-neutral-400 font-bold">Product Dashboard UI Preview</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}