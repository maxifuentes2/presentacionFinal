import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const problems = [
  { icon: '✕', label: 'Experiencias fragmentadas', desc: 'Múltiples plataformas inconexas' },
  { icon: '✕', label: 'Búsquedas ineficientes', desc: 'Sin personalización ni filtros inteligentes' },
  { icon: '✕', label: 'Poca personalización', desc: 'Experiencia genérica para todos' },
  { icon: '✕', label: 'Pagos limitados', desc: 'Sin soporte crypto ni métodos locales' },
]

export default function ProblemPanel() {
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
          color: 'rgba(255,80,80,0.6)',
          marginBottom: 8,
        }}
      >
        Diapositiva 02 — El Problema
      </motion.p>

      <h2
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 4.5vw, 44px)',
          fontWeight: 700,
          color: '#f4f4f5',
          marginBottom: 20,
          letterSpacing: -0.5,
        }}
      >
        ¿Qué problema resolvemos?
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 24, lineHeight: 1.55, maxWidth: 560 }}>
        Los coleccionistas y gamers enfrentan una experiencia de compra fragmentada,
        con plataformas genéricas que no entienden su nicho.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 520 }}>
        {problems.map(({ icon, label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              background: 'rgba(255,80,80,0.06)',
              border: '1px solid rgba(255,80,80,0.15)',
              borderRadius: 12,
              padding: '12px 18px',
            }}
          >
            <span style={{ fontSize: 18, color: '#ff5050', opacity: 0.7 }}>{icon}</span>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: '#f4f4f5', fontWeight: 600 }}>
                {label}
              </span>
              <span style={{ display: 'block', fontSize: 12, color: 'rgba(161,161,170,0.45)', fontFamily: 'Space Mono, monospace', marginTop: 2 }}>
                {desc}
              </span>
            </div>
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
          color: 'rgba(255,80,80,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "El mercado evolucionó. La experiencia de compra no."
      </motion.p>
    </GlassPanel>
  )
}
