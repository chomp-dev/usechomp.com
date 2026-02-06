
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Search, Map as MapIcon, RotateCw, Plus, User, RefreshCw, MapPin } from 'lucide-react';

export const MapScene = ({ frame }: { frame: number }) => {
    // const frame = useCurrentFrame();

    // Zoom in effect
    const scale = interpolate(frame, [0, 60], [1, 1.2]);
    const translateY = interpolate(frame, [0, 60], [0, 100]);

    return (
        <div className="w-full h-full bg-[#3B4254] relative overflow-hidden font-sans">
            {/* --- SEARCH BAR OVERLAY --- */}
            <div className="absolute top-12 left-4 right-4 z-30">
                <div className="bg-white rounded-lg shadow-lg h-10 flex items-center px-4 gap-2">
                    <Search className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm text-zinc-400">Search places...</span>
                </div>
                <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-zinc-600 shadow-sm">0.5 mi</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-zinc-600 shadow-sm">1 mi</span>
                    <span className="px-3 py-1 bg-[#E6BF8E] rounded-full text-xs font-medium text-white shadow-sm">2 mi</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-zinc-600 shadow-sm">5 mi</span>
                </div>
            </div>

            {/* --- REFRESH BUTTON --- */}
            <div className="absolute top-36 right-4 z-30 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-zinc-700" />
            </div>

            {/* --- MAP CONTENT --- */}
            <div
                className="w-full h-full relative"
                style={{
                    transform: `scale(${scale}) translateY(${translateY}px)`,
                    transformOrigin: 'center center'
                }}
            >
                {/* Map Blocks (Simulated) */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-20 h-16 bg-white/20" />
                    <div className="absolute top-40 left-32 w-40 h-40 bg-white/10" />
                    <div className="absolute bottom-32 right-10 w-32 h-64 bg-white/10" />
                    <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-800/30" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-zinc-800/30" />
                </div>

                {/* Pins */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center"
                        style={{
                            top: `${20 + (i * 13) % 60}%`,
                            left: `${15 + (i * 17) % 70}%`,
                        }}
                    >
                        <div className="w-8 h-8 bg-[#E6BF8E] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                            <div className="text-white text-[10px] font-bold">Show</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- BOTTOM NAV --- */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-zinc-100 flex items-center justify-around pb-4 z-50">
                <NavIcon icon={<RotateCw className="w-5 h-5" />} label="Wat..." />
                <NavIcon icon={<MapPin className="w-5 h-5 text-[#E6BF8E]" />} label="Map" active />
                <div className="w-12 h-12 bg-[#E6BF8E] rounded-full flex items-center justify-center -mt-4 shadow-lg shadow-orange-900/10">
                    <Plus className="w-6 h-6 text-white" />
                </div>
                <NavIcon icon={<Search className="w-5 h-5" />} label="Exp..." />
                <NavIcon icon={<User className="w-5 h-5" />} label="Pro..." />
            </div>
        </div>
    );
};

function NavIcon({ icon, label, active }: any) {
    return (
        <div className={`flex flex-col items-center gap-1 ${active ? 'text-zinc-900' : 'text-zinc-400'}`}>
            {icon}
            <span className="text-[9px] font-medium">{label}</span>
        </div>
    )
}
