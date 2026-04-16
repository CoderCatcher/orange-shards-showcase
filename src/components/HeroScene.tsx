import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

/* ── Glass Shard ── */
function GlassShard({
  position,
  rotation,
  scale,
  speed,
  sliced,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  sliced?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const pointer = state.pointer;
    mouse.current.x += (pointer.x * viewport.width * 0.3 - mouse.current.x) * 0.02;
    mouse.current.y += (pointer.y * viewport.height * 0.3 - mouse.current.y) * 0.02;

    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + t * 0.3;
      meshRef.current.rotation.y = rotation[1] + t * 0.2;
      meshRef.current.rotation.z = rotation[2] + Math.sin(t) * 0.1;
      meshRef.current.position.x = position[0] + mouse.current.x * (0.3 + scale * 0.2);
      meshRef.current.position.y = position[1] + mouse.current.y * (0.3 + scale * 0.2) + Math.sin(t) * 0.2;

      // Sliced shards drift apart slowly
      if (sliced) {
        meshRef.current.position.x += Math.sin(t * 0.5) * 0.15;
        meshRef.current.position.y += Math.cos(t * 0.4) * 0.1;
      }
    }
  });

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const r = 0.5 + Math.random() * 0.3;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: 0.05 + Math.random() * 0.1, bevelEnabled: false });
  }, []);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} geometry={geometry} scale={scale} castShadow>
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.15}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#FF5F1F"
          roughness={0.05}
          transmission={0.95}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

/* ── Razor Blade ── */
function RazorBlade({ position, rotationOffset, speed }: {
  position: [number, number, number];
  rotationOffset: number;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Trapezoid razor blade shape
    shape.moveTo(-0.6, -0.15);
    shape.lineTo(0.6, -0.08);
    shape.lineTo(0.6, 0.08);
    shape.lineTo(-0.6, 0.15);
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.005, bevelSegments: 2 });
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const pointer = state.pointer;
    mouse.current.x += (pointer.x * viewport.width * 0.15 - mouse.current.x) * 0.03;
    mouse.current.y += (pointer.y * viewport.height * 0.15 - mouse.current.y) * 0.03;

    if (ref.current) {
      ref.current.rotation.z = rotationOffset + Math.sin(t) * 0.3;
      ref.current.rotation.y = Math.sin(t * 0.7) * 0.2;
      ref.current.position.x = position[0] + mouse.current.x * 0.4 + Math.sin(t * 0.8) * 0.3;
      ref.current.position.y = position[1] + mouse.current.y * 0.4 + Math.cos(t * 0.6) * 0.2;
    }
  });

  return (
    <Float speed={speed * 0.3} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={ref} position={position}>
        <mesh geometry={geometry} scale={1.2} castShadow>
          <meshStandardMaterial
            color="#e8e8e8"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={1.5}
          />
        </mesh>
        {/* Orange edge glow */}
        <mesh position={[0.6, 0, 0.01]} scale={[0.02, 0.2, 0.04]}>
          <boxGeometry />
          <meshStandardMaterial color="#FF5F1F" emissive="#FF5F1F" emissiveIntensity={3} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Scissors ── */
function Scissors({ position, speed }: {
  position: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const pointer = state.pointer;
    mouse.current.x += (pointer.x * viewport.width * 0.12 - mouse.current.x) * 0.025;
    mouse.current.y += (pointer.y * viewport.height * 0.12 - mouse.current.y) * 0.025;

    if (ref.current) {
      ref.current.rotation.z = Math.sin(t * 0.5) * 0.15;
      ref.current.position.x = position[0] + mouse.current.x * 0.3;
      ref.current.position.y = position[1] + mouse.current.y * 0.3 + Math.sin(t * 0.7) * 0.15;

      // Animate scissor opening/closing
      const blade1 = ref.current.children[0];
      const blade2 = ref.current.children[1];
      if (blade1 && blade2) {
        const openAngle = Math.sin(t * 1.5) * 0.15 + 0.1;
        blade1.rotation.z = openAngle;
        blade2.rotation.z = -openAngle;
      }
    }
  });

  const bladeGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.04);
    shape.lineTo(0.8, -0.01);
    shape.lineTo(0.85, 0);
    shape.lineTo(0.8, 0.01);
    shape.lineTo(0, 0.04);
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: 0.015, bevelEnabled: false });
  }, []);

  return (
    <Float speed={speed * 0.4} rotationIntensity={0.1} floatIntensity={0.25}>
      <group ref={ref} position={position} scale={1.1}>
        {/* Top blade */}
        <mesh geometry={bladeGeometry} castShadow>
          <meshStandardMaterial color="#d4d4d4" metalness={0.9} roughness={0.08} />
        </mesh>
        {/* Bottom blade */}
        <mesh geometry={bladeGeometry} castShadow>
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.08} />
        </mesh>
        {/* Pivot point (orange) */}
        <mesh position={[0, 0, 0.008]}>
          <cylinderGeometry args={[0.04, 0.04, 0.03, 12]} />
          <meshStandardMaterial color="#FF5F1F" emissive="#FF5F1F" emissiveIntensity={2} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Glowing Progress Bar ── */
