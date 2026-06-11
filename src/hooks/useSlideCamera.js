import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { CAMERA_CONFIG } from '../store/presentationStore'

/**
 * Hook que anima la cámara Three.js al cambiar de slide.
 * Debe usarse dentro del Canvas (contexto R3F).
 */
export function useSlideCamera(currentSlide, onComplete) {
  const { camera } = useThree()

  useEffect(() => {
    const idx = currentSlide - 1
    const { position: [tx, ty, tz], target: [lx, ly, lz] } = CAMERA_CONFIG[idx]

    gsap.killTweensOf(camera.position)

    gsap.to(camera.position, {
      x: tx,
      y: ty,
      z: tz,
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: () => camera.lookAt(lx, ly, lz),
      onComplete: () => {
        camera.lookAt(lx, ly, lz)
        if (onComplete) onComplete()
      },
    })
  }, [currentSlide, camera, onComplete])
}
