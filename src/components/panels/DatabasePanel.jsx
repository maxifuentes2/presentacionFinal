import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const tables = [
  { name: 'users', desc: 'Usuarios, roles y preferencias', type: 'orange' },
  { name: 'products', desc: 'Catálogo completo con imágenes y variantes', type: 'blue' },
  { name: 'categories', desc: 'Categorías y subcategorías jerárquicas', type: 'orange' },
  { name: 'orders', desc: 'Pedidos con estados y montos', type: 'blue' },
  { name: 'order_items', desc: 'Detalle de productos por pedido', type: 'orange' },
  { name: 'addresses', desc: 'Direcciones de envío por usuario', type: 'blue' },
  { name: 'reviews', desc: 'Valoraciones y reseñas de productos', type: 'orange' },
  { name: 'wishlist', desc: 'Favoritos y lista de deseos', type: 'blue' },
  { name: 'payments', desc: 'Transacciones y comprobantes', type: 'orange' },
  { name: 'loyalty_points', desc: 'Puntos de fidelidad acumulados', type: 'blue' },
]

export default function DatabasePanel() {
  return (
    <GlassPanel>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 16,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.6)',
          marginBottom: 8,
        }}
      >
        12 — Base de Datos
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
        Diseño de Base de Datos
      </h2>

      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 22, color: 'rgba(161,161,170,0.65)', marginBottom: 18, lineHeight: 1.55 }}>
        Esquema relacional en MySQL con 10 tablas principales, índices
        optimizados, stored procedures para operaciones críticas y triggers
        de auditoría.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          width: '100%',
          maxWidth: 880,
          marginBottom: 10,
        }}
      >
        {tables.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.06 }}
            style={{
              background: `rgba(255,90,0,0.04)`,
              border: `1px solid ${t.type === 'orange' ? 'rgba(255,90,0,0.18)' : 'rgba(0,86,179,0.22)'}`,
              borderRadius: 10,
              padding: '14px 20px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: 16,
                color: t.type === 'orange' ? '#ff5a00' : '#0056b3',
                marginBottom: 2,
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontSize: 14,
                color: 'rgba(161,161,170,0.6)',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              {t.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: 12,
          fontSize: 16,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          color: 'rgba(0,86,179,0.4)',
          letterSpacing: 2,
        }}
      >
        "Datos bien estructurados, decisiones informadas."
      </motion.p>
    </GlassPanel>
  )
}
