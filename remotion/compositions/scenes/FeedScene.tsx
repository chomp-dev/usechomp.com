
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
                    <div key={i} className="w-full aspect-[9/16] bg-zinc-800 rounded-xl relative border border-white/10 overflow-hidden shrink-0 shadow-2xl">
                        {/* Fake Video Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${i % 3 === 0 ? 'from-orange-500/20 to-red-500/20' :
                                i % 3 === 1 ? 'from-blue-500/20 to-purple-500/20' :
                                    'from-green-500/20 to-emerald-500/20'
                            }`} />

                        {/* Play Button Icon Center */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                            <div className="w-3/4 h-3 bg-white/80 rounded mb-2 shadow-sm" />
                            <div className="w-1/2 h-2 bg-white/60 rounded" />
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
