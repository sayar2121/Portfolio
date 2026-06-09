import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Sphere, Cylinder, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Color palette (Sayar's look) ─── */
const SKIN      = '#c68642';
const SKIN_DARK = '#b5732a';
const HAIR      = '#1a0a00';
const HOODIE_R  = '#9b1c1c'; // red part
const HOODIE_N  = '#1e293b'; // navy part
const HOODIE_S  = '#f1f5f9'; // stripe
const BEARD     = '#2d1a08';
const EYE_W     = '#ffffff';
const EYE_B     = '#1a0a00';
const EYE_IRIS  = '#3b1f0a';
const LIP       = '#8b4513';
const WATCH_S   = '#94a3b8'; // silver
const WATCH_F   = '#1e293b'; // watch face

/* ─── Tiny building block helpers ─── */
function Part({ geo, color, pos = [0,0,0], rot = [0,0,0], scale = 1, roughness = 0.6, metalness = 0 }) {
  return (
    <mesh position={pos} rotation={rot} scale={scale} castShadow>
      {geo}
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

/* ─── Head ─── */
function Head() {
  return (
    <group>
      {/* Main head - round, slightly wide */}
      <Part geo={<sphereGeometry args={[0.52, 32, 32]} />}
        color={SKIN} pos={[0, 0, 0]} scale={[1, 0.95, 0.9]} roughness={0.75} />

      {/* Jaw / chin - slightly lower sphere for chubby face */}
      <Part geo={<sphereGeometry args={[0.44, 32, 32]} />}
        color={SKIN} pos={[0, -0.26, 0.05]} scale={[1, 0.65, 0.85]} roughness={0.75} />

      {/* Cheeks */}
      <Part geo={<sphereGeometry args={[0.22, 16, 16]} />}
        color={SKIN} pos={[-0.36, -0.06, 0.28]} roughness={0.8} />
      <Part geo={<sphereGeometry args={[0.22, 16, 16]} />}
        color={SKIN} pos={[0.36, -0.06, 0.28]} roughness={0.8} />

      {/* Ears */}
      <Part geo={<sphereGeometry args={[0.12, 12, 12]} />}
        color={SKIN_DARK} pos={[-0.52, -0.04, 0]} scale={[0.6, 0.9, 0.5]} roughness={0.8} />
      <Part geo={<sphereGeometry args={[0.12, 12, 12]} />}
        color={SKIN_DARK} pos={[0.52, -0.04, 0]} scale={[0.6, 0.9, 0.5]} roughness={0.8} />

      {/* Nose - slightly bulbous */}
      <Part geo={<sphereGeometry args={[0.1, 12, 12]} />}
        color={SKIN_DARK} pos={[0, -0.1, 0.46]} scale={[1, 0.75, 0.65]} roughness={0.7} />
      {/* Nose tip */}
      <Part geo={<sphereGeometry args={[0.065, 12, 12]} />}
        color={SKIN_DARK} pos={[0, -0.18, 0.49]} roughness={0.7} />

      {/* Nostrils */}
      <Part geo={<sphereGeometry args={[0.03, 8, 8]} />}
        color={'#7a3d1a'} pos={[-0.06, -0.2, 0.485]} roughness={0.9} />
      <Part geo={<sphereGeometry args={[0.03, 8, 8]} />}
        color={'#7a3d1a'} pos={[0.06, -0.2, 0.485]} roughness={0.9} />

      <Eyes />
      <Eyebrows />
      <Mouth />
      <Beard />
    </group>
  );
}

/* ─── Eyes ─── */
function Eyes() {
  return (
    <>
      {/* Left eye socket */}
      <Part geo={<sphereGeometry args={[0.115, 16, 16]} />}
        color={EYE_W} pos={[-0.18, 0.05, 0.43]} scale={[1, 0.85, 0.7]} roughness={0.3} />
      {/* Left iris */}
      <Part geo={<sphereGeometry args={[0.075, 12, 12]} />}
        color={EYE_IRIS} pos={[-0.18, 0.05, 0.49]} roughness={0.5} />
      {/* Left pupil */}
      <Part geo={<sphereGeometry args={[0.042, 10, 10]} />}
        color={EYE_B} pos={[-0.18, 0.05, 0.505]} roughness={0.3} />
      {/* Left eye shine */}
      <Part geo={<sphereGeometry args={[0.015, 6, 6]} />}
        color={'#ffffff'} pos={[-0.16, 0.07, 0.515]} roughness={0.1} metalness={0.2} />

      {/* Right eye socket */}
      <Part geo={<sphereGeometry args={[0.115, 16, 16]} />}
        color={EYE_W} pos={[0.18, 0.05, 0.43]} scale={[1, 0.85, 0.7]} roughness={0.3} />
      {/* Right iris */}
      <Part geo={<sphereGeometry args={[0.075, 12, 12]} />}
        color={EYE_IRIS} pos={[0.18, 0.05, 0.49]} roughness={0.5} />
      {/* Right pupil */}
      <Part geo={<sphereGeometry args={[0.042, 10, 10]} />}
        color={EYE_B} pos={[0.18, 0.05, 0.505]} roughness={0.3} />
      {/* Right eye shine */}
      <Part geo={<sphereGeometry args={[0.015, 6, 6]} />}
        color={'#ffffff'} pos={[0.2, 0.07, 0.515]} roughness={0.1} metalness={0.2} />

      {/* Eyelids - upper */}
      <Part geo={<sphereGeometry args={[0.12, 12, 12]} />}
        color={SKIN} pos={[-0.18, 0.11, 0.44]} scale={[1, 0.3, 0.7]} roughness={0.75} />
      <Part geo={<sphereGeometry args={[0.12, 12, 12]} />}
        color={SKIN} pos={[0.18, 0.11, 0.44]} scale={[1, 0.3, 0.7]} roughness={0.75} />
    </>
  );
}

/* ─── Eyebrows ─── */
function Eyebrows() {
  return (
    <>
      {/* Left eyebrow - slightly thick */}
      <mesh position={[-0.18, 0.18, 0.45]} rotation={[0, 0, 0.15]} castShadow>
        <boxGeometry args={[0.19, 0.04, 0.04]} />
        <meshStandardMaterial color={HAIR} roughness={0.9} />
      </mesh>
      {/* Right eyebrow */}
      <mesh position={[0.18, 0.18, 0.45]} rotation={[0, 0, -0.15]} castShadow>
        <boxGeometry args={[0.19, 0.04, 0.04]} />
        <meshStandardMaterial color={HAIR} roughness={0.9} />
      </mesh>
    </>
  );
}

/* ─── Mouth ─── */
function Mouth() {
  return (
    <>
      {/* Upper lip */}
      <Part geo={<sphereGeometry args={[0.11, 12, 12]} />}
        color={LIP} pos={[0, -0.3, 0.44]} scale={[1.4, 0.45, 0.65]} roughness={0.7} />
      {/* Lower lip - fuller */}
      <Part geo={<sphereGeometry args={[0.1, 12, 12]} />}
        color={LIP} pos={[0, -0.35, 0.445]} scale={[1.3, 0.55, 0.65]} roughness={0.7} />
      {/* Mouth line */}
      <Part geo={<sphereGeometry args={[0.09, 10, 10]} />}
        color={'#7a3010'} pos={[0, -0.32, 0.455]} scale={[1.2, 0.2, 0.5]} roughness={0.9} />
      {/* Smile corners */}
      <Part geo={<sphereGeometry args={[0.025, 8, 8]} />}
        color={SKIN_DARK} pos={[-0.12, -0.32, 0.45]} roughness={0.8} />
      <Part geo={<sphereGeometry args={[0.025, 8, 8]} />}
        color={SKIN_DARK} pos={[0.12, -0.32, 0.45]} roughness={0.8} />
    </>
  );
}

/* ─── Beard (light stubble) ─── */
function Beard() {
  const stubblePositions = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI;
      const r = 0.38 + Math.random() * 0.08;
      const y = -0.22 + Math.random() * 0.18;
      const x = (Math.random() - 0.5) * 0.72;
      pts.push([x, y, Math.sqrt(Math.max(0, r*r - x*x - y*y)) * 0.88]);
    }
    return pts;
  }, []);

  return (
    <>
      {stubblePositions.map((p, i) => (
        <mesh key={i} position={p} castShadow>
          <sphereGeometry args={[0.009, 4, 4]} />
          <meshStandardMaterial color={BEARD} roughness={1} />
        </mesh>
      ))}
      {/* Mustache strip */}
      <Part geo={<boxGeometry args={[0.18, 0.03, 0.02]} />}
        color={BEARD} pos={[0, -0.245, 0.47]} roughness={0.95} />
    </>
  );
}

