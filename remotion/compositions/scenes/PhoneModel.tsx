
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
    const group = useRef<THREE.Group>(null);

    // Note: This matches the rotation/float logic in MainDemo exactly 
    // to act as the background reference.
    const rotationY = Math.sin(frame / 45) * 0.15;
    const rotationX = Math.cos(frame / 45) * 0.05;

    return (
        <group ref={group} rotation={[rotationX, rotationY, 0]}>
            {/* --- PRIMARY BODY --- */}
            {/* Single high-radius body for that "Premium" curved-edge look */}
            <RoundedBox args={[2.5, 5.0, 0.25]} radius={0.45} smoothness={4}>
                <meshStandardMaterial
                    color="#080808"
                    metalness={0.9}
                    roughness={0.1}
                />
            </RoundedBox>

            {/* --- SCREEN BEZEL RING --- */}
            {/* Slightly smaller and sits on top to define the screen area */}
            <RoundedBox args={[2.42, 4.92, 0.26]} radius={0.42} smoothness={4} position={[0, 0, 0.01]}>
                <meshStandardMaterial
                    color="#141414"
                    metalness={1}
                    roughness={0.05}
                />
            </RoundedBox>

            {/* --- EXTERNAL BUTTONS (3D CUES) --- */}
            {/* Power Button */}
            <RoundedBox args={[0.04, 0.6, 0.08]} radius={0.02} position={[1.26, 0.8, 0]}>
                <meshStandardMaterial color="#0a0a0a" />
            </RoundedBox>

            {/* Volume Up */}
            <RoundedBox args={[0.04, 0.3, 0.08]} radius={0.02} position={[-1.26, 1.0, 0]}>
                <meshStandardMaterial color="#0a0a0a" />
            </RoundedBox>

            {/* Volume Down */}
            <RoundedBox args={[0.04, 0.3, 0.08]} radius={0.02} position={[-1.26, 0.6, 0]}>
                <meshStandardMaterial color="#0a0a0a" />
            </RoundedBox>

            {/* Silent Switch */}
            <RoundedBox args={[0.04, 0.15, 0.08]} radius={0.02} position={[-1.26, 1.3, 0]}>
                <meshStandardMaterial color="#1a1a1a" />
            </RoundedBox>
        </group>
    );
}

