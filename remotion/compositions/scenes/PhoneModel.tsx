
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

export function PhoneModel() {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const group = useRef<THREE.Group>(null);

    // Sequence Timing
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

    // Content Switching Logic
    const CurrentScene = () => {
        if (frame < feedDuration) return <FeedScene />;
        if (frame < feedDuration + mapDuration) return <MapScene />;
        if (frame < feedDuration + mapDuration + businessDuration) return <BusinessScene />;
        return <RetentionScene />;
    };

    return (
        <group ref={group}>
            {/* Phone Chassis (iPhone-ish) */}
            <RoundedBox args={[2.2, 4.4, 0.3]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Screen Emissive Area - REMOVED to prevent z-fighting/occlusion */}
            {/* The Html component below creates its own black background */}

            {/* Dynamic Content Overlay */}
            <Html
                transform
                occlude={false} // Disable occlusion to ensure it always renders on top
                position={[0, 0, 0.35]} // Push well beyond chassis depth (0.15)
                zIndexRange={[100, 0]}
                style={{
                    width: '300px',
                    height: '610px',
                    background: '#FFFBF7', // Force Light Theme Background
                    borderRadius: '30px',
                    overflow: 'hidden',
                    pointerEvents: 'none' // Ensure it doesn't block orbit controls if used
                }}
            >
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {/* Status Bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '24px', zIndex: 50, display: 'flex', justifyContent: 'space-between', padding: '0 16px', alignItems: 'center', color: 'white', fontSize: '10px', fontWeight: 'bold' }}>
                        <span>9:41</span>
                        <div style={{ width: '16px', height: '10px', background: 'white', borderRadius: '2px' }} />
                    </div>

                    <CurrentScene />
                </div>
            </Html>
        </group>
    );
}

