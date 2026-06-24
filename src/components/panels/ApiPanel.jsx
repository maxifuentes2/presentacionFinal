import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const endpoints = [
  { method: 'POST', path: '/api/auth/register', desc: 'Registro de usuario', color: 'orange' },
  { method: 'POST', path: '/api/auth/login', desc: 'Inicio de sesión', color: 'orange' },
  { method: 'GET',  path: '/api/products', desc: 'Listar productos con filtros', color: 'blue' },
  { method: 'GET',  path: '/api/products/:id', desc: 'Detalle de producto', color: 'blue' },
  { method: 'GET',  path: '/api/categories', desc: 'Categorías disponibles', color: 'orange' },
  { method: 'POST', path: '/api/orders', desc: 'Crear pedido', color: 'orange' },
  { method: 'GET',  path: '/api/orders/:id', desc: 'Estado del pedido', color: 'blue' },
  { method: 'POST', path: '/api/payments/mp', desc: 'Pago Mercado Pago', color: 'orange' },
  { method: 'POST', path: '/api/payments/crypto', desc: 'Pago cripto', color: 'blue' },
  { method: 'POST', path: '/api/chatbot', desc: 'Consulta al chatbot IA', color: 'orange' },
]

export default function ApiPanel() {
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
        13 — API REST
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
        Estructura de la API
      </h2>

      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 28, color: 'rgba(161,161,170,0.65)', marginBottom: 10, lineHeight: 1.55 }}>
        API RESTful con autenticación JWT, middleware de roles, validación de
        datos y respuestas normalizadas. Documentación interactiva disponible.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 8,
          width: '100%',
          maxWidth: 800,
          marginBottom: 4,
        }}
      >
        {endpoints.map((ep, i) => (
          <motion.div
            key={ep.path}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.04 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: 6,
              padding: '10px 16px',
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: 13,
                letterSpacing: 1,
                padding: '2px 8px',
                borderRadius: 4,
                background: ep.method === 'GET'
                  ? 'rgba(0,86,179,0.15)'
                  : 'rgba(255,90,0,0.15)',
                color: ep.method === 'GET' ? '#0056b3' : '#ff5a00',
                minWidth: 42,
                textAlign: 'center',
                flexShrink: 0,
              }}
            >
              {ep.method}
            </span>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: 15,
                color: 'rgba(244,244,245,0.8)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {ep.path}
            </span>
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
          color: 'rgba(255,90,0,0.4)',
          letterSpacing: 2,
        }}
      >
        "Cada endpoint, un propósito claro."
      </motion.p>
    </GlassPanel>
  )
}
