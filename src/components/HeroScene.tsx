import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassShard({
  position,
  rotation,
  scale,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
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

function Shards() {
  const shards = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
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
      scale: 0.3 + Math.random() * 0.8,
      speed: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <>
      {shards.map((shard, i) => (
        <GlassShard key={i} {...shard} />
      ))}
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
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#FF5F1F" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#FF5F1F" />
        <Shards />
      </Canvas>
    </div>
  );
}
