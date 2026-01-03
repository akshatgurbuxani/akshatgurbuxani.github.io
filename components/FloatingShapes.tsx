"use client";

import { useRef, useState, useEffect, ComponentType } from "react";
import { useFrame, type CanvasProps } from "@react-three/fiber";
import { Mesh } from "three";
import { useTheme } from "@/contexts/ThemeContext";

// =============================================================================
// 3D Floating Shapes Component
// =============================================================================

interface FloatingShapesProps {
  mousePosition: { x: number; y: number };
}

type CanvasComponent = ComponentType<CanvasProps>;

function FloatingBox({ position, mousePos, isDark }: { position: [number, number, number]; mousePos: { x: number; y: number }; isDark: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // React to mouse position (normalized to -0.5 to 0.5)
      if (typeof window !== 'undefined') {
        const normalizedX = (mousePos.x / window.innerWidth) - 0.5;
        const normalizedY = (mousePos.y / window.innerHeight) - 0.5;
        const mouseInfluence = 0.5;
        meshRef.current.position.x += (normalizedX * mouseInfluence - meshRef.current.position.x) * 0.1;
        meshRef.current.position.y += (-normalizedY * mouseInfluence - meshRef.current.position.y) * 0.1;
      }
    }
  });

  // Adjust material properties for better visibility in dark mode
  const opacity = isDark ? 0.6 : 0.3;
  const emissiveIntensity = isDark ? 0.5 : 0.2;
  const color = isDark ? "#A78BFA" : "#8B5CF6"; // Lighter purple in dark mode

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color={color} 
        opacity={opacity}
        transparent
        emissive={color}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

function FloatingSphere({ position, mousePos }: { position: [number, number, number]; mousePos: { x: number; y: number } }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      
      // React to mouse position (normalized to -0.5 to 0.5)
      if (typeof window !== 'undefined') {
        const normalizedX = (mousePos.x / window.innerWidth) - 0.5;
        const normalizedY = (mousePos.y / window.innerHeight) - 0.5;
        const mouseInfluence = 0.3;
        meshRef.current.position.x += (normalizedX * mouseInfluence - meshRef.current.position.x) * 0.1;
        meshRef.current.position.y += (-normalizedY * mouseInfluence - meshRef.current.position.y) * 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial 
        color="#EC4899" 
        opacity={0.25}
        transparent
        emissive="#EC4899"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

export default function FloatingShapes({ mousePosition }: FloatingShapesProps) {
  const [Canvas, setCanvas] = useState<CanvasComponent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    import("@react-three/fiber")
      .then((mod) => {
        setCanvas(() => mod.Canvas);
        setIsLoaded(true);
      })
      .catch(() => {
        setIsLoaded(false);
      });
  }, []);

  if (!isLoaded || !Canvas) {
    return null;
  }

  const shapes = [
    { type: "box", position: [-2, 1, -3] as [number, number, number] },
    { type: "sphere", position: [2, -1, -4] as [number, number, number] },
    { type: "box", position: [0, 2, -5] as [number, number, number] },
    { type: "sphere", position: [-1.5, -1.5, -3.5] as [number, number, number] },
    { type: "box", position: [1.5, 0.5, -4.5] as [number, number, number] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#EC4899" />
      
      {shapes.map((shape, index) => {
        if (shape.type === "box") {
          return (
            <FloatingBox 
              key={`box-${index}`} 
              position={shape.position} 
              mousePos={mousePosition}
              isDark={isDark}
            />
          );
        }
        return (
          <FloatingSphere 
            key={`sphere-${index}`} 
            position={shape.position} 
            mousePos={mousePosition}
          />
        );
      })}
    </Canvas>
  );
}