function RenderProgressBar({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null!);
  const fillRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;
    mouse.current.x += (pointer.x * viewport.width * 0.08 - mouse.current.x) * 0.02;
    mouse.current.y += (pointer.y * viewport.height * 0.08 - mouse.current.y) * 0.02;

    if (ref.current) {
      ref.current.position.x = position[0] + mouse.current.x * 0.2;
      ref.current.position.y = position[1] + mouse.current.y * 0.2 + Math.sin(t * 0.8) * 0.08;
      ref.current.rotation.z = Math.sin(t * 0.3) * 0.03;
    }

    // Animate fill cycling 0→100%
    if (fillRef.current) {
      const progress = (Math.sin(t * 0.4) * 0.5 + 0.5); // 0 to 1
      fillRef.current.scale.x = Math.max(0.01, progress);
      fillRef.current.position.x = -0.6 + progress * 0.6;
    }

    if (glowRef.current) {
      const progress = (Math.sin(t * 0.4) * 0.5 + 0.5);
      (glowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 2 + Math.sin(t * 3) * 0.5;
      glowRef.current.scale.x = Math.max(0.01, progress);
      glowRef.current.position.x = -0.6 + progress * 0.6;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.15}>
      <group ref={ref} position={position} scale={0.8}>
        {/* Background bar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.08, 0.02]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} transparent opacity={0.8} />
        </mesh>
        {/* Fill bar */}
        <mesh ref={fillRef} position={[-0.3, 0, 0.011]}>
          <boxGeometry args={[1.18, 0.06, 0.015]} />
          <meshStandardMaterial color="#FF5F1F" emissive="#FF5F1F" emissiveIntensity={2} metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Outer glow layer */}
        <mesh ref={glowRef} position={[-0.3, 0, 0.005]}>
          <boxGeometry args={[1.22, 0.12, 0.01]} />
          <meshStandardMaterial color="#FF5F1F" emissive="#FF5F1F" emissiveIntensity={1.5} transparent opacity={0.25} />
        </mesh>
        {/* Border frame */}
        <mesh position={[0, 0, 0.008]}>
          <boxGeometry args={[1.24, 0.1, 0.005]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.1} transparent opacity={0.6} />
        </mesh>
        {/* "RENDER" label dot */}
        <mesh position={[-0.7, 0, 0.015]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FF5F1F" emissive="#FF5F1F" emissiveIntensity={4} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── All Scene Objects ── */
function SceneContent() {
  const shards = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      speed: 0.3 + Math.random() * 0.7,
      sliced: i < 5, // First 5 shards appear "sliced"
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#FF5F1F" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#FF5F1F" />

      {/* Glass shards */}
      {shards.map((shard, i) => (
        <GlassShard key={i} {...shard} />
      ))}

      {/* Cutting tools actively slicing through shards */}
      <RazorBlade position={[-2.5, 1.2, 0.5]} rotationOffset={0.3} speed={0.6} />
      <RazorBlade position={[2.8, -0.8, -0.3]} rotationOffset={-0.5} speed={0.45} />
      <RazorBlade position={[0.5, 2, 1]} rotationOffset={1.2} speed={0.55} />
      <Scissors position={[-2, -1.5, 0.8]} speed={0.5} />
      <Scissors position={[3, 1.5, -0.5]} speed={0.4} />

      {/* Glowing render progress bar */}
      <RenderProgressBar position={[2.2, -2.2, 1.5]} />
    </>
  );
}

export default function HeroScene() {
  const [isClient, setIsClient] = useState(false);

  if (typeof window !== "undefined" && !isClient) {
    setIsClient(true);
  }

  if (!isClient) {
    return <div className="absolute inset-0" />;
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
