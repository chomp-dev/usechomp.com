"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Player } from "@remotion/player"
import { MainDemo } from "@/remotion/compositions/MainDemo"

export function DemoSection() {
    const [step, setStep] = useState(0)

    // Sync the text description with the known video timings
    useEffect(() => {
        // Sync logic: Total loop is 11s (330 frames / 30fps)
        // Feed: 0-4s, Map: 4-8s, Business: 8-11s
        const loopDuration = 11000

        const updateStep = () => {
            setStep(0)
            setTimeout(() => setStep(1), 4000)
            setTimeout(() => setStep(2), 8000)
        }

        updateStep() // Initial run
        const loop = setInterval(updateStep, loopDuration)

        return () => {
            clearInterval(loop)
        }
    }, [])

    const scrollToDeck = () => {
        const element = document.getElementById('request-deck');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section className="py-12 md:py-24 px-4 w-full bg-[#FFFBF7]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* --- LEFT COLUMN: TEXT & PIPELINE --- */}
                <div className="order-2 lg:order-1 relative pl-8">

                    {/* Floating Pipeline Connection Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                            className="w-full bg-gradient-to-b from-orange-400 to-orange-600 transition-all duration-500 ease-out"
                            style={{
                                height: `${((step + 1) / 3) * 100}%`,
                                boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
                            }}
                        />
                    </div>

                    <div className="space-y-16 py-4">
                        {/* Step 1: Discovery */}
                        <div className={`transition-all duration-500 ${step === 0 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 0 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-zinc-200 text-zinc-400'}`}>01</div>
                                <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${step === 0 ? 'text-zinc-900' : 'text-zinc-300'}`}>
                                    Discovery
                                </h3>
                            </div>
                            <p className="text-lg text-zinc-500 leading-relaxed font-light pl-12">
                                Users discover food simply by <span className="text-orange-600 font-medium">scrolling their feed</span>. No more random searching.
                            </p>
                        </div>

                        {/* Step 2: Navigation */}
                        <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 1 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-zinc-200 text-zinc-400'}`}>02</div>
                                <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${step === 1 ? 'text-zinc-900' : 'text-zinc-300'}`}>
                                    Navigation
                                </h3>
                            </div>
                            <p className="text-lg text-zinc-500 leading-relaxed font-light pl-12">
                                One tap to <span className="text-orange-600 font-medium">open the map</span> and find the exact location.
                            </p>
                        </div>

                        {/* Step 3: Conversion */}
                        <div className={`transition-all duration-500 ${step === 2 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 2 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-zinc-200 text-zinc-400'}`}>03</div>
                                <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${step === 2 ? 'text-zinc-900' : 'text-zinc-300'}`}>
                                    Conversion
                                </h3>
                            </div>
                            <p className="text-lg text-zinc-500 leading-relaxed font-light pl-12">
                                Real customers <span className="text-orange-600 font-medium">walking through the door</span>.
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- RIGHT COLUMN: 3D PHONE --- */}
                <div className="order-1 lg:order-2 flex justify-center items-center relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"> {/* Increased height for padding */}
                    <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100 lg:scale-110">
                        <Player
                            component={MainDemo}
                            durationInFrames={330} // 11s * 30fps
                            compositionWidth={600}
                            compositionHeight={900}
                            fps={30}
                            style={{
                                width: '100%',
                                height: '100%',
                                maxWidth: '500px',
                                maxHeight: '750px',
                            }}
                            controls={false} // Hide playback controls
                            loop
                            autoPlay
                        />
                    </div>
                </div>
            </div>

            {/* Centered CTA Button */}
            <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Button
                    onClick={scrollToDeck}
                    className="bg-orange-600 hover:bg-orange-700 text-white border-none text-xl px-12 py-8 rounded-full transition-all shadow-lg shadow-orange-900/30 hover:scale-105 hover:shadow-orange-900/50"
                >
                    Request Pitch Deck
                </Button>
            </div>
        </section>
    )
}

function PipelineStep({ isActive, isCurrent, title, desc, stepNum }: { isActive: boolean, isCurrent: boolean, title: string, desc: string, stepNum: string }) {
    return (
        <div className={`relative pl-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}>
            {/* Dot Indicator */}
            <div className={`absolute left-[-21px] top-1 w-3 h-3 rounded-full border border-black transition-colors duration-500 ${isActive ? 'bg-orange-500 scale-125' : 'bg-gray-800'}`} />

            {/* Pulsing Ring for current step */}
            {isCurrent && (
                <div className="absolute left-[-29px] top-[-7px] w-7 h-7 rounded-full border border-orange-500/50 animate-ping" />
            )}

            <div className="flex flex-col gap-1">
                <span className={`text-xs font-bold tracking-widest uppercase mb-1 ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                    Step {stepNum}
                </span>
                <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {title}
                </h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}
