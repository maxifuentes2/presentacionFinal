import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentationStore } from '../../store/presentationStore'

export default function LoadingScreen() {
  const setLoadingDone = usePresentationStore((s) => s.setLoadingDone)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(setLoadingDone, 600)
    }, 2000)
    return () => clearTimeout(t)
  }, [setLoadingDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: '#171717',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {/* Logo */}
          <img
            src="/logo-texto-transparente.webp"
            alt="VNTG Hub"
            style={{ height: 56 }}
          />

          {/* Barra de carga */}
          <div
            style={{
              width: 220,
              height: 2,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #ff5a00, #0056b3)',
              }}
            />
          </div>

          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              fontStyle: 'italic',
              letterSpacing: 4,
              color: 'rgba(255,90,0,0.6)',
              textTransform: 'uppercase',
            }}
          >
            Cargando presentación
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
