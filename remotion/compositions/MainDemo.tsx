
import { ThreeCanvas } from '@remotion/three';
import { useVideoConfig, AbsoluteFill } from 'remotion';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PhoneModel } from './scenes/PhoneModel';
import { Suspense } from 'react';

export const MainDemo = () => {
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <ThreeCanvas width={width} height={height} style={{ backgroundColor: 'transparent' }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />

                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <PhoneModel />
                </Suspense>

                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            </ThreeCanvas>
        </AbsoluteFill>
    );
};
