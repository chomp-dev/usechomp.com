
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const FeedScene = () => {
    const frame = useCurrentFrame();

    // Scroll simulation
    const scrollY = interpolate(frame, [0, 100], [0, -600], { extrapolateRight: 'clamp' });

    return (
        <div className="w-full h-full bg-black text-white relative">
            <div
                className="flex flex-col gap-2 p-2"
                style={{ transform: `translateY(${scrollY}px)` }}
            >
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-full aspect-[9/16] bg-zinc-800 rounded-xl relative border border-white/10 overflow-hidden shrink-0">
                        {/* Fake Video Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                            <div className="w-3/4 h-3 bg-white/30 rounded mb-2" />
                            <div className="w-1/2 h-2 bg-white/20 rounded" />
                        </div>

                        {/* Like Button */}
                        <div className="absolute bottom-20 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white/80 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Hint Hand/Cursor */}
            <div
                className="absolute bottom-20 left-1/2 w-8 h-8 bg-white/20 rounded-full backdrop-blur-md z-20 border border-white/50"
                style={{
                    opacity: interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0]),
                    transform: `translate(-50%, ${interpolate(frame, [20, 80], [20, -100])}px)`
                }}
            />
        </div>
    );
}
