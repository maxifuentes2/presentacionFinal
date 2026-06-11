import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const features = [
  { label: 'Google OAuth 2.0',   type: 'orange' },
  { label: '2FA Nativo',         type: 'orange' },
  { label: 'Dark / Light Mode',  type: 'blue' },
  { label: 'Multi-Moneda',       type: 'blue' },
  { label: 'Glassmorphism UI',   type: 'orange' },
  { label: 'Responsive Total',   type: 'blue' },
]

export default function AuthPanel() {
  return (
    <GlassPanel>
      <p
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          letterSpacing: 5,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.6)',
          marginBottom: 8,
        }}
      >
        Diapositiva 04 — UX &amp; Seguridad
      </p>

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
        UI/UX y Autenticación
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Experiencia segura y personalizada desde el primer acceso. Autenticación
        robusta con diseño adaptable y soporte multi-moneda.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          maxWidth: 520,
          marginBottom: 22,
        }}
      >
        {features.map(({ label, type }) => (
          <div key={label} className={`chip chip-${type}`}>
            <span className={`chip-dot chip-dot-${type}`} />
            {label}
          </div>
        ))}
      </div>

      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          border: '2px dashed rgba(255,90,0,0.28)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 480,
          height: 150,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: 'rgba(0,0,0,0.35)',
          color: 'rgba(255,90,0,0.45)',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
        whileHover={{ borderColor: 'rgba(255,90,0,0.6)' }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <polygon points="5,3 19,12 5,21" />
        </svg>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' }}>
          VIDEO_PLACEHOLDER_AUTH_UI
        </span>
        <span style={{ fontSize: 10, opacity: 0.45, fontFamily: 'monospace' }}>
          Insertar demo MP4 aquí
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 16,
          fontSize: 12,
          fontFamily: 'Space Mono, monospace',
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "La simplicidad es la máxima sofisticación."
      </motion.p>
    </GlassPanel>
  )
}
