import { motion } from 'framer-motion'
import { usePresentationStore, TOTAL_SLIDES } from '../../store/presentationStore'

const LABELS = ['Portada', 'Intro', 'Catálogo', 'Auth', 'Perfil', 'Carrito', 'Pagos', 'IA', 'Admin', 'Cierre']

export default function NavBar() {
  const { currentSlide, goTo } = usePresentationStore()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 16,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          background: 'rgba(23,23,23,0.82)',
          border: '1px solid rgba(255,90,0,0.14)',
          borderRadius: 50,
          padding: '10px 8px',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          pointerEvents: 'all',
        }}
      >
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => {
          const n = i + 1
          const active = n === currentSlide
          return (
            <button
              key={n}
              onClick={() => goTo(n)}
              title={LABELS[i]}
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: `1px solid ${active ? '#ff5a00' : 'rgba(255,90,0,0.2)'}`,
                background: active ? 'rgba(255,90,0,0.14)' : 'transparent',
                color: active ? '#ff5a00' : 'rgba(255,90,0,0.45)',
                fontSize: 10,
                fontWeight: 700,
                fontFamily: 'Space Mono, monospace',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: active ? '0 0 14px rgba(255,90,0,0.3)' : 'none',
                letterSpacing: 0.5,
              }}
            >
              {String(n).padStart(2, '0')}
            </button>
          )
        })}
      </motion.nav>
    </div>
  )
}
