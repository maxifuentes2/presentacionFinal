import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const TECHS = [
  { label: 'React',    color: '#61dafb', pos: [-4,  2, -2] },
  { label: 'Node.js',  color: '#8cc84b', pos: [ 4,  2, -2] },
  { label: 'Express',  color: '#888888', pos: [-3, -1, -3] },
  { label: 'MySQL',    color: '#4479a1', pos: [ 3, -1, -3] },
  { label: 'Vercel',   color: '#ffffff', pos: [-5, -2,  0] },
  { label: 'Render',   color: '#46e3b7', pos: [ 5, -2,  0] },
  { label: 'Llama 3',  color: '#0056b3', pos: [ 0,  3, -4] },
  { label: 'Gmail API',color: '#ea4335', pos: [ 0, -3, -2] },
]

function TechBadge({ label, color, position, phaseOffset = 0 }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = position[1] + Math.sin(t * 0.7 + phaseOffset) * 0.18
    groupRef.current.rotation.y = Math.sin(t * 0.3 + phaseOffset) * 0.2
  })

  return (
    <group ref={groupRef} position={position}>
      <RoundedBox args={[1.6, 0.5, 0.08]} radius={0.06}>
        <meshStandardMaterial
          color="#0d0d1a"
          transparent
          opacity={0.85}
          metalness={0.4}
          roughness={0.4}
        />
      </RoundedBox>

      {/* Borde colorido */}
      <RoundedBox args={[1.64, 0.54, 0.06]} radius={0.07}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.35}
          emissive={color}
          emissiveIntensity={0.6}
          wireframe
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.06]}
        fontSize={0.18}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/spacemono/v13/i7dPIFZifjKcF5UAWdDRaPpZYFKQHwyVd3U.woff2"
      >
        {label}
      </Text>

      <pointLight
        position={[0, 0, 0.3]}
        color={color}
        intensity={0.4}
        distance={1.5}
      />
    </group>
  )
}

export default function TechLogos3D() {
  return (
    <group position={[0, -1, 0]}>
      {TECHS.map((t, i) => (
        <TechBadge key={t.label} {...t} phaseOffset={i * 0.8} />
      ))}
    </group>
  )
}