/* ─── Hair ─── */
function Hair() {
  return (
    <group>
      {/* Main hair cap */}
      <Part geo={<sphereGeometry args={[0.54, 32, 32]} />}
        color={HAIR} pos={[0, 0.18, -0.02]} scale={[1, 0.65, 0.9]} roughness={0.8} />

      {/* Sides */}
      <Part geo={<sphereGeometry args={[0.3, 16, 16]} />}
        color={HAIR} pos={[-0.42, -0.04, -0.06]} scale={[0.7, 0.9, 0.75]} roughness={0.8} />
      <Part geo={<sphereGeometry args={[0.3, 16, 16]} />}
        color={HAIR} pos={[0.42, -0.04, -0.06]} scale={[0.7, 0.9, 0.75]} roughness={0.8} />

      {/* Quiff / front wave */}
      <Part geo={<sphereGeometry args={[0.22, 16, 16]} />}
        color={HAIR} pos={[0, 0.42, 0.28]} scale={[1.1, 0.6, 0.7]} roughness={0.75} />
      <Part geo={<sphereGeometry args={[0.18, 12, 12]} />}
        color={HAIR} pos={[-0.12, 0.44, 0.22]} scale={[0.8, 0.55, 0.65]} roughness={0.75} />
      <Part geo={<sphereGeometry args={[0.15, 12, 12]} />}
        color={HAIR} pos={[0.15, 0.43, 0.2]} scale={[0.7, 0.5, 0.6]} roughness={0.75} />

      {/* Back hair */}
      <Part geo={<sphereGeometry args={[0.42, 16, 16]} />}
        color={HAIR} pos={[0, 0.05, -0.38]} scale={[1, 0.7, 0.5]} roughness={0.8} />

      {/* Hairline edges (temples) */}
      <Part geo={<sphereGeometry args={[0.14, 10, 10]} />}
        color={HAIR} pos={[-0.46, 0.15, 0.18]} scale={[0.5, 0.8, 0.5]} roughness={0.8} />
      <Part geo={<sphereGeometry args={[0.14, 10, 10]} />}
        color={HAIR} pos={[0.46, 0.15, 0.18]} scale={[0.5, 0.8, 0.5]} roughness={0.8} />
    </group>
  );
}

