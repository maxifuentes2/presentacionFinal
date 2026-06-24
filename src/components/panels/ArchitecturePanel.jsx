import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const layers = [
  {
    title: 'Frontend',
    items: ['React 18 + Vite', 'Three.js / R3F', 'Framer Motion + GSAP', 'Tailwind CSS 4', 'Zustand'],
    color: 'orange',
  },
  {
    title: 'Backend',
    items: ['Node.js + Express', 'JWT + Bcryptjs', 'REST API', 'Multer', 'Gmail API'],
    color: 'blue',
  },
  {
    title: 'Base de Datos',
    items: ['MySQL en Railway', 'Stored Procedures', 'Triggers', 'Índices', 'Relaciones'],
    color: 'orange',
  },
]

export default function ArchitecturePanel() {
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
          marginBottom: 4,
        }}
      >
        03 — Arquitectura del Sistema
      </p>

      <h2
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(42px, 6vw, 72px)',
          color: '#f4f4f5',
          marginBottom: 4,
          letterSpacing: -0.5,
        }}
      >
        Arquitectura del Sistema
      </h2>

      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 28, color: 'rgba(161,161,170,0.65)', marginBottom: 12, lineHeight: 1.55 }}>
        Aplicación SPA moderna con frontend en React y Three.js, backend RESTful
        en Node.js + Express, y base de datos MySQL relacional en la nube.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 14,
          width: '100%',
          maxWidth: 960,
          marginBottom: 6,
        }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
            style={{
              flex: 1,
              minWidth: 260,
              background: `rgba(255,90,0,${0.04 + i * 0.02})`,
              border: `1px solid ${layer.color === 'orange' ? 'rgba(255,90,0,0.2)' : 'rgba(0,86,179,0.25)'}`,
              borderRadius: 12,
              padding: '16px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: layer.color === 'orange' ? '#ff5a00' : '#0056b3',
                  boxShadow: `0 0 10px ${layer.color === 'orange' ? '#ff5a00' : '#0056b3'}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  textTransform: 'uppercase',
                  fontSize: 20,
                  color: '#f4f4f5',
                  letterSpacing: 0.5,
                }}
              >
                {layer.title}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              {layer.items.map((item) => (
                <span
                  key={item}
                  className={`chip chip-${layer.color}`}
                  style={{ fontSize: 15 }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: 6,
          fontSize: 20,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
        }}
      >
        "Tres capas. Un ecosistema. Cero fricción."
      </motion.p>
    </GlassPanel>
  )
}
