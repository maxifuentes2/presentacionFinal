import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'
import VideoPlayer from '../shared/VideoPlayer'

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
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 20,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.6)',
          marginBottom: 8,
        }}
      >
        07 — Perfil de Usuario
      </p>

      <h2
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(42px, 6vw, 72px)',
          color: '#f4f4f5',
          marginBottom: 6,
          letterSpacing: -0.5,
        }}
      >
        Perfil y Preferencias
      </h2>

      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 28, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Gestión completa del perfil con direcciones de envío guardadas, intereses
        personalizados para recomendaciones, historial de pedidos y selector de
        preferencias de interfaz.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          maxWidth: 960,
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
          maxWidth: 520,
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          border: '1px solid rgba(0,86,179,0.2)',
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <VideoPlayer src="https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415234/DIRECCIONES_VNTG_mxpl4b.mp4" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 32,
          fontSize: 20,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
        }}
      >
        "Tu experiencia, tus reglas."
      </motion.p>
    </GlassPanel>
  )
}
