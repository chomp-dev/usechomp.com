"use client"

import { useState, useEffect } from "react"
import { MapPin, Store, ArrowRight } from "lucide-react"
import { Player } from "@remotion/player"
import { MainDemo } from "@/remotion/compositions/MainDemo"

export function DemoSection() {
    const [step, setStep] = useState(0)

    // Sync the text description with the known video timings
    useEffect(() => {
        const times = [4000, 4000, 3000] // 0-4s, 4-8s, 8-11s
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 3)
        }, 4000) // Rough sync, ideally we'd use onFrameUpdate from Player but this is simple

        // Better sync logic: Just set intervals that match the summed durations
        const t1 = setTimeout(() => setStep(1), 4000)
        const t2 = setTimeout(() => setStep(2), 8000)
        const t3 = setTimeout(() => setStep(0), 11000)

        const loop = setInterval(() => {
            setStep(0)
            setTimeout(() => setStep(1), 4000)
            setTimeout(() => setStep(2), 8000)
        }, 11000)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
            clearInterval(loop)
        }
    }, [])


    return (
        <section className="py-12 md:py-24 px-4 w-full">
            {/* Background Gradients Removed - Inherited from Page */}

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Phase Description */}
                <div className="space-y-8 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        From <span className="text-orange-500">Scrolling</span> to <span className="text-orange-500">Strolling</span>.
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                        We don't just get views. We drive physical foot traffic to local businesses through a seamless discovery pipeline.
                    </p>

                    <div className="flex flex-col gap-6 pt-4">
                        <StepIndicator
                            isActive={step === 0}
                            icon={<ArrowRight className="rotate-90" />}
                            title="Discovery"
                            desc="Users discover food through our viral video feed."
                        />
                        <StepIndicator
                            isActive={step === 1}
                            icon={<MapPin />}
                            title="Navigation"
                            desc="One tap to find the location on the map."
                        />
                        <StepIndicator
                            isActive={step === 2}
                            icon={<Store />}
                            title="Conversion"
                            desc="Real customers walking through the door."
                        />
                    </div>
                </div>

                {/* Right Phone Demo Animation (Remotion Player) */}
                <div className="flex justify-center">
                    <div className="relative w-[340px] h-[720px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-900/20">
                        <Player
                            component={MainDemo}
                            durationInFrames={330}
                            fps={30}
                            compositionWidth={800} // Internal render resolution
                            compositionHeight={1600}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            controls={false} // Hide playback controls
                            loop
                            autoPlay
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

function StepIndicator({ isActive, icon, title, desc }: { isActive: boolean, icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className={`flex items-start gap-4 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
            <div className={`p-3 rounded-full ${isActive ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-400'} transition-colors duration-500`}>
                <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
                    {icon}
                </div>
            </div>
            <div className="text-left">
                <h3 className={`text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    )
}
