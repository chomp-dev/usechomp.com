
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
            {/* Thinner, Silver/White premium look */}
            <RoundedBox args={[2.5, 5.1, 0.12]} radius={0.45} smoothness={4}>
                <meshStandardMaterial
                    color="#f0f0f0"
                    metalness={0.7}
                    roughness={0.2}
                />
            </RoundedBox>

            {/* --- SCREEN BEZEL RING --- */}
            {/* Darker inner ring to define the screen edge */}
            <RoundedBox args={[2.42, 5.02, 0.13]} radius={0.42} smoothness={4} position={[0, 0, 0.01]}>
                <meshStandardMaterial
                    color="#e0e0e0"
                    metalness={0.8}
                    roughness={0.1}
                />
            </RoundedBox>

            {/* --- EXTERNAL BUTTONS (3D CUES) --- */}
            {/* Silver Power Button */}
            <RoundedBox args={[0.03, 0.6, 0.06]} radius={0.02} position={[1.26, 0.8, 0]}>
                <meshStandardMaterial color="#d1d1d1" metalness={1} roughness={0.2} />
            </RoundedBox>

            {/* Volume Up */}
            <RoundedBox args={[0.03, 0.3, 0.06]} radius={0.02} position={[-1.26, 1.0, 0]}>
                <meshStandardMaterial color="#d1d1d1" metalness={1} roughness={0.2} />
            </RoundedBox>

            {/* Volume Down */}
            <RoundedBox args={[0.03, 0.3, 0.06]} radius={0.02} position={[-1.26, 0.6, 0]}>
                <meshStandardMaterial color="#d1d1d1" metalness={1} roughness={0.2} />
            </RoundedBox>

            {/* Silent Switch */}
            <RoundedBox args={[0.03, 0.15, 0.06]} radius={0.02} position={[-1.26, 1.3, 0]}>
                <meshStandardMaterial color="#d1d1d1" metalness={1} roughness={0.2} />
            </RoundedBox>
        </group>
    );
}

