import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const pillars = [
  { label: 'Descubrimiento Inteligente', icon: '✦', color: '#ff5a00' },
  { label: 'Experiencia Premium', icon: '✦', color: '#0056b3' },
  { label: 'Seguridad Avanzada', icon: '✦', color: '#ff5a00' },
  { label: 'Comunidad y Personalización', icon: '✦', color: '#0056b3' },
]

export default function SolutionPanel() {
  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          letterSpacing: 5,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.6)',
          marginBottom: 8,
        }}
      >
        Diapositiva 03 — La Solución
      </motion.p>

      <h2
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 4.5vw, 44px)',
          fontWeight: 700,
          color: '#f4f4f5',
          marginBottom: 6,
          letterSpacing: -0.5,
        }}
      >
        VNTG Hub
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 24, lineHeight: 1.55, maxWidth: 560 }}>
        Una plataforma unificada que integra descubrimiento inteligente, pagos
        híbridos y experiencia premium en un solo ecosistema.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, width: '100%', maxWidth: 540, marginBottom: 24 }}>
        {pillars.map(({ label, icon, color }, i) => (
          <motion.div
            key={label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.12 }}
            whileHover={{ scale: 1.04, y: -3 }}
            style={{
              flex: '1 1 200px',
              background: 'rgba(10,10,25,0.6)',
              border: `1px solid ${color}22`,
              borderRadius: 14,
              padding: '18px 16px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: 22, display: 'block', marginBottom: 6 }}>{icon}</span>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color, fontWeight: 600 }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          fontSize: 12,
          fontFamily: 'Space Mono, monospace',
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Todo lo que un coleccionista necesita, en un solo ecosistema."
      </motion.p>
    </GlassPanel>
  )
}
