
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Heart, Star, Calendar } from 'lucide-react';

export const RetentionScene = ({ frame }: { frame: number }) => {
    // const frame = useCurrentFrame();

    // Heart Beat Animation
    const scale = interpolate(frame % 30, [0, 15, 30], [1, 1.2, 1]);

    return (
        <div className="w-full h-full bg-[#FFFBF7] flex flex-col items-center justify-center relative overflow-hidden font-sans">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200 via-transparent to-transparent" />

            {/* Review Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-orange-100 flex flex-col items-center gap-4 w-64 animate-in fade-in zoom-in duration-700">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                    😋
                </div>

                <div className="text-center space-y-1">
                    <h3 className="font-bold text-zinc-900 text-lg">Delicious!</h3>
                    <p className="text-zinc-500 text-xs">You visited 3 times this month.</p>
                </div>

                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                    ))}
                </div>

                <div className="w-full h-px bg-zinc-100" />

                <div className="flex items-center gap-3 w-full bg-orange-50 p-3 rounded-xl">
                    <Calendar className="w-8 h-8 text-orange-600" />
                    <div className="text-left">
                        <div className="text-[10px] font-bold text-orange-800 uppercase tracking-wide">Next Reward</div>
                        <div className="text-xs text-orange-600 font-medium">Free Coffee (2/5)</div>
                    </div>
                </div>
            </div>

            {/* Floating Hearts */}
            <div className="absolute top-20 right-10 text-orange-400" style={{ transform: `scale(${scale})` }}>
                <Heart className="w-8 h-8 fill-orange-400" />
            </div>
            <div className="absolute bottom-32 left-8 text-orange-300" style={{ transform: `scale(${scale})`, animationDelay: '0.1s' }}>
                <Heart className="w-6 h-6 fill-orange-300" />
            </div>
        </div>
    );
};
