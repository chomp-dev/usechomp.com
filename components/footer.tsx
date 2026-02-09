
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-orange-100 bg-[#FFFBF7] relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
                    <Link href="/support" className="hover:text-orange-600 transition-colors">
                        Support
                    </Link>
                    <Link href="/privacy" className="hover:text-orange-600 transition-colors">
                        Privacy
                    </Link>
                </div>

                <div className="text-center">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600/20 hover:text-orange-600/40 transition-colors" style={{ fontFamily: '"Cooper Black", "Chunky", serif' }}>
                        Chomp
                    </Link>
                    <div className="text-xs text-zinc-400 mt-2">
                        © {new Date().getFullYear()} Chomp. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
