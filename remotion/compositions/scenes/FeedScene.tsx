import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Search, Map as MapIcon, RotateCw, Plus, User } from 'lucide-react';

export const FeedScene = () => {
    const frame = useCurrentFrame();

    // Scroll simulation
    const scrollY = interpolate(frame, [0, 120], [0, -300]);

    return (
        <div className="w-full h-full bg-[#FFFBF7] flex flex-col font-sans text-zinc-900 relative">

            {/* --- TOP BAR --- */}
            <div className="px-5 pt-12 pb-2 bg-[#FFFBF7] z-20 shrink-0">
                <div className="bg-white rounded-full shadow-sm border border-zinc-100 h-10 flex items-center px-4 gap-2">
                    <Search className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm text-zinc-400">Search places...</span>
                </div>
            </div>
        </div>
    );
}
