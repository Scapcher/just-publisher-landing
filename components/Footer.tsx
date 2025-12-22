import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-6 border-t border-secondary">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-20">
                <div className="col-span-2">
                    <div className="text-2xl font-black tracking-tight mb-4">JUSTPUBLISHER<span className="text-primary">.</span></div>
                    <p className="text-neutral-500 max-w-sm">
                        The all-in-one CRM for game studios. We help you find the right partner so you can focus on building the game of your dreams.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Product</h4>
                    <ul className="space-y-4 text-sm text-neutral-500">
                        <li><a href="#" className="hover:text-primary">Database</a></li>
                        <li><a href="#" className="hover:text-primary">CRM</a></li>
                        <li><a href="#" className="hover:text-primary">Pricing</a></li>
                        <li><a href="#" className="hover:text-primary">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-neutral-500">
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary">Data Processing</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100">
                <div className="text-xs text-neutral-400">
                    © 2025 JustPublisher Inc. All rights reserved.
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Twitter className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer" />
                    <Github className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer" />
                </div>
            </div>
        </footer>
    );
}