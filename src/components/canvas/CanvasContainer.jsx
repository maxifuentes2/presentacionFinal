import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { usePresentationStore } from '../../store/presentationStore'
import TechLogos3D from './TechLogos3D'
import SceneCamera from './SceneCamera'

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.12} color="#1a0a2e" />
      <pointLight position={[10, 10, 10]}  intensity={1.4} color="#ff5a00" />
      <pointLight position={[-10, -5, -10]} intensity={0.9} color="#0056b3" />
      <spotLight
        position={[0, 20, 5]}
        angle={0.25}
        penumbra={0.9}
        intensity={0.7}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[0, -10, 0]} intensity={0.3} color="#0056b3" />
    </>
  )
}

function SceneContent() {
  const currentSlide = usePresentationStore((s) => s.currentSlide)

  return (
    <>
      <SceneCamera />
      <SceneLights />

      <Suspense fallback={null}>
        {currentSlide === 7 && <TechLogos3D />}
      </Suspense>

      <fog attach="fog" args={['#171717', 25, 70]} />
    </>
  )
}

export default function CanvasContainer() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: 3,
        toneMappingExposure: 1.2,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      shadows
      dpr={[1, 2]}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 14]}
        fov={58}
        near={0.1}
        far={200}
      />
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
