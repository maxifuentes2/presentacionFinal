import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const features = [
  { label: 'Direcciones Envío',   type: 'orange' },
  { label: 'Gestión Intereses',   type: 'blue' },
  { label: 'Perfil Personal',     type: 'orange' },
  { label: 'Historial Pedidos',   type: 'blue' },
  { label: 'Puntos Acumulados',   type: 'orange' },
  { label: 'Preferencias UI',     type: 'blue' },
]

export default function ProfilePanel() {
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
        Diapositiva 05 — Perfil de Usuario
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
        Perfil y Preferencias
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Gestión completa del perfil con direcciones de envío guardadas, intereses
        personalizados para recomendaciones, historial de pedidos y selector de
        preferencias de interfaz.
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
          overflow: 'hidden',
          border: '1px solid rgba(0,86,179,0.2)',
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <video
          src="https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415234/DIRECCIONES_VNTG_mxpl4b.mp4"
          style={{ width: '100%', display: 'block', borderRadius: 12 }}
          controls
          muted
          playsInline
          preload="metadata"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 16,
          fontSize: 12,
          fontFamily: 'Space Mono, monospace',
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Tu experiencia, tus reglas."
      </motion.p>
    </GlassPanel>
  )
}
