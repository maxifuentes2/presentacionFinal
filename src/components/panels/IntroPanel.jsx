import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const features = [
  { label: 'Dark Mode Nativo',   type: 'orange' },
  { label: 'Responsive Total',   type: 'blue' },
  { label: 'Glassmorphism UI',   type: 'orange' },
  { label: 'Multi-Moneda',       type: 'blue' },
  { label: 'Sidebar Categorías', type: 'orange' },
  { label: 'Modo Flexbox Grid',  type: 'blue' },
]

export default function IntroPanel() {
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
        Diapositiva 02 — Introducción &amp; Diseño
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
        VNTG Hub
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        E-commerce de coleccionables — Funkos, figuras de acción, anime y gaming.
        Interfaz adaptable con modo oscuro nativo, glassmorphism y experiencia
        responsive desde 320px hasta desktop.
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
          border: '1px solid rgba(255,90,0,0.2)',
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <video
          src="https://res.cloudinary.com/dycgwwgng/video/upload/v1781150748/demo_bgjpd9.mp4"
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
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
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Diseñado para coleccionistas, construido para durar."
      </motion.p>
    </GlassPanel>
  )
}
