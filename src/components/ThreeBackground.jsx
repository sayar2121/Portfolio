import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Animated particle field
function ParticleField() {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating glowing orb
function GlowOrb({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Significantly increased movement radius and speed for noticeable sweeping motion
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 1.2) * 4;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 0.6) * 10;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={3}
          roughness={1}
          metalness={0}
          transparent
          opacity={0.15}
          depthWrite={false}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Geometric floating shapes
function FloatingGeometry({ position, geometry = 'octahedron', color, speed = 1, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  const GeomComponent = () => {
    if (geometry === 'octahedron') return <octahedronGeometry args={[scale, 0]} />;
    if (geometry === 'icosahedron') return <icosahedronGeometry args={[scale, 0]} />;
    if (geometry === 'torus') return <torusGeometry args={[scale * 0.8, scale * 0.2, 16, 32]} />;
    if (geometry === 'torusKnot') return <torusKnotGeometry args={[scale * 0.7, scale * 0.15, 64, 12]} />;
    return <dodecahedronGeometry args={[scale, 0]} />;
  };

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <GeomComponent />
        <meshStandardMaterial
          color={color}
          wireframe={true}
          transparent
          opacity={0.15}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

// Grid plane at bottom
function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.05} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
        <pointLight position={[0, 10, -10]} intensity={0.5} color="#EC4899" />

        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />

        {/* Large glowing orbs */}
        <GlowOrb position={[-6, 2, -5]} color="#00D4FF" speed={0.5} scale={2.5} />
        <GlowOrb position={[6, -2, -6]} color="#7C3AED" speed={0.7} scale={2} />
        <GlowOrb position={[0, 4, -8]} color="#EC4899" speed={0.4} scale={1.5} />
        
        {/* Additional glowing orbs spread throughout the background */}
        <GlowOrb position={[-8, -4, -10]} color="#5B7CFF" speed={0.3} scale={3.5} />
        <GlowOrb position={[8, 5, -12]} color="#00D4FF" speed={0.6} scale={2.2} />
        <GlowOrb position={[-2, -3, -6]} color="#B44FFF" speed={0.8} scale={1.8} />
        <GlowOrb position={[4, 1, -4]} color="#EC4899" speed={0.5} scale={1.2} />
        <GlowOrb position={[0, -5, -15]} color="#7C3AED" speed={0.2} scale={4} />

        <GridPlane />
      </Canvas>
    </div>
  );
}
