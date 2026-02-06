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
        <section className="py-12 md:py-24 px-4 w-full flex flex-col items-center gap-16">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

                {/* Left Phase Description - The Pipeline */}
                <div className="space-y-12 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                        From <span className="text-orange-500">Scrolling</span> to <span className="text-orange-500">Strolling</span>.
                    </h2>

                    {/* Animated Pipeline Container */}
                    <div className="relative pl-8 border-l border-white/10 ml-4 lg:ml-0 overflow-hidden">

                        {/* Animated Progress Line */}
                        <div
                            className="absolute left-[-1px] top-0 w-[3px] bg-gradient-to-b from-orange-500 to-orange-600 transition-all duration-1000 ease-linear"
                            style={{
                                height: step === 0 ? '33%' : step === 1 ? '66%' : '100%',
                                opacity: 1
                            }}
                        />

                        <div className="flex flex-col gap-12">
                            <PipelineStep
                                isActive={step >= 0}
                                isCurrent={step === 0}
                                title="Discovery"
                                desc="Users discover food simply by scrolling their feed."
                                stepNum="01"
                            />
                            <PipelineStep
                                isActive={step >= 1}
                                isCurrent={step === 1}
                                title="Navigation"
                                desc="One tap to open the map and find the location."
                                stepNum="02"
                            />
                            <PipelineStep
                                isActive={step >= 2}
                                isCurrent={step === 2}
                                title="Conversion"
                                desc="Real customers walking through the door."
                                stepNum="03"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Phone Demo Animation */}
                <div className="flex justify-center perspective-[1000px]">
                    <div className="relative w-[340px] h-[720px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-900/20 transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]">
                        <Player
                            component={MainDemo}
                            durationInFrames={330}
                            fps={30}
                            compositionWidth={800}
                            compositionHeight={1600}
                            style={{ width: '100%', height: '100%' }}
                            controls={false}
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
