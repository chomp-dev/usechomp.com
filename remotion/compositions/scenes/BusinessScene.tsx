
import React from 'react';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import { Check, Wallet } from 'lucide-react';

export const BusinessScene = () => {
    const frame = useCurrentFrame();
    const fps = 30;

    const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const scale = interpolate(frame, [0, 20], [0.5, 1], { extrapolateRight: 'clamp' });

    return (
        <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">

            {/* Confetti Background Sim */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: ['#f97316', '#3b82f6', '#22c55e'][i % 3],
                        top: interpolate(frame, [0, 60], [Math.random() * 100, Math.random() * 100 + 100]) + '%',
                        left: Math.random() * 100 + '%',
                        opacity: interpolate(frame, [0, 40], [1, 0]),
                        transform: `scale(${Math.random()})`
                    }}
                />
            ))}

            <div
                className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-500/50 z-10"
                style={{
                    opacity,
                    transform: `scale(${scale})`
                }}
            >
                <Check className="w-16 h-16 text-white stroke-[4]" />
            </div>

            <h3
                className="text-3xl font-bold text-white mb-4 drop-shadow-lg"
                style={{ opacity: interpolate(frame, [10, 30], [0, 1]) }}
            >
                Start Eating!
            </h3>

            <div
                className="flex items-center gap-3 text-green-400 bg-black/40 px-6 py-3 rounded-xl border border-green-500/30 backdrop-blur-md"
                style={{
                    opacity: interpolate(frame, [20, 40], [0, 1]),
                    transform: `translateY(${interpolate(frame, [20, 40], [20, 0])}px)`
                }}
            >
                <Wallet className="w-5 h-5" />
                <span className="font-semibold text-lg">Sale Completed</span>
            </div>

        </div>
    );
};
