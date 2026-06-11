import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'
import TypewriterText from '../shared/TypewriterText'
import { usePresentationStore } from '../../store/presentationStore'

export default function HeroPanel() {
  const { loadingDone } = usePresentationStore()

  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.5)',
          marginBottom: 16,
        }}
      >
        Presentación Ejecutiva
      </motion.p>

      <h1
        className="gradient-text"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(56px, 10vw, 104px)',
          fontWeight: 900,
          letterSpacing: -3,
          lineHeight: 1,
          marginBottom: 16,
          minHeight: '1.1em',
        }}
      >
        <TypewriterText
          text="VNTG Hub"
          speed={90}
          active={loadingDone}
          delay={200}
        />
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'rgba(161,161,170,0.7)',
          marginBottom: 8,
          fontWeight: 500,
        }}
      >
        <TypewriterText
          text="E-commerce de Coleccionables y Gaming"
          speed={35}
          active={loadingDone}
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
          fontFamily: 'Space Mono, monospace',
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
          maxWidth: 520,
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
