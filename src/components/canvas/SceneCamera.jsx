import { useSlideCamera } from '../../hooks/useSlideCamera'
import { usePresentationStore } from '../../store/presentationStore'

/**
 * Componente vacío que vive dentro del Canvas
 * y controla la cámara según el slide actual.
 */
export default function SceneCamera() {
  const { currentSlide, setTransitioning } = usePresentationStore()
  useSlideCamera(currentSlide, () => setTransitioning(false))
  return null
}
