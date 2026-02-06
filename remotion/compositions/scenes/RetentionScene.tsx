
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Heart, Star, Calendar, Gift, Check } from 'lucide-react';

export const RetentionScene = ({ frame }: { frame: number }) => {
    // Loyalty Card Animation
    // 0-10: Card enters
    // 10-25: Stamping animation
    // 30+: Celebration

    const cardScale = interpolate(frame, [0, 10], [0.8, 1], { extrapolateRight: 'clamp' });
    const cardOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

    // Stamp Animation
    const stampScale = interpolate(frame, [15, 20, 25], [3, 0.8, 1], { extrapolateRight: 'clamp' });
    const stampOpacity = interpolate(frame, [15, 20], [0, 1], { extrapolateRight: 'clamp' });
    const showConfetti = frame > 25;

    return (
        <div className="w-full h-full bg-[#FFFBF7] flex flex-col items-center justify-center relative overflow-hidden font-sans p-6 text-center">

            {/* Background Decor */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent" />

            <h2 className="text-2xl font-black text-zinc-900 mb-8 relative z-10">Loyalty Rewards</h2>

            {/* Loyalty Card */}
            <div
                className="w-full bg-white rounded-2xl shadow-xl border border-amber-100 p-6 relative z-10 overflow-hidden"
                style={{
                    transform: `scale(${cardScale})`,
                    opacity: cardOpacity
                }}
            >
                <div className="flex justify-between items-center mb-6">
                    <div className="text-left">
                        <div className="font-bold text-lg text-zinc-900">Joe's coffee</div>
                        <div className="text-xs text-zinc-400">5 stamps = Free Coffee</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">☕</div>
                </div>

                <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4].map(idx => (
                        <div key={idx} className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-sm border-2 border-amber-200">
                            <Check className="w-6 h-6" />
                        </div>
                    ))}

                    {/* The 5th Stamp (Animating) */}
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center border-2 border-dashed border-zinc-300 relative">
                        <div
                            className="absolute inset-0 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg"
                            style={{
                                transform: `scale(${stampScale})`,
                                opacity: stampOpacity
                            }}
                        >
                            <Gift className="w-6 h-6 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Reward Unlocked Message */}
                <div
                    className="mt-6 bg-amber-50 rounded-xl p-3 transform transition-all"
                    style={{
                        opacity: showConfetti ? 1 : 0,
                        transform: `translateY(${showConfetti ? 0 : 20}px)`
                    }}
                >
                    <div className="text-sm font-bold text-amber-600">🎉 Reward Unlocked!</div>
                    <div className="text-[10px] text-amber-600/80">Redeem your free coffee now</div>
                </div>
            </div>

            {/* Confetti Particles (Simple Implementation) */}
            {showConfetti && [...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        backgroundColor: ['#f59e0b', '#ef4444', '#3b82f6'][i % 3],
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 30}deg) translateY(-140px)`,
                        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                    }}
                />
            ))}

        </div>
    );
};
