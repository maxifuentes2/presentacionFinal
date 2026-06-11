import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const features = [
  { label: 'Mercado Pago SDK',       type: 'orange' },
  { label: 'Webhooks Estado',        type: 'blue' },
  { label: 'Crypto QR Dinámico',     type: 'orange' },
  { label: 'USDT / BTC / ETH',       type: 'blue' },
  { label: 'Transferencia Multer',   type: 'orange' },
  { label: 'Selector USD / ARS',     type: 'blue' },
]

export default function PaymentsPanel() {
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
        Diapositiva 07 — Pasarelas de Pago
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
        Pagos y Finanzas
      </h2>

      <p style={{ fontSize: 15, color: 'rgba(161,161,170,0.65)', marginBottom: 22, lineHeight: 1.55 }}>
        Integración con Mercado Pago SDK y webhooks para actualización de estados.
        Pagos con criptomonedas (USDT, BTC, ETH) mediante QR dinámico, montos
        mínimos y precios en tiempo real. Subida de comprobantes con Multer y
        selector multi-moneda USD/ARS con tasa actualizada cada 60s.
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
          overflow: 'hidden',
          border: '1px solid rgba(255,90,0,0.2)',
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <video
          src="https://res.cloudinary.com/dfqedjx2l/video/upload/v1781123432/VNTG-HUB_PAGOS_vrbpe9.mp4"
          style={{ width: '100%', display: 'block', borderRadius: 12 }}
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
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
          fontStyle: 'italic',
        }}
      >
        "Pagar debería ser tan fácil como comprar."
      </motion.p>
    </GlassPanel>
  )
}
