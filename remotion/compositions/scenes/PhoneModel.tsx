
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

    // Note: Rotation/Float is now handled by the parent container in MainDemo
    // to ensure the 2D content and 3D frame move in perfect sync.

    return (
        <group ref={group}>
            {/* Phone Chassis */}
            <RoundedBox args={[2.3, 4.5, 0.3]} radius={0.25} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* HOLE / MASK (To allow 2D content behind to show through) */}
            {/* We don't render anything in the center, or we renders a 'frame' only. 
                Since this is a solid block, we can't easily make a hole without CSG.
                ALTERNATIVE: Render the backing as a "Mask" material that writes to depth buffer but is transparent?
                OR: Just accept that the chassis is a solid block behind?
                WAIT: If the chassis is solid, it will BLOCK the screen behind it.
                
                FIX: We need to use a 'Ring' or just 4 boxes to make a frame? 
                OR: Use opacity?
                
                BETTER APPROACH for "Overlay":
                Render the Screen Content IN FRONT of the 3D Phone?
                If Screen is in front, we don't need a hole.
                But then the phone bezel doesn't cover the corners.
                
                Reverting to "Standard 3D" model approach for the shape:
                We need a "Frame" geometry. 
                Let's make value "Inner Screen" black/transparent?
                If we use a RoundedBox, it's solid.
                
                Let's try positioning the Screen ON TOP of the phone, and giving the Screen a border?
                No, the proper way is to have the Phone Frame IN FRONT.
                
                How to make a hole in R3F easily?
                Use `ringGeometry`? No, phone is rectangular.
                Use `ExtrudeGeometry` with a hole?
                
                SIMPLER HACK:
                Render the "Backing" with `colorWrite={false}`?
                This creates a "hole" in the depth buffer? 
                But the screen is a DOM element in a separate div BEHIND the canvas.
                If the canvas is transparent, the empty space is transparent.
                The Solid RoundedBox in the middle is OPAQUE.
                We need to NOT render the middle part.
                
                Let's construct the "Frame" using 4 cubes (Top, Bottom, Left, Right).
            */}

            {/* Left Bezel */}
            <RoundedBox args={[0.15, 4.4, 0.3]} radius={0.05} position={[-1.1, 0, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            {/* Right Bezel */}
            <RoundedBox args={[0.15, 4.4, 0.3]} radius={0.05} position={[1.1, 0, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            {/* Top Bezel */}
            <RoundedBox args={[2.35, 0.15, 0.3]} radius={0.05} position={[0, 2.15, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            {/* Bottom Bezel */}
            <RoundedBox args={[2.35, 0.15, 0.3]} radius={0.05} position={[0, -2.15, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Corner pieces to round it off? This is getting complex geometry-wise.
                Let's use the USER's "Screen In Front" model?
                User: "looks like a phone screen with something on it"
                If we put the screen ON TOP (z-index higher), we just need to round the corners of the SCREEN div perfectly.
                And the Phone Model behind just acts as a "Shadow/Body".
                
                Let's update this to just be the SOLID BODY. 
                And in MainDemo, we put the Screen Div ON TOP.
            */}
            <RoundedBox args={[2.22, 4.44, 0.2]} radius={0.25} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>
        </group>
    );
}

