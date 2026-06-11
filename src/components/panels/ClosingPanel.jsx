import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

export default function ClosingPanel() {
  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.5)',
          marginBottom: 24,
        }}
      >
        Diapositiva 10 — Cierre
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(18px, 3vw, 24px)',
          color: 'rgba(161,161,170,0.5)',
          fontWeight: 400,
          letterSpacing: 1,
          marginBottom: 10,
        }}
      >
        El futuro del coleccionismo digital ya está aquí.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: 15,
          color: 'rgba(161,161,170,0.65)',
          fontFamily: 'Space Mono, monospace',
          letterSpacing: 2,
          marginBottom: 18,
        }}
      >
        Equipo de Desarrollo
      </motion.p>

      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="gradient-text"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(42px, 7vw, 72px)',
          fontWeight: 900,
          letterSpacing: -2,
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        VNTG Hub
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,90,0,0.08), rgba(0,86,179,0.12))',
          border: '1px solid rgba(255,90,0,0.35)',
          borderRadius: 14,
          padding: '16px 28px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(255,90,0,0.08)',
          maxWidth: 500,
          width: '100%',
          marginBottom: 20,
        }}
      >
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, letterSpacing: 4, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 6 }}>
          Demo en vivo
        </p>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#ff5a00', letterSpacing: 1, textShadow: '0 0 20px rgba(255,90,0,0.5)' }}>
          vntg-hub.vercel.app
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          maxWidth: 520,
          marginBottom: 20,
        }}
      >
        {['Máximo Fuentes', 'Enzo B. Delluniversidad', 'Ignacio Povolo', 'Gaspar Barroso', 'Santiago Zufia', 'Bruno Guzmán'].map((name) => (
          <div key={name} className="chip chip-orange" style={{ fontSize: 12, padding: '7px 14px' }}>
            <span className="chip-dot chip-dot-orange" />
            {name}
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        style={{
          fontSize: 13,
          color: 'rgba(161,161,170,0.45)',
          lineHeight: 1.6,
          maxWidth: 560,
        }}
      >
        Gracias por acompañarnos. VNTG Hub no es solo una tienda, es una
        plataforma diseñada para redefinir cómo las comunidades gamer y
        coleccionistas descubren, interactúan y compran.
      </motion.p>
    </GlassPanel>
  )
}
