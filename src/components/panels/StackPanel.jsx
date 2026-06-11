import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const stack = [
  { name: 'React',     color: '#61dafb' },
  { name: 'Node.js',   color: '#8cc84b' },
  { name: 'Express',   color: '#aaaaaa' },
  { name: 'MySQL',     color: '#4479a1' },
  { name: 'Vercel',    color: '#ffffff' },
  { name: 'Render',    color: '#46e3b7' },
  { name: 'Llama 3',   color: '#0056b3' },
  { name: 'Gmail API', color: '#ea4335' },
]
const extras = [
  { label: 'Panel Admin',       type: 'orange' },
  { label: 'Poller Gmail API',  type: 'blue' },
  { label: 'JWT Auth',          type: 'orange' },
  { label: 'REST API',          type: 'blue' },
]

export default function StackPanel() {
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
        Diapositiva 07 — Stack &amp; Arquitectura
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
        Arquitectura &amp; Stack
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 18, lineHeight: 1.55 }}>
        Infraestructura moderna, escalable y orientada a producción. Frontend en Vercel,
        backend en Render, base de datos MySQL con ORM propio.
      </p>

      {/* Tech badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          maxWidth: 500,
          marginBottom: 18,
        }}
      >
        {stack.map(({ name, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              background: 'rgba(0,86,179,0.09)',
              border: `1px solid ${color}33`,
              borderRadius: 10,
              padding: '9px 8px',
              textAlign: 'center',
              fontFamily: 'Space Mono, monospace',
              fontSize: 11,
              fontWeight: 700,
              color,
              letterSpacing: 0.5,
              cursor: 'default',
            }}
          >
            {name}
          </motion.div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          maxWidth: 480,
          marginBottom: 24,
        }}
      >
        {extras.map(({ label, type }) => (
          <div key={label} className={`chip chip-${type}`}>
            <span className={`chip-dot chip-dot-${type}`} />
            {label}
          </div>
        ))}
      </div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,90,0,0.08), rgba(0,86,179,0.12))',
          border: '1px solid rgba(255,90,0,0.35)',
          borderRadius: 14,
          padding: '18px 24px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(255,90,0,0.08)',
        }}
      >
        <p
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 10,
            letterSpacing: 4,
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}
        >
          Demo en vivo
        </p>
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontWeight: 700,
            color: '#ff5a00',
            letterSpacing: 1,
            textShadow: '0 0 20px rgba(255,90,0,0.5)',
          }}
        >
          vntg-hub.vercel.app
        </p>
        <p
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 10,
            letterSpacing: 3,
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginTop: 6,
          }}
        >
          E-Commerce de Coleccionables y Gaming
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: 16,
          fontSize: 12,
          fontFamily: 'Space Mono, monospace',
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Construido para crecer sin comprometer rendimiento."
      </motion.p>
    </GlassPanel>
  )
}
