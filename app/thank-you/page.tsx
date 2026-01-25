"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

                {/* Abstract Network Visualization (Background) */}
                <div className="absolute inset-0 opacity-80 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(251, 146, 60, 0.1)" />
                                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.5)" />
                                <stop offset="100%" stopColor="rgba(251, 146, 60, 0.1)" />
                            </linearGradient>

                            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.5" result="blur1" />
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
                                <feMerge>
                                    <feMergeNode in="blur2" />
                                    <feMergeNode in="blur1" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Background Grid */}
                        <g stroke="rgba(251, 146, 60, 0.15)" strokeWidth="0.5">
                            <line x1="0" y1="100" x2="800" y2="100" />
                            <line x1="0" y1="200" x2="800" y2="200" />
                            <line x1="0" y1="300" x2="800" y2="300" />
                            <line x1="0" y1="400" x2="800" y2="400" />
                            <line x1="0" y1="500" x2="800" y2="500" />
                            <line x1="100" y1="0" x2="100" y2="600" />
                            <line x1="200" y1="0" x2="200" y2="600" />
                            <line x1="300" y1="0" x2="300" y2="600" />
                            <line x1="400" y1="0" x2="400" y2="600" />
                            <line x1="500" y1="0" x2="500" y2="600" />
                            <line x1="600" y1="0" x2="600" y2="600" />
                            <line x1="700" y1="0" x2="700" y2="600" />
                        </g>

                        {/* Network Graph */}
                        <g stroke="url(#line-gradient)" strokeWidth="1" fill="none" filter="url(#glow)">
                            <path id="path1" d="M 50 500 L 250 400 L 450 200 L 750 100" />
                            <path id="path2" d="M 50 100 L 250 200 L 450 300 L 750 500" />
                        </g>

                        <g fill="rgba(251, 146, 60, 0.9)" filter="url(#glow)">
                            <circle cx="50" cy="500" r="2" />
                            <circle cx="250" cy="400" r="2.5" />
                            <circle cx="450" cy="200" r="2.5" />
                            <circle cx="750" cy="100" r="2" />

                            <circle cx="50" cy="100" r="2" />
                            <circle cx="250" cy="200" r="2.5" />
                            <circle cx="450" cy="300" r="2.5" />
                            <circle cx="750" cy="500" r="2" />
                        </g>
                    </svg>

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                <div className="relative z-10 space-y-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/95 drop-shadow-2xl">
                        Success
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        Thank you for requesting access. <br />
                        We’ll be in touch shortly.
                    </p>

                    <div className="pt-8">
                        <Button
                            asChild
                            className="bg-white text-black hover:bg-gray-200 text-base md:text-lg px-8 py-6 rounded-full font-medium transition-transform hover:scale-105"
                        >
                            <Link href="/">
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
