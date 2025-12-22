import { Mail, Target, Database, TrendingUp } from "lucide-react";

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-black mb-4">Everything you need to get funded</h2>
                <p className="text-neutral-600 text-lg">Stop using spreadsheets. Upgrade to a dedicated deal-flow OS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                {/* Large Block - Database */}
                <div className="md:col-span-2 row-span-2 bg-white p-10 rounded-lg border border-secondary shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute top-10 right-10 bg-secondary/30 p-4 rounded-lg">
                        <Database className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Verified Publisher Database</h3>
                    <p className="text-neutral-600 max-w-md mb-8">
                        Access direct email addresses for 5,000+ Heads of Publishing. Filter by Platform (PC/Console/Mobile), Genre, and Funding Budget. Updated weekly.
                    </p>
                    <div className="w-full h-full bg-secondary/20 rounded-lg border border-secondary/50 p-4">
                        {/* Abstract UI representation */}
                        <div className="flex gap-2 mb-2">
                            <div className="h-2 w-20 bg-primary/20 rounded-lg"></div>
                            <div className="h-2 w-10 bg-primary/20 rounded-lg"></div>
                        </div>
                        <div className="space-y-2">
                            {[1,2,3].map(i => <div key={i} className="h-8 w-full bg-white rounded-lg border border-secondary/30"></div>)}
                        </div>
                    </div>
                </div>

                {/* Small Block - Email */}
                <div className="bg-primary p-8 rounded-lg text-white flex flex-col justify-between shadow-lg shadow-primary/10">
                    <Mail className="w-8 h-8 mb-4" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Gmail Integration</h3>
                        <p className="opacity-90 text-sm">Send pitches directly from your own email. We track opens, clicks, and replies automatically.</p>
                    </div>
                </div>

                {/* Small Block - CRM */}
                <div className="bg-white p-8 rounded-lg border border-secondary flex flex-col justify-between">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Deal Pipeline</h3>
                        <p className="text-neutral-600 text-sm">Drag-and-drop Kanban board to manage your conversations from "Outreach" to "Signed".</p>
                    </div>
                </div>
            </div>
        </section>
    );
}