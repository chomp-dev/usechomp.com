"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    })

    // Update active step based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest < 0.33) setActiveStep(0)
            else if (latest < 0.66) setActiveStep(1)
            else setActiveStep(2)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[1.1]"
                    >
                        From <span className="text-amber-500">Scrolling</span> to <span className="text-amber-500">Strolling</span>
                    </motion.h2>
                    <p className="mt-4 text-xl text-zinc-500 max-w-2xl mx-auto">
                        We bridge the gap between digital discovery and real-world dining experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-zinc-100 -z-10">
                        <motion.div
                            className="h-full bg-amber-400 origin-left"
                            style={{ scaleX: scrollYProgress }}
                        />
                    </div>

                    <PipelineCard
                        index={0}
                        title="Discovery"
                        desc="Users discover food by scrolling their feed or searching in a LLM."
                        icon="📱"
                        active={activeStep >= 0}
                    />
                    <PipelineCard
                        index={1}
                        title="Conversion"
                        desc="Real customers walking through the door. We drive tangible foot traffic."
                        icon=""
                        active={activeStep >= 1}
                    />
                    <PipelineCard
                        index={2}
                        title="Retention"
                        desc="Users trust us for good food. Restaurants trust us for consistent volume."
                        icon="🔄"
                        active={activeStep >= 2}
                    />
                </div>
            </div>
        </section>
    )
}

function PipelineCard({ index, title, desc, icon, active }: { index: number, title: string, desc: string, icon: string, active: boolean }) {
    return (
        <div className={`
            relative p-8 rounded-2xl border transition-all duration-500
            ${active
                ? 'bg-white border-amber-200 shadow-xl shadow-amber-900/5 scale-100 opacity-100'
                : 'bg-zinc-50 border-zinc-100 scale-95 opacity-50 grayscale'}
        `}>
            {/* Step Number */}
            <div className={`
                absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2
                ${active ? 'bg-amber-500 border-white text-white' : 'bg-zinc-200 border-white text-zinc-400'}
            `}>
                {index + 1}
            </div>

            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">{title}</h3>
            <p className="text-zinc-500 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}
