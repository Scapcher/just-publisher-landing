import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4">Transparent Pricing</h2>
                <p className="text-neutral-600">Invest in your studio's future for less than the cost of a Unity asset.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Free Plan */}
                <div className="bg-white p-8 rounded-lg border border-secondary">
                    <h3 className="font-bold text-neutral-500 text-sm uppercase tracking-wider">Free Scout</h3>
                    <div className="my-4"><span className="text-4xl font-black">$0</span>/mo</div>
                    <p className="text-sm text-neutral-500 mb-6">Perfect for preparing your materials.</p>
                    <button className="w-full py-3 border-2 border-secondary font-bold rounded-lg mb-8 hover:bg-secondary/20">Start Free</button>
                    <ul className="space-y-3 text-sm text-neutral-600">
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> View 50 Publisher Profiles</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> 1 Pitch Deck Hosting</li>
                        <li className="flex gap-2 opacity-50"><Check size={16} /> Gmail Integration</li>
                    </ul>
                </div>

                {/* Pro Plan - Highlighted */}
                <div className="bg-white p-8 rounded-lg border-2 border-primary shadow-2xl relative md:-mt-8">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-lg text-xs font-bold uppercase">Most Popular</div>
                    <h3 className="font-bold text-primary text-sm uppercase tracking-wider">Studio Pro</h3>
                    <div className="my-4"><span className="text-5xl font-black">$49</span>/mo</div>
                    <p className="text-sm text-neutral-500 mb-6">For serious studios ready to pitch.</p>
                    <button className="w-full py-4 bg-primary text-white font-bold rounded-lg mb-8 hover:brightness-110 shadow-lg shadow-primary/20">Get Full Access</button>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> <strong>Unlimited</strong> Publisher Database</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> Native Gmail & Outlook Sync</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> Read Receipts & Open Tracking</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> Pitch Deck Analytics</li>
                    </ul>
                </div>

                {/* Enterprise */}
                <div className="bg-secondary/20 p-8 rounded-lg border border-secondary">
                    <h3 className="font-bold text-neutral-500 text-sm uppercase tracking-wider">Publisher</h3>
                    <div className="my-4"><span className="text-4xl font-black">$199</span>/mo</div>
                    <p className="text-sm text-neutral-500 mb-6">For agencies and large teams.</p>
                    <button className="w-full py-3 bg-white border border-secondary font-bold rounded-lg mb-8">Contact Sales</button>
                    <ul className="space-y-3 text-sm text-neutral-600">
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> Team Seats (5 users)</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> API Access</li>
                        <li className="flex gap-2"><Check size={16} className="text-primary" /> Dedicated Account Manager</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}