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

    // Float Animation (Simulated using CSS transform on the container)
    // We can use frame to calculate the offset to match the previous 3D animation
    const floatY = Math.cos(frame / 30 / 2) * 10; // Simple bobbing (pixels)

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {/* FLOATING CONTAINER WRAPPER */}
            <div
                className="w-full h-full relative flex items-center justify-center"
                style={{ transform: `translateY(${floatY}px)` }}
            >

                {/* LAYER 1: 3D PHONE CHASSIS (Background Body) */}
                <div className="absolute inset-0 z-0">
                    <ThreeCanvas width={width} height={height} style={{ backgroundColor: 'transparent' }}>
                        <ambientLight intensity={0.7} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} />
                        <Suspense fallback={null}>
                            <Environment preset="city" />
                            <PhoneModel frame={frame} />
                        </Suspense>
                        {/* Adjusted Camera to frame the chassis perfectly behind the div */}
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                    </ThreeCanvas>
                </div>

                {/* LAYER 2: SCREEN CONTENT (Foreground Overlay) */}
                {/* 
                    Sizing Strategy:
                    The 3D Canvas renders the phone. Perspective makes sizing tricky.
                    However, we know the previous iteration had a 415px x 870px screen "inside" the phone.
                    Visual testing suggests the phone body is slightly larger.
                    We will center this div. The 3D phone behind acts as the border.
                */}
                <div
                    className="relative z-10 bg-[#FFFBF7] overflow-hidden"
                    style={{
                        width: '385px', // Tuned width to fit inside the visual chassis
                        height: '810px',
                        borderRadius: '46px', // Matched to visual bezel curve
                        boxShadow: '0 0 20px rgba(0,0,0,0.1)' // Inner shadow for depth?
                    }}
                >
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[40px] z-50 flex justify-between px-8 items-center text-xl font-bold text-zinc-900 select-none">
                        <span>9:41</span>
                        <div className="w-10 h-5 bg-zinc-900 rounded-sm" />
                    </div>

                    <CurrentScene />
                </div>

                {/* Optional: Glare/Reflection Overlay could go here (Layer 3) */}

            </div>
        </AbsoluteFill>
    );
};