/* ─── Neck ─── */
function Neck() {
  return (
    <Part geo={<cylinderGeometry args={[0.18, 0.22, 0.28, 16]} />}
      color={SKIN} pos={[0, -0.68, 0.04]} roughness={0.75} />
  );
}

/* ─── Body / Hoodie ─── */
function Body() {
  return (
    <group position={[0, -1.45, 0]}>
      {/* Main torso - navy lower */}
      <mesh castShadow>
        <boxGeometry args={[1.05, 0.9, 0.55]} />
        <meshStandardMaterial color={HOODIE_N} roughness={0.85} />
      </mesh>

      {/* Red/maroon upper chest */}
      <mesh position={[0, 0.32, 0.01]} castShadow>
        <boxGeometry args={[1.05, 0.28, 0.54]} />
        <meshStandardMaterial color={HOODIE_R} roughness={0.85} />
      </mesh>

      {/* Red shoulders */}
      <mesh position={[-0.52, 0.32, 0.01]} castShadow>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshStandardMaterial color={HOODIE_R} roughness={0.85} />
      </mesh>
      <mesh position={[0.52, 0.32, 0.01]} castShadow>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshStandardMaterial color={HOODIE_R} roughness={0.85} />
      </mesh>

      {/* White stripe across chest */}
      <mesh position={[0, 0.18, 0.28]} castShadow>
        <boxGeometry args={[1.02, 0.07, 0.02]} />
        <meshStandardMaterial color={HOODIE_S} roughness={0.7} />
      </mesh>

      {/* Hoodie pocket / bottom */}
      <mesh position={[0, -0.36, 0.26]} castShadow>
        <boxGeometry args={[0.55, 0.18, 0.04]} />
        <meshStandardMaterial color={'#0f172a'} roughness={0.9} />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 0.5, 0.14]} castShadow>
        <torusGeometry args={[0.22, 0.07, 8, 20, Math.PI]} />
        <meshStandardMaterial color={HOODIE_R} roughness={0.8} />
      </mesh>

      {/* Drawstring */}
      <mesh position={[-0.06, 0.36, 0.3]} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.28, 6]} />
        <meshStandardMaterial color={'#94a3b8'} roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0.06, 0.36, 0.3]} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.28, 6]} />
        <meshStandardMaterial color={'#94a3b8'} roughness={0.5} metalness={0.3} />
      </mesh>

      <Arms />
    </group>
  );
}

