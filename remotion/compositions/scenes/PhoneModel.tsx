
import React, { useRef } from 'react';
import { RoundedBox, Html, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useCurrentFrame } from 'remotion';
import { interpolate, useVideoConfig } from 'remotion';
import * as THREE from 'three';
import { FeedScene } from './FeedScene';
import { MapScene } from './MapScene';
import { BusinessScene } from './BusinessScene';
import { RetentionScene } from './RetentionScene';

export function PhoneModel({ frame }: { frame: number }) {
    // const frame = useCurrentFrame(); // Removed hook usage
    const { fps } = useVideoConfig();
    const group = useRef<THREE.Group>(null);

    // Sequence Timing
    const feedDuration = 4 * fps;       // 0s - 4s
    const mapDuration = 4 * fps;        // 4s - 8s
    const businessDuration = 3 * fps;   // 8s - 11s
    const retentionDuration = 4 * fps;  // 11s - 15s

    // Interpolate Rotation based on phase
    const rotationY = interpolate(
        frame,
        [0, feedDuration, feedDuration + 30, feedDuration + mapDuration, feedDuration + mapDuration + 30],
        [0, 0.2, Math.PI / 2, Math.PI / 2, 0], // Rotate 90deg for map phase
        { extrapolateRight: 'clamp' }
    );

    // Simpler rotation: Just a gentle float
    useFrame((state) => {
        if (!group.current) return;
        const time = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(time / 2) * 0.1;
        group.current.position.y = Math.cos(time / 2) * 0.1;
    });

    // Content Switching Logic with Relative Timing
    const CurrentScene = () => {
        if (frame < feedDuration) {
            return <FeedScene frame={frame} />;
        }
        if (frame < feedDuration + mapDuration) {
            // Pass relative frame (starts at 0 when this scene starts)
            return <MapScene frame={frame - feedDuration} />;
        }
        if (frame < feedDuration + mapDuration + businessDuration) {
            return <BusinessScene frame={frame - (feedDuration + mapDuration)} />;
        }
        return <RetentionScene frame={frame - (feedDuration + mapDuration + businessDuration)} />;
    };



    // Calculate Exact Dimensions for Perfect Fit
    // The screen backing geometry is exactly 2.0 units wide x 4.2 units high.
    // We want a high resolution for the HTML content, e.g., 400 pixels per unit.
    const SCREEN_WIDTH_UNITS = 2.0;
    const SCREEN_HEIGHT_UNITS = 4.2;
    const PIXEL_DENSITY = 400; // High resolution (simulates retina)

    const widthPixels = SCREEN_WIDTH_UNITS * PIXEL_DENSITY; // 800px
    const heightPixels = SCREEN_HEIGHT_UNITS * PIXEL_DENSITY; // 1680px
    const scaleFactor = 1 / PIXEL_DENSITY; // Map pixels back to units

    return (
        <group ref={group}>
            {/* Phone Chassis */}
            <RoundedBox args={[2.2, 4.4, 0.3]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* SCREEN BACKING (Fallback / Background) */}
            {/* Perfectly sized to match screen content and radius to prevent peaking */}
            <RoundedBox args={[SCREEN_WIDTH_UNITS, SCREEN_HEIGHT_UNITS, 0.05]} radius={0.15} smoothness={4} position={[0, 0, 0.155]}>
                <meshBasicMaterial color="#FFFBF7" />
            </RoundedBox>

            {/* Dynamic Content Overlay */}
            <Html
                transform
                center
                occlude={false} // Force visibility
                position={[0, 0, 0.19]} // Sit clearly on top
                distanceFactor={1.5}
                zIndexRange={[100, 0]}
                style={{
                    width: '415px',
                    height: '870px',
                    background: '#FFFBF7',
                    borderRadius: '36px',
                    overflow: 'hidden',
                    // Safari/Mobile Fixes
                    transform: 'translateZ(0)', // Force hardware acceleration
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)', // Fix border-radius clipping
                }}
            >
                {/* Reset stacking context for contents */}
                <div className="w-full h-full relative text-zinc-900 bg-[#FFFBF7]">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[40px] z-50 flex justify-between px-8 items-center text-xl font-bold text-zinc-900 select-none">
                        <span>9:41</span>
                        <div className="w-10 h-5 bg-zinc-900 rounded-sm" />
                    </div>

                    <CurrentScene />
                </div>
            </Html>
        </group>
    );
}

