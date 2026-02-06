
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

            {/* Destination Pin (Pulsing) */}
            <div className="absolute top-[35%] left-[64%] -translate-x-1/2 -translate-y-[100%] z-20">
                <div className="relative group">
                    <MapPin className="w-12 h-12 text-orange-500 fill-orange-500 drop-shadow-2xl animate-bounce" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg shadow-xl whitespace-nowrap">
                        Burger Joint
                    </div>
                </div>
            </div>

            {/* Path Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                    x1="20%" y1="80%"
                    x2="64%" y2="35%"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeDasharray="8 4"
                    className="opacity-50"
                />
            </svg>

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
