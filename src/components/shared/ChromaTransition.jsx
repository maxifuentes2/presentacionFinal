import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { usePresentationStore } from '../../store/presentationStore'

export default function ChromaTransition() {
  const { isTransitioning, setTransitioning } = usePresentationStore()
  const cancelRef = useRef(false)
  const progress = useMotionValue(0)

  const scale = useTransform(progress, [0, 0.4, 0.6, 1], [0, 2.8, 2.8, 0])
  const rotateX = useTransform(progress, [0, 0.4, 0.6, 1], [85, 0, 0, -85])
  const opacity = useTransform(progress, [0, 0.12, 0.88, 1], [0, 1, 1, 0])
  const blurVal = useTransform(progress, [0, 0.3, 0.7, 1], [14, 0, 0, 14])
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`)

  useEffect(() => {
    if (!isTransitioning) return

    cancelRef.current = false

    async function run() {
      await animate(progress, 1, {
        type: 'tween',
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
      })
      if (cancelRef.current) return
      progress.set(0)
      setTransitioning(false)
    }

    run()
    return () => { cancelRef.current = true }
  }, [isTransitioning, progress, setTransitioning])

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        width: '120vw',
        height: '120vw',
        x: '-50%',
        y: '-50%',
        zIndex: 15,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, #0056b3 0%, #ff5a00 40%, #171717 100%)',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity, filter',
        scale,
        rotateX,
        opacity,
        filter,
      }}
    />
  )
}
