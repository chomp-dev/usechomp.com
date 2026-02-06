"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Player, PlayerRef } from "@remotion/player"
import { MainDemo } from "@/remotion/compositions/MainDemo"
import { motion } from "framer-motion"

export function DemoSection() {
    const [step, setStep] = useState(0)
    const playerRef = useRef<PlayerRef>(null)
    const [isHovering, setIsHovering] = useState(false)

    // Updated Timings for 3 Stages: Discovery(Feed), Conversion(Business), Retention(Retention)
    // We skip the Map phase (4-8s) in the step logic, but keep it in video for flow if needed, 
    // or we just seek past it.
    // 0-4s: Feed
    // 8-11s: Business (Conversion)
    // 11-15s: Retention
    const STAGE_STARTS = [0, 8000, 11000] // Skip 4000 (Map)

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            const currentTime = playerRef.current?.getCurrentFrame() || 0;
            const timeInSeconds = currentTime / 30;

            // Sync state to video time
            if (timeInSeconds < 4) setStep(0)         // Discovery
            else if (timeInSeconds >= 8 && timeInSeconds < 11) setStep(1) // Conversion
            else if (timeInSeconds >= 11) setStep(2)  // Retention
            // Note: 4-8s (Map) doesn't highlight any step (or keeps step 0?)

        }, 100)

        return () => clearInterval(interval)
    }, [isHovering])

    const handleStepClick = (index: number) => {
        setStep(index)
        playerRef.current?.seekTo(STAGE_STARTS[index] / 1000 * 30) // seconds -> frames
    }

    const scrollToDeck = () => {
        document.getElementById('request-deck')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-4 md:py-12 px-4 w-full bg-[#FFFBF7] min-h-[85vh] flex flex-col justify-center"> {/* Reduced padding and added min-h */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* --- LEFT COLUMN: INTERACTIVE PIPELINE "RACE" --- */}
                <div
                    className="order-2 lg:order-1 relative pl-4 md:pl-8"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* MOTTO HEADLINE */}
                    <div className="mb-12 pt-2"> {/* Added top padding */}
                        <div className="overflow-visible"> {/* Allow descenders to hang */}
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-[1.1] whitespace-nowrap py-1"
                            >
                                From <span className="text-orange-500">Scrolling</span> to <span className="text-orange-500">Strolling</span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* Race Track Line */}
                    <div className="absolute left-0 top-6 bottom-6 w-2 bg-zinc-100 rounded-full overflow-hidden">
                        {/* Track Markers */}
                        <div className="absolute top-0 w-full h-px bg-zinc-200" />
                        <div className="absolute bottom-0 w-full h-px bg-zinc-200" />

                        {/* Liquid Fill */}
                        <div
                            className="w-full bg-gradient-to-b from-orange-400 to-orange-600 transition-all duration-500 ease-out relative"
                            style={{
                                height: `${((step + 1) / 3) * 100}%`, // Updated for 3 steps
                                boxShadow: '0 0 15px rgba(251, 146, 60, 0.4)'
                            }}
                        >
                            {/* Runner Head */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-orange-600 rounded-full shadow-md translate-y-1/2 z-10" />
                        </div>
                    </div>

                    <div className="space-y-10 py-2">
                        <PipelineStep
                            index={0}
                            step={step}
                            onClick={() => handleStepClick(0)}
                            title="Discovery"
                            desc="Users discover food simply by scrolling their feed."
                            highlight="scrolling their feed"
                        />
                        <PipelineStep
                            index={1}
                            step={step}
                            onClick={() => handleStepClick(1)} // Index 1 is now Conversion
                            title="Conversion"
                            desc="Real customers walking through the door. We drive foot traffic."
                            highlight="walking through the door"
                        />
                        <PipelineStep
                            index={2}
                            step={step}
                            onClick={() => handleStepClick(2)} // Index 2 is now Retention
                            title="Retention"
                            desc="Users trust us for good food. Restaurants trust us for more customer volume."
                            highlight="more customer volume"
                        />
                    </div>

                </div>

                {/* --- RIGHT COLUMN: 3D PHONE --- */}
                <div className="order-1 lg:order-2 flex justify-center items-center relative h-[600px] md:h-[700px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Explicit dimensions for Player to avoid collapse */}
                        <Player
                            ref={playerRef}
                            component={MainDemo}
                            durationInFrames={450} // 15s * 30fps
                            compositionWidth={600}
                            compositionHeight={900}
                            fps={30}
                            style={{
                                width: '100%',
                                height: '100%',
                            }} // Removed max-width constraints that might be causing issues
                            controls={false}
                            loop
                            autoPlay
                        />
                    </div>
                </div>
            </div>

            {/* Centered CTA Button */}
            <div className="pt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Button
                    onClick={scrollToDeck}
                    className="bg-orange-600 hover:bg-orange-700 text-white border-none text-xl px-16 py-8 rounded-full transition-all shadow-xl shadow-orange-900/20 hover:scale-105 hover:shadow-orange-900/40"
                >
                    Request Pitch Deck
                </Button>
            </div>
        </section>
    )
}

function PipelineStep({ index, step, onClick, title, desc, highlight }: any) {
    const isActive = step === index;
    const isPast = step > index;

    return (
        <div
            onClick={onClick}
            className={`
                group relative pl-10 cursor-pointer transition-all duration-500
                ${isActive ? 'opacity-100 scale-100' : 'opacity-50 hover:opacity-80 scale-95'}
            `}
        >
            {/* Step Number Bubble */}
            <div className={`
                absolute left-6 top-1 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                ${isActive ? 'bg-orange-600 text-white scale-110 shadow-lg' : isPast ? 'bg-orange-200 text-orange-700' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200'}
            `}>
                0{index + 1}
            </div>

            <div className="space-y-2">
                <h3 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-300 group-hover:text-zinc-400'}`}>
                    {title}
                </h3>
                <p className={`text-lg transition-colors leading-relaxed font-light ${isActive ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {desc.split(highlight).map((part: string, i: number) => (
                        <span key={i}>
                            {i > 0 && <span className={`font-medium ${isActive ? 'text-orange-600' : 'text-zinc-400'}`}>{highlight}</span>}
                            {part}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}
