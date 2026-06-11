import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 220 }) {
  const meshRef = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const green  = new THREE.Color('#ff5a00')
    const purple = new THREE.Color('#0056b3')
    const white  = new THREE.Color('#8888cc')

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35

      const r = Math.random()
      const c = r > 0.6 ? green : r > 0.3 ? purple : white
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.018
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.009) * 0.08
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  )
}
