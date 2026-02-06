
import { Composition } from 'remotion';
import { MainDemo } from './compositions/MainDemo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="MainDemo"
                component={MainDemo}
                durationInFrames={330} // 11 seconds * 30 fps
                fps={30}
                width={1280}
                height={720}
            />
        </>
    );
};
