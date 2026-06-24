import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const categories = [
  {
    label: 'Frontend',
    color: 'orange',
    items: ['React 18', 'Vite 5', 'Tailwind CSS 4', 'Framer Motion', 'GSAP', 'Three.js', 'React Three Fiber', 'Drei', 'Zustand'],
  },
  {
    label: 'Backend & DB',
    color: 'blue',
    items: ['Node.js', 'Express', 'MySQL', 'Railway', 'JWT', 'Bcryptjs', 'Multer', 'Gmail API'],
  },
  {
    label: 'Servicios',
    color: 'orange',
    items: ['Vercel', 'Render', 'Mercado Pago SDK', 'Groq API', 'Gemini AI', 'Cloudinary'],
  },
]

export default function TechStackPanel() {
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
        04 — Stack Tecnológico
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
        Stack Tecnológico
      </h2>

      {categories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + i * 0.15 }}
          style={{ width: '100%', maxWidth: 600, marginBottom: i < categories.length - 1 ? 28 : 0 }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 10,
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: cat.color === 'orange' ? '#ff5a00' : '#0056b3',
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 15,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: cat.color === 'orange' ? 'rgba(255,90,0,0.5)' : 'rgba(0,86,179,0.5)',
              }}
            >
              {cat.label}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {cat.items.map((item) => (
              <div key={item} className={`chip chip-${cat.color}`}>
                <span className={`chip-dot chip-dot-${cat.color}`} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: 32,
          fontSize: 20,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
        }}
      >
        "Las herramientas correctas para el trabajo correcto."
      </motion.p>
    </GlassPanel>
  )
}
