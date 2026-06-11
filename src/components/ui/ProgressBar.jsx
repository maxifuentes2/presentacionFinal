import { motion } from 'framer-motion'
import { usePresentationStore, TOTAL_SLIDES } from '../../store/presentationStore'

export default function ProgressBar() {
  const { currentSlide } = usePresentationStore()
  const pct = (currentSlide / TOTAL_SLIDES) * 100

  return (
    <>
      {/* Barra superior */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          background: 'linear-gradient(90deg, #ff5a00, #0056b3)',
          zIndex: 30,
          transformOrigin: 'left center',
          boxShadow: '0 0 8px rgba(255,90,0,0.5)',
        }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Contador */}
      <div
        style={{
          position: 'fixed',
          top: 18,
          right: 22,
          zIndex: 20,
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          letterSpacing: 3,
          color: 'rgba(255,90,0,0.5)',
          pointerEvents: 'none',
        }}
      >
        {String(currentSlide).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
      </div>

      {/* Logo top-left */}
      <div
        style={{
          position: 'fixed',
          top: 16,
          left: 22,
          zIndex: 20,
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2,
          background: 'linear-gradient(90deg, #ff5a00, #0056b3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          pointerEvents: 'none',
        }}
      >
        VNTG
      </div>
    </>
  )
}
