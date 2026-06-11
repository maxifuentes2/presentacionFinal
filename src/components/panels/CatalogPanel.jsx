import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const aiNodes = ['Llama 3', 'Embeddings', 'Historial', 'Intereses', 'Recomendaciones']
const features = [
  { label: 'Chatbot Llama 3',      type: 'blue' },
  { label: 'Filtros Avanzados',    type: 'orange' },
  { label: 'Gestión de Intereses', type: 'blue' },
  { label: 'Búsqueda Semántica',   type: 'orange' },
]

export default function CatalogPanel() {
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
        Diapositiva 05 — IA &amp; Catálogo Inteligente
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
        Catálogo Inteligente
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 18, lineHeight: 1.55 }}>
        Motor de recomendación con IA para maximizar conversiones y personalizar
        la experiencia de cada usuario.
      </p>

      {/* Nodos IA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 18 }}
      >
        {aiNodes.map((node, i) => (
          <motion.div
            key={node}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              background: 'rgba(0,86,179,0.1)',
              border: '1px solid rgba(0,86,179,0.28)',
              borderRadius: 50,
              padding: '7px 16px',
              fontSize: 12,
              color: '#c880ff',
              fontFamily: 'Space Mono, monospace',
              letterSpacing: 0.5,
            }}
          >
            ◆ {node}
          </motion.div>
        ))}
      </motion.div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          maxWidth: 520,
          marginBottom: 20,
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
        transition={{ delay: 0.5 }}
        style={{
          border: '2px dashed rgba(0,86,179,0.3)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 480,
          height: 140,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: 'rgba(0,0,0,0.35)',
          color: 'rgba(0,86,179,0.55)',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
        whileHover={{ borderColor: 'rgba(0,86,179,0.65)' }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' }}>
          VIDEO_PLACEHOLDER_AI_CATALOG
        </span>
        <span style={{ fontSize: 10, opacity: 0.4, fontFamily: 'monospace' }}>
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
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "La inteligencia artificial transforma la exploración en descubrimiento."
      </motion.p>
    </GlassPanel>
  )
}