/* ─── Arms ─── */
function Arms() {
  return (
    <>
      {/* LEFT arm — red upper */}
      <group position={[-0.72, 0.3, 0]} rotation={[0.1, 0, 0.15]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.19, 0.17, 0.65, 12]} />
          <meshStandardMaterial color={HOODIE_R} roughness={0.85} />
        </mesh>
        {/* Lower arm - navy */}
        <mesh position={[0, -0.62, 0]} castShadow>
          <cylinderGeometry args={[0.17, 0.15, 0.58, 12]} />
          <meshStandardMaterial color={HOODIE_N} roughness={0.85} />
        </mesh>
        {/* Watch on left wrist */}
        <group position={[0, -0.94, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.06, 16]} />
            <meshStandardMaterial color={WATCH_S} roughness={0.3} metalness={0.8} />
          </mesh>
          <mesh position={[0.17, 0, 0]} castShadow>
            <boxGeometry args={[0.1, 0.055, 0.12]} />
            <meshStandardMaterial color={WATCH_F} roughness={0.3} metalness={0.6} />
          </mesh>
        </group>
        {/* Left hand */}
        <mesh position={[0, -1.12, 0.04]} castShadow>
          <sphereGeometry args={[0.155, 12, 12]} />
          <meshStandardMaterial color={SKIN} roughness={0.75} />
        </mesh>
      </group>

      {/* RIGHT arm — red upper */}
      <group position={[0.72, 0.3, 0]} rotation={[0.1, 0, -0.15]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.19, 0.17, 0.65, 12]} />
          <meshStandardMaterial color={HOODIE_R} roughness={0.85} />
        </mesh>
        {/* Lower arm - navy */}
        <mesh position={[0, -0.62, 0]} castShadow>
          <cylinderGeometry args={[0.17, 0.15, 0.58, 12]} />
          <meshStandardMaterial color={HOODIE_N} roughness={0.85} />
        </mesh>
        {/* Right hand */}
        <mesh position={[0, -1.12, 0.04]} castShadow>
          <sphereGeometry args={[0.155, 12, 12]} />
          <meshStandardMaterial color={SKIN} roughness={0.75} />
        </mesh>
      </group>
    </>
  );
}

/* ─── Main Avatar Component ─── */
export default function Avatar3D() {
  const groupRef = useRef();
  const headRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      // Gentle body float
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.04;
      // Subtle body sway
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.06;
    }

    if (headRef.current) {
      // Head gentle bob
      headRef.current.rotation.z = Math.sin(t * 0.6) * 0.04;
      headRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head + face */}
      <group ref={headRef} position={[0, 0.82, 0]}>
        <Head />
        <Hair />
      </group>

      {/* Neck */}
      <Neck />

      {/* Body */}
      <Body />
    </group>
  );
}
