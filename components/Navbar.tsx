import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-secondary/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-tight flex items-center gap-1">
                    JUSTPUBLISHER<span className="w-2 h-2 bg-primary rounded-lg inline-block"></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-dark/70 uppercase tracking-wide">
                    <Link href="#benefits" className="hover:text-primary transition-colors">Benefits</Link>
                    <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                </div>

                <div className="flex gap-4">
                    <button className="hidden md:block px-5 py-2.5 font-bold text-sm text-dark hover:text-primary transition-colors">
                        Login
                    </button>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Start Free
                    </button>
                </div>
            </div>
        </nav>
    );
}