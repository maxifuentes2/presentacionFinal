import { motion } from 'framer-motion'
import AutoFit from './AutoFit'

const variants = {
  hidden: (dir = 1) => ({
    opacity: 0,
    scale: 0.88,
    filter: 'blur(6px)',
    rotateX: dir * 12,
    y: dir * 50,
  }),
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir = 1) => ({
    opacity: 0,
    scale: 0.92,
    filter: 'blur(3px)',
    rotateX: -dir * 8,
    y: -dir * 30,
    transition: { duration: 0.3, ease: 'easeIn' },
  }),
}

export default function GlassPanel({ children }) {
  return (
    <AutoFit
      style={{
        zIndex: 10,
        pointerEvents: 'all',
        textAlign: 'center',
        padding: 'clamp(40px, 5vw, 80px)',
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="panel-container"
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(4px, 1.2vh, 16px)',
        }}
      >
        {children}
      </motion.div>
    </AutoFit>
  )
}
