
import React from 'react';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import { Check, Wallet } from 'lucide-react';

export const BusinessScene = () => {
    const frame = useCurrentFrame();
    const fps = 30;

    const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const scale = interpolate(frame, [0, 20], [0.5, 1], { extrapolateRight: 'clamp' });

    return (
        <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-center p-6">

            <div
                className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                style={{ opacity, transform: `scale(${scale})` }}
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                    <Check className="w-8 h-8 stroke-[3]" />
                </div>
            </div>

            <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ opacity: interpolate(frame, [10, 30], [0, 1]) }}
            >
                Customer Arrived!
            </h3>

            <div
                className="flex items-center gap-2 text-green-400 bg-green-900/20 px-4 py-2 rounded-full border border-green-500/20"
                style={{
                    opacity: interpolate(frame, [20, 40], [0, 1]),
                    transform: `translateY(${interpolate(frame, [20, 40], [20, 0])}px)`
                }}
            >
                <Wallet className="w-4 h-4" />
                <span className="font-semibold text-sm">Sale Completed</span>
            </div>

        </div>
    );
};
