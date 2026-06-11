import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    transition: { duration: 0.35, ease: 'easeIn' },
  },
}

export default function GlassPanel({ children, className = '' }) {
  return (
    <motion.div
      className={`glass ${className}`}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        width: 'min(800px, 93vw)',
        padding: 'clamp(24px, 4vw, 44px)',
        zIndex: 10,
        pointerEvents: 'all',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </motion.div>
  )
}
