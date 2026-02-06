import { ThreeCanvas } from '@remotion/three';
import { useVideoConfig, AbsoluteFill, useCurrentFrame } from 'remotion';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PhoneModel } from './scenes/PhoneModel';
import { FeedScene } from './scenes/FeedScene';
import { MapScene } from './scenes/MapScene';
import { BusinessScene } from './scenes/BusinessScene';
import { RetentionScene } from './scenes/RetentionScene';
import { Suspense } from 'react';

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

    // Unified Animation Logic (Shared by 3D and 2D)
    const floatY = Math.cos(frame / 45) * 15; // Vertical bob
    const rotationY = Math.sin(frame / 45) * 0.15; // Horizontal rotation
    const rotationX = Math.cos(frame / 45) * 0.05; // Subtle pitch

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <div
                className="w-full h-full relative flex items-center justify-center overflow-visible"
                style={{
                    perspective: '1200px', // Creates 3D space for children
                }}
            >
                {/* --- LAYER 1: 3D PHONE CHASSIS (Background) --- */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        transform: `translateY(${floatY}px)`,
                    }}
                >
                    <ThreeCanvas width={width} height={height} style={{ backgroundColor: 'transparent' }}>
                        <ambientLight intensity={0.8} />
                        <spotLight position={[5, 5, 5]} intensity={1} angle={0.15} penumbra={1} />
                        <pointLight position={[-5, 5, -5]} intensity={0.5} />
                        <Suspense fallback={null}>
                            <Environment preset="city" />
                            <PhoneModel frame={frame} />
                        </Suspense>
                        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />
                    </ThreeCanvas>
                </div>

                {/* --- LAYER 2: 2D SCREEN CONTENT (Foreground Overlay) --- */}
                <div
                    className="relative z-10 bg-[#FFFBF7] shadow-2xl transition-transform duration-75 ease-out"
                    style={{
                        width: '392px',
                        height: '820px',
                        borderRadius: '48px',
                        overflow: 'hidden',
                        transform: `
                            translateY(${floatY}px) 
                            rotateY(${rotationY * (180 / Math.PI)}deg)
                            rotateX(${rotationX * (180 / Math.PI)}deg)
                        `,
                        transformStyle: 'preserve-3d',
                        border: '1px solid rgba(0,0,0,0.1)'
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
