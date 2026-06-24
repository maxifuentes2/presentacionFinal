import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

export default function ClosingPanel15() {
  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 16,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.5)',
          marginBottom: 24,
        }}
      >
        15 — Cierre
      </motion.p>

      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="gradient-text"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(56px, 10vw, 100px)',
          letterSpacing: -2,
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Gracias
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 4vw, 36px)',
          color: 'rgba(255,255,255,0.8)',
          letterSpacing: 2,
          marginBottom: 8,
        }}
      >
        VNTG Hub
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 500,
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 3vw, 26px)',
          color: 'rgba(161,161,170,0.6)',
          letterSpacing: 1,
          maxWidth: 720,
        }}
      >
        El futuro del coleccionismo digital ya está aquí.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 500,
          fontStyle: 'italic',
          fontSize: 17,
          color: 'rgba(161,161,170,0.4)',
          lineHeight: 1.6,
          maxWidth: 640,
          marginTop: 24,
        }}
      >
        Gracias por acompañarnos en este viaje.
      </motion.p>
    </GlassPanel>
  )
}
