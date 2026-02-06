
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { MapPin } from 'lucide-react';

export const MapScene = () => {
    const frame = useCurrentFrame();

    // Zoom in effect
    const scale = interpolate(frame, [0, 30], [1.2, 1], { extrapolateRight: 'clamp' });
    const userProgress = interpolate(frame, [30, 90], [0, 1], { extrapolateRight: 'clamp' });

    // Path Logic (Simple Linear Interpolation)
    const startX = 20;
    const startY = 80;
    const endX = 64;
    const endY = 35;

    const currentX = startX + (endX - startX) * userProgress;
    const currentY = startY + (endY - startY) * userProgress;

    return (
        <div className="w-full h-full bg-zinc-800 relative overflow-hidden">
            {/* Map Grid */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    transform: `scale(${scale})`,
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    transformOrigin: 'center center'
                }}
            />

            {/* Destination Pin */}
            <div className="absolute top-[35%] left-[64%] -translate-x-1/2 -translate-y-[100%]">
                <div className="relative">
                    <MapPin className="w-8 h-8 text-orange-500 fill-orange-500 animate-bounce" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-white text-black text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap">
                        Burger Joint
                    </div>
                </div>
            </div>

            {/* User Dot */}
            <div
                className="absolute w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg z-10"
                style={{
                    top: `${currentY}%`,
                    left: `${currentX}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </div>
    );
};
