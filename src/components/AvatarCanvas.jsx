import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Avatar3D from './Avatar3D';
import './AvatarCanvas.css';

/* Mouse-tracking camera rig */
function CameraRig({ children }) {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (mouse.x * 0.25 - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x +=
        (-mouse.y * 0.12 - groupRef.current.rotation.x) * 0.06;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

/* Ambient background sphere */
function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Key light — warm */}
      <directionalLight
        position={[3, 5, 4]}
        intensity={2.2}
        color="#ffe8c8"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Blue rim — left */}
      <pointLight position={[-4, 2, -2]} intensity={3} color="#00D4FF" />
      {/* Purple rim — right */}
      <pointLight position={[4, 1, -3]} intensity={2.5} color="#7C3AED" />
      {/* Fill — front bottom */}
      <pointLight position={[0, -2, 4]} intensity={0.8} color="#ffffff" />
      {/* Top spotlight */}
      <spotLight
        position={[0, 8, 2]}
        angle={0.4}
        penumbra={0.8}
        intensity={3}
        color="#e0f0ff"
        castShadow
      />
    </>
  );
}

export default function AvatarCanvas() {
  return (
    <div className="avatar-canvas-root">
      {/* Glow rings behind canvas */}
      <div className="avatar-bg-glow glow-a" />
      <div className="avatar-bg-glow glow-b" />

      <Canvas
        camera={{ position: [0, 0.5, 4.5], fov: 42 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneLights />

        {/* Ground shadow */}
        <ContactShadows
          position={[0, -2.4, 0]}
          opacity={0.5}
          scale={5}
          blur={2}
          far={4}
          color="#4B0082"
        />

        <CameraRig>
          <Suspense fallback={null}>
            <Avatar3D />
          </Suspense>
        </CameraRig>

        {/* Subtle orbit (auto-rotate slightly) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
        />
      </Canvas>

      {/* Floating label */}
      <div className="avatar-label">
        <span className="label-dot" />
        <span>Interactive — move mouse!</span>
      </div>
    </div>
  );
}
