import { useVideoConfig, AbsoluteFill, useCurrentFrame } from 'remotion';
import { FeedScene } from './scenes/FeedScene';
import { MapScene } from './scenes/MapScene';
import { BusinessScene } from './scenes/BusinessScene';
import { RetentionScene } from './scenes/RetentionScene';
import React from 'react';

export const MainDemo = () => {
    const { width, height, fps } = useVideoConfig(); // Added fps
    const frame = useCurrentFrame();

    // Sequence Timing (Duplicated from original PhoneModel logic)
    const feedDuration = 4 * fps;       // 0s - 4s
    const mapDuration = 4 * fps;        // 4s - 8s
    const businessDuration = 3 * fps;   // 8s - 11s
    const retentionDuration = 4 * fps;  // 11s - 15s

    // Content Switching Logic
    const CurrentScene = () => {
        if (frame < feedDuration) {
            return <FeedScene frame={frame} />;
        }
        if (frame < feedDuration + mapDuration) {
            return <MapScene frame={frame - feedDuration} />;
        }
        if (frame < feedDuration + mapDuration + businessDuration) {
            return <BusinessScene frame={frame - (feedDuration + mapDuration)} />;
        }
        return <RetentionScene frame={frame - (feedDuration + mapDuration + businessDuration)} />; // Fixed: Pass relative frame
    };

    // Unified Animation Logic (Shared by all layers)
    const floatY = Math.cos(frame / 45) * 15; // Vertical bob
    const rotationY = Math.sin(frame / 45) * 0.1; // Horizontal tilt
    const rotationX = Math.cos(frame / 45) * 0.05; // Subtle pitch

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <div
                className="w-full h-full relative flex items-center justify-center overflow-visible"
                style={{ perspective: '1200px' }}
            >
                {/* --- PREMIUM IPHONE-STYLE WRAPPER --- */}
                {/* This wrapper ensures all layers (Frame, Bezel, Screen) rotate in perfect sync */}
                <div
                    className="relative flex items-center justify-center transition-transform duration-75 ease-out"
                    style={{
                        transform: `
                            translateY(${floatY}px) 
                            rotateY(${rotationY * (180 / Math.PI)}deg)
                            rotateX(${rotationX * (180 / Math.PI)}deg)
                        `,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* LAYER 1: OUTER SILVER FRAME (Premium Metal) */}
                    <div
                        className="absolute shadow-2xl bg-gradient-to-br from-[#f8f8f8] via-[#d1d1d1] to-[#b0b0b0]"
                        style={{
                            width: '430px',
                            height: '870px',
                            borderRadius: '62px',
                            transform: 'translateZ(-10px)', // Sit slightly back
                            border: '1px solid rgba(255,255,255,0.5)',
                        }}
                    />

                    {/* LAYER 2: INNER BLACK BEZEL */}
                    <div
                        className="absolute bg-[#0a0a0a]"
                        style={{
                            width: '416px',
                            height: '856px',
                            borderRadius: '56px',
                            transform: 'translateZ(-2px)',
                        }}
                    />

                    {/* LAYER 3: SCREEN CONTENT */}
                    <div
                        className="relative bg-[#FFFBF7] overflow-hidden"
                        style={{
                            width: '400px',
                            height: '840px',
                            borderRadius: '48px',
                            transform: 'translateZ(2px)', // Sit slightly forward
                        }}
                    >
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-[40px] z-50 flex justify-between px-8 items-center text-xl font-bold text-zinc-900 select-none">
                            <span>9:41</span>
                            <div className="w-10 h-5 bg-zinc-900 rounded-sm" />
                        </div>

                        <CurrentScene />
                    </div>

                    {/* Side Button Simulation (Optional but adds to the look) */}
                    <div className="absolute top-1/4 -right-[216px] w-[4px] h-[60px] bg-zinc-400 rounded-l-sm" /> {/* Power */}
                    <div className="absolute top-32 -left-[216px] w-[4px] h-[30px] bg-zinc-400 rounded-r-sm" />  {/* Silent */}
                    <div className="absolute top-48 -left-[216px] w-[4px] h-[50px] bg-zinc-400 rounded-r-sm" />  {/* Vol Up */}
                </div>
            </div>
        </AbsoluteFill>
    );
};
