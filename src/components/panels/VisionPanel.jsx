import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const milestones = [
  { label: 'Escalabilidad Regional', desc: 'Expansión en LATAM', icon: '01' },
  { label: 'Expansión Internacional', desc: 'Mercado global', icon: '02' },
  { label: 'Nuevas Integraciones', desc: 'Blockchain + NFTs', icon: '03' },
  { label: 'Comunidad Especializada', desc: 'Red social de coleccionistas', icon: '04' },
]

export default function VisionPanel() {
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
        Diapositiva 09 — Visión y Oportunidad
      </motion.p>

      <h2
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 42px)',
          fontWeight: 700,
          color: '#f4f4f5',
          marginBottom: 6,
          letterSpacing: -0.5,
        }}
      >
        El futuro del coleccionismo
      </h2>

      <p style={{ fontSize: 14, color: 'rgba(161,161,170,0.6)', marginBottom: 24, lineHeight: 1.5, maxWidth: 560 }}>
        Estamos construyendo el punto de encuentro definitivo para coleccionistas
        y gamers, con una hoja de ruta clara hacia la expansión.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, width: '100%', maxWidth: 560 }}>
        {milestones.map(({ label, desc, icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              flex: '1 1 180px',
              background: 'rgba(255,90,0,0.04)',
              border: '1px solid rgba(255,90,0,0.12)',
              borderRadius: 14,
              padding: '16px 14px',
              textAlign: 'center',
            }}
          >
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 10,
              color: 'rgba(255,90,0,0.3)',
              letterSpacing: 3,
              display: 'block',
              marginBottom: 8,
            }}>
              {icon}
            </span>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: '#f4f4f5', fontWeight: 600, display: 'block', marginBottom: 4 }}>
              {label}
            </span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(161,161,170,0.35)' }}>
              {desc}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 22,
          fontSize: 12,
          fontFamily: 'Space Mono, monospace',
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Estamos construyendo el punto de encuentro del coleccionismo del futuro."
      </motion.p>
    </GlassPanel>
  )
}
