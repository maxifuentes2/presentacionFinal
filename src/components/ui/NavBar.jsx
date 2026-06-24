import { motion } from 'framer-motion'
import { usePresentationStore, TOTAL_SLIDES } from '../../store/presentationStore'

export default function NavBar() {
  const { currentSlide, nextSlide, prevSlide } = usePresentationStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 14,
        right: 20,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(23,23,23,0.7)',
        border: '1px solid rgba(255,90,0,0.12)',
        borderRadius: 24,
        padding: '6px 12px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        pointerEvents: 'all',
      }}
    >
      <button
        onClick={prevSlide}
        disabled={currentSlide <= 1}
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: 'none',
          background: currentSlide <= 1 ? 'transparent' : 'rgba(255,90,0,0.1)',
          color: currentSlide <= 1 ? 'rgba(255,90,0,0.2)' : '#ff5a00',
          fontSize: 13,
          cursor: currentSlide <= 1 ? 'default' : 'pointer',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => {
          if (currentSlide > 1) e.currentTarget.style.background = 'rgba(255,90,0,0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = currentSlide <= 1 ? 'transparent' : 'rgba(255,90,0,0.1)'
        }}
      >
        ◀
      </button>

      <span
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 12,
          fontWeight: 700,
          fontStyle: 'italic',
          letterSpacing: 2,
          color: 'rgba(255,90,0,0.7)',
          minWidth: 44,
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        {String(currentSlide).padStart(2, '0')}/{String(TOTAL_SLIDES).padStart(2, '0')}
      </span>

      <button
        onClick={nextSlide}
        disabled={currentSlide >= TOTAL_SLIDES}
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: 'none',
          background: currentSlide >= TOTAL_SLIDES ? 'transparent' : 'rgba(0,86,179,0.1)',
          color: currentSlide >= TOTAL_SLIDES ? 'rgba(0,86,179,0.2)' : '#0056b3',
          fontSize: 13,
          cursor: currentSlide >= TOTAL_SLIDES ? 'default' : 'pointer',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => {
          if (currentSlide < TOTAL_SLIDES) e.currentTarget.style.background = 'rgba(0,86,179,0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = currentSlide >= TOTAL_SLIDES ? 'transparent' : 'rgba(0,86,179,0.1)'
        }}
      >
        ▶
      </button>
    </motion.div>
  )
}
