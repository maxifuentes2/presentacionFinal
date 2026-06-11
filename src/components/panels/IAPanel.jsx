import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'
import VideoPlayer from '../shared/VideoPlayer'

const features = [
  { label: 'Chatbot Llama 3',       type: 'orange' },
  { label: 'Groq API Directa',      type: 'blue' },
  { label: 'Búsqueda Semántica',    type: 'orange' },
  { label: 'Gemini IA',             type: 'blue' },
  { label: 'Cron 60s Stock',        type: 'orange' },
  { label: 'Cancelación Expiración', type: 'blue' },
]

export default function IAPanel() {
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
        Diapositiva 08 — Inteligencia Artificial
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
        IA y Automatizaciones
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Chatbot inteligente con Groq API usando Llama 3 mediante fetch directo,
        capaz de consultar órdenes por ID o email. Búsqueda semántica en el
        catálogo con Gemini (Google Generative AI). Tareas programadas que
        cancelan pedidos expirados cada 60s y restauran stock en MySQL.
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
          border: '1px solid rgba(0,86,179,0.2)',
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <VideoPlayer src="https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415226/CHATBOT_VNTG_nfduei.mp4" />
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
        "La inteligencia artificial al servicio del coleccionista."
      </motion.p>
    </GlassPanel>
  )
}
