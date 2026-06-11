import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const differentiators = [
  { label: 'IA Integrada', vs: 'Sistemas tradicionales', color: '#ff5a00' },
  { label: 'Experiencia Premium', vs: 'UX genérica', color: '#0056b3' },
  { label: 'Pagos Híbridos', vs: 'Solo tarjeta', color: '#ff5a00' },
  { label: 'Seguridad Avanzada', vs: 'Autenticación básica', color: '#0056b3' },
  { label: 'Especialización en Nicho', vs: 'Marketplaces masivos', color: '#ff5a00' },
]

export default function DifferentiatorsPanel() {
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
          color: 'rgba(0,86,179,0.6)',
          marginBottom: 8,
        }}
      >
        Diapositiva 08 — Diferenciadores
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
        ¿Por qué VNTG Hub es distinto?
      </h2>

      <p style={{ fontSize: 14, color: 'rgba(161,161,170,0.6)', marginBottom: 22, lineHeight: 1.5, maxWidth: 560 }}>
        No somos una tienda más. Cada decisión de producto está diseñada para
        una comunidad específica.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 560 }}>
        {differentiators.map(({ label, vs, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
              background: 'rgba(10,10,25,0.5)',
              border: `1px solid ${color}18`,
              borderRadius: 12,
              padding: '10px 18px',
            }}
          >
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color, fontWeight: 600, flex: 1, textAlign: 'left' }}>
              {label}
            </span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(161,161,170,0.25)', letterSpacing: 1 }}>
              VS
            </span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'rgba(161,161,170,0.35)', flex: 1, textAlign: 'right' }}>
              {vs}
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
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "No competimos por precio. Competimos por experiencia."
      </motion.p>
    </GlassPanel>
  )
}
