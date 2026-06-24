import { AnimatePresence, motion } from 'framer-motion'
import { usePresentationStore } from '../../store/presentationStore'

export default function ChromaTransition() {
  const { isTransitioning } = usePresentationStore()

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="chroma"
          initial={{ scale: 0, opacity: 0, transformOrigin: 'top left' }}
          animate={{ scale: 2.8, opacity: 1, transformOrigin: 'top left' }}
          exit={{ scale: 0, opacity: 0, transformOrigin: 'bottom right' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 15,
            pointerEvents: 'none',
            background: 'linear-gradient(135deg, #ff5a00 0%, #ff8c38 30%, #0056b3 70%, #003e9b 100%)',
            willChange: 'transform',
          }}
        />
      )}
    </AnimatePresence>
  )
}
