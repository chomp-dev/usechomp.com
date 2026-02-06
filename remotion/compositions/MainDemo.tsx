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

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <div className="w-full h-full flex items-center justify-center p-8">
                {/* --- STANDALONE SCREEN CONTENT --- */}
                <div
                    className="relative bg-[#FFFBF7] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden"
                    style={{
                        width: '420px',
                        height: '860px',
                        borderRadius: '54px',
                        border: '8px solid #1a1a1a', // Simple consistent bezel
                    }}
                >
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[40px] z-50 flex justify-between px-8 items-center text-xl font-bold text-zinc-900 select-none">
                        <span>9:41</span>
                        <div className="w-10 h-5 bg-zinc-900 rounded-sm" />
                    </div>

                    <CurrentScene />
                </div>
            </div>
        </AbsoluteFill>
    );
};
