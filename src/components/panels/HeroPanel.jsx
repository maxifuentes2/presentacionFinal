import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'
import TypewriterText from '../shared/TypewriterText'
import ScrambleText from '../shared/ScrambleText'

export default function HeroPanel() {
  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 18,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.5)',
          marginBottom: 16,
        }}
      >
        01 — Presentación Ejecutiva
      </motion.p>

      <h1
        className="subtle-glitch"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(3.2rem, 14vw, 10rem)',
          letterSpacing: -3,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(4px, 2vw, 16px)',
          marginBottom: 16,
          color: '#fff',
        }}
      >
        <span
          style={{
            color: '#003e9b',
            textShadow: '0 0 20px rgba(0,62,155,0.35), 0 0 50px rgba(0,62,155,0.12)',
          }}
        >
          <ScrambleText text="VNTG" delay={200} />
        </span>
        <span
          style={{
            color: '#ff5a00',
            textShadow: '0 0 20px rgba(255,90,0,0.35), 0 0 50px rgba(255,90,0,0.12)',
          }}
        >
          <ScrambleText text="HUB" delay={600} />
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'rgba(161,161,170,0.7)',
          marginBottom: 8,
        }}
      >
        <TypewriterText
          text="E-commerce de Coleccionables y Gaming"
          speed={35}
          active={true}
          delay={1100}
        />
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        style={{
          fontSize: 13,
          color: 'rgba(0,86,179,0.55)',
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          letterSpacing: 3,
          marginBottom: 8,
        }}
      >
        Universidad del Aconcagua — Proyecto Integrador
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
          maxWidth: 800,
        }}
      >
        {[
          { label: 'Coleccionables Digitales', type: 'orange' },
          { label: 'Funkos, Anime & Gaming', type: 'orange' },
          { label: 'Crypto Payments', type: 'blue' },
          { label: 'AI Chatbot Llama 3', type: 'blue' },
        ].map(({ label, type }) => (
          <div key={label} className={`chip chip-${type}`}>
            <span className={`chip-dot chip-dot-${type}`} />
            {label}
          </div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}
