import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { usePresentationStore } from '../../store/presentationStore'
import TechLogos3D from './TechLogos3D'
import SceneCamera from './SceneCamera'

const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.12} color="#1a0a2e" />
      <pointLight position={[10, 10, 10]}  intensity={1.4} color="#ff5a00" />
      <pointLight position={[-10, -5, -10]} intensity={0.9} color="#0056b3" />
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
        {!isMobile && currentSlide === 7 && <TechLogos3D />}
      </Suspense>
      {!isMobile && <fog attach="fog" args={['#171717', 25, 70]} />}
    </>
  )
}

export default function CanvasContainer() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
        toneMapping: 3,
        toneMappingExposure: 1.2,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      shadows={!isMobile}
      dpr={isMobile ? [1, 1] : [1, 2]}
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
