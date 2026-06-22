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

      {/* Logo top-left */}
      <img
        src="/logo-texto-transparente.webp"
        alt="VNTG Hub"
        style={{
          position: 'fixed',
          top: 14,
          left: 22,
          zIndex: 20,
          height: 28,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
