import { motion } from 'framer-motion'
import { usePresentationStore, TOTAL_SLIDES } from '../../store/presentationStore'

const DOT = 16
const GAP = 10
const STEP = DOT + GAP

export default function ProgressBar() {
  const { currentSlide, goTo } = usePresentationStore()

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 31,
          pointerEvents: 'all',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            gap: GAP,
            alignItems: 'center',
          }}
        >
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              onClick={() => goTo(n)}
              style={{
                width: DOT,
                height: DOT,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              <div
                style={{
                  width: n < currentSlide ? 7 : 5,
                  height: n < currentSlide ? 7 : 5,
                  borderRadius: '50%',
                  background: n < currentSlide
                    ? 'rgba(255,90,0,0.45)'
                    : 'rgba(255,255,255,0.12)',
                }}
              />
            </div>
          ))}

          <motion.div
            style={{
              position: 'absolute',
              top: 3,
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff5a00, #0056b3)',
              boxShadow: '0 0 10px rgba(255,90,0,0.5), 0 0 20px rgba(0,86,179,0.25)',
              zIndex: 2,
            }}
            animate={{
              left: (currentSlide - 1) * STEP + 3,
              scale: [1, 1.35, 1],
            }}
            transition={{
              left: { type: 'spring', stiffness: 250, damping: 22 },
              scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </div>
      </div>

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
