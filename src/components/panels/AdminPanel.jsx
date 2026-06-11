import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const features = [
  { label: 'Node.js + Express',     type: 'orange' },
  { label: 'MySQL Railway',         type: 'blue' },
  { label: 'Vercel / Render',       type: 'orange' },
  { label: 'CRUD Admin',            type: 'blue' },
  { label: 'Gmail API Poller',      type: 'orange' },
  { label: 'Puntos Fidelidad',      type: 'blue' },
]

export default function AdminPanel() {
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
        Diapositiva 09 — Backend &amp; Administración
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
        Arquitectura y Admin
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Backend con Node.js + Express y MySQL en Railway. Frontend en Vercel, API
        en Render. Panel de administración con CRUD de productos, categorías,
        envíos y pedidos. Soporte con Gmail API Poller que lee correos entrantes
        y los vincula a tickets. Sistema de fidelidad con puntos por compra.
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

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          borderRadius: 12,
          width: '100%',
          maxWidth: 480,
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          border: '2px dashed rgba(0,86,179,0.25)',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 8,
          color: 'rgba(0,86,179,0.45)',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polygon points="10,8 16,12 10,16" />
        </svg>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>
          Video 16:9 — Admin / Soporte Demo
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
        "Detrás de cada compra hay una arquitectura sólida."
      </motion.p>
    </GlassPanel>
  )
}
