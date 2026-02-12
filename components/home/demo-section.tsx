"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Player, PlayerRef } from "@remotion/player"
import { MainDemo } from "@/remotion/compositions/MainDemo"
import { motion } from "framer-motion"
import { LLMChatWindow } from "./llm-chat-window"

import { WaitlistForm } from "./waitlist-form"

export function DemoSection() {
    const playerRef = useRef<PlayerRef>(null)

    return (
        <section className="py-4 md:py-12 px-4 w-full bg-[#FFFBF7] min-h-[85vh] flex flex-col justify-center items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* --- LEFT COLUMN: CTA + WAITLIST --- */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                    <h1 className="hidden lg:block text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[1.1]">
                        The Future of <span className="text-amber-500">Food Discovery</span>
                    </h1>
                    <p className="hidden lg:block text-xl text-zinc-500 max-w-lg">
                        Join the waitlist to be the first to experience the new way to find food.
                    </p>

                    <div className="w-full max-w-md">
                        <WaitlistForm />
                    </div>
                </div>

                {/* --- RIGHT COLUMN: 3D PHONE + LLM CHAT --- */}
                <div className="order-1 lg:order-2 flex justify-center items-center relative h-[500px] md:h-[700px] w-full">
                    <div className="relative w-full h-full flex items-center justify-center scale-[0.8] md:scale-100 origin-center transition-transform duration-500">
                        <div className="w-full h-full -translate-x-[20%] md:translate-x-0 transition-transform duration-500 flex items-center justify-center">
                            <Player
                                ref={playerRef}
                                component={MainDemo}
                                durationInFrames={450}
                                compositionWidth={600}
                                compositionHeight={900}
                                fps={30}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                controls={false}
                                loop
                                autoPlay
                            />
                        </div>
                        <div className="block">
                            <LLMChatWindow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

