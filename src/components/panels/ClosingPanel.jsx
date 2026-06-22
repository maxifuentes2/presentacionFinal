import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

export default function ClosingPanel() {
  return (
    <GlassPanel>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 16,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.5)',
          marginBottom: 24,
        }}
      >
        14 — Cierre
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 500,
          fontStyle: 'italic',
          fontSize: 'clamp(26px, 5vw, 38px)',
          color: 'rgba(161,161,170,0.5)',
          letterSpacing: 1,
          marginBottom: 10,
        }}
      >
        El futuro del coleccionismo digital ya está aquí.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: 20,
          color: 'rgba(161,161,170,0.65)',
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 18,
        }}
      >
        Equipo de Desarrollo
      </motion.p>

      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="gradient-text"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(42px, 7vw, 72px)',
          letterSpacing: -2,
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        VNTG Hub
      </motion.h2>

      <motion.a
        href="https://vntg-hub.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,90,0,0.08), rgba(0,86,179,0.12))',
          border: '1px solid rgba(255,90,0,0.35)',
          borderRadius: 14,
          padding: '16px 28px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(255,90,0,0.08)',
          maxWidth: 720,
          width: '100%',
          marginBottom: 20,
          textDecoration: 'none',
          display: 'block',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,90,0,0.6)'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255,90,0,0.15)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,90,0,0.35)'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255,90,0,0.08)'
        }}
      >
        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontStyle: 'italic', fontSize: 12, letterSpacing: 4, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 6 }}>
          Demo en vivo
        </p>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', fontSize: 'clamp(24px, 5vw, 34px)', color: '#ff5a00', letterSpacing: 1, textShadow: '0 0 20px rgba(255,90,0,0.5)' }}>
          vntg-hub.vercel.app
        </p>
      </motion.a>

      <motion.a
        href="https://github.com/maxifuentes2/vntg-hub"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          background: 'linear-gradient(135deg, rgba(0,86,179,0.08), rgba(255,90,0,0.12))',
          border: '1px solid rgba(0,86,179,0.35)',
          borderRadius: 14,
          padding: '18px 32px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(0,86,179,0.08)',
          maxWidth: 720,
          width: '100%',
          marginBottom: 20,
          textDecoration: 'none',
          display: 'block',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,90,0,0.6)'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255,90,0,0.15)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0,86,179,0.35)'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(0,86,179,0.08)'
        }}
      >
        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontStyle: 'italic', fontSize: 12, letterSpacing: 4, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 6 }}>
          Repositorio
        </p>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', fontSize: 'clamp(18px, 3vw, 26px)', color: '#0056b3', letterSpacing: 0.5, textShadow: '0 0 20px rgba(0,86,179,0.4)' }}>
          github.com/maxifuentes2/vntg-hub
        </p>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
          maxWidth: 800,
          marginBottom: 20,
        }}
      >
        {['Máximo Fuentes', 'Santiago Zufia','Bautista Delluniversidad', 'Gaspar Barroso', 'Bruno Guzmán', 'Ignacio Povolo'].map((name) => (
          <div key={name} className="chip chip-orange" style={{ fontSize: 16, padding: '11px 22px' }}>
            <span className="chip-dot chip-dot-orange" />
            {name}
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        style={{
          fontSize: 18,
          color: 'rgba(161,161,170,0.45)',
          lineHeight: 1.6,
          maxWidth: 800,
        }}
      >
        Gracias por acompañarnos. VNTG Hub no es solo una tienda, es una
        plataforma diseñada para redefinir cómo las comunidades gamer y
        coleccionistas descubren, interactúan y compran.
      </motion.p>
    </GlassPanel>
  )
}
