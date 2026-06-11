import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const coins = [
  { symbol: '₿', name: 'Bitcoin',      color: '#f7931a' },
  { symbol: '₮', name: 'Tether USDT',  color: '#26a17b' },
  { symbol: '🏦', name: 'Mercado Pago', color: '#009ee3' },
]
const features = [
  { label: 'Carrito Interactivo',    type: 'orange' },
  { label: 'Wishlist Persistente',   type: 'orange' },
  { label: 'QR Crypto Dinámico',     type: 'blue' },
  { label: 'Confirmación Gmail API', type: 'blue' },
]

function SpinningCoin({ symbol, name, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.08, y: -4 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: `rgba(${color === '#f7931a' ? '247,147,26' : color === '#26a17b' ? '38,161,123' : '0,158,227'},0.1)`,
        border: `1px solid ${color}44`,
        borderRadius: 12,
        padding: '10px 16px',
        cursor: 'default',
        flex: 1,
        minWidth: 130,
      }}
    >
      <span style={{ fontSize: 22 }}>{symbol}</span>
      <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color, fontWeight: 600 }}>
        {name}
      </span>
    </motion.div>
  )
}

export default function CryptoPanel() {
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
        Diapositiva 06 — Compra &amp; Pagos
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
        Compras &amp; Crypto
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 18, lineHeight: 1.55 }}>
        Carrito interactivo con múltiples pasarelas de pago. Soporte nativo para
        criptomonedas con QR dinámico y confirmación automática vía Gmail API.
      </p>

      {/* Monedas */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18 }}>
        {coins.map((c, i) => (
          <SpinningCoin key={c.name} {...c} delay={0.15 * i} />
        ))}
      </div>

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
          border: '2px dashed rgba(255,90,0,0.28)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 480,
          height: 130,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: 'rgba(0,0,0,0.35)',
          color: 'rgba(255,90,0,0.45)',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
        whileHover={{ borderColor: 'rgba(255,90,0,0.6)' }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' }}>
          VIDEO_PLACEHOLDER_CRYPTO_CART
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
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Comprar debe sentirse tan natural como navegar."
      </motion.p>
    </GlassPanel>
  )
}
