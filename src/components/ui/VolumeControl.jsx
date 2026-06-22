import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentationStore } from '../../store/presentationStore'

export default function VolumeControl() {
  const [open, setOpen] = useState(false)
  const volume = usePresentationStore((s) => s.volume)
  const setVolume = usePresentationStore((s) => s.setVolume)

  const muted = volume === 0

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <button
        onClick={() => setVolume(muted ? 0.5 : 0)}
        title={muted ? 'Activar sonido' : 'Silenciar'}
        style={{
          background: 'rgba(23,23,23,0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 10,
          cursor: 'pointer',
          color: muted ? 'rgba(161,161,170,0.4)' : 'rgba(244,244,245,0.8)',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,90,0,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        }}
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0, opacity: 0, scaleX: 0.5 }}
            animate={{ width: 80, opacity: 1, scaleX: 1 }}
            exit={{ width: 0, opacity: 0, scaleX: 0.5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              transformOrigin: 'left center',
              overflow: 'hidden',
              background: 'rgba(23,23,23,0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              title={`Volumen: ${Math.round(volume * 100)}%`}
              style={{
                width: '100%',
                height: 4,
                cursor: 'pointer',
                accentColor: '#ff5a00',
                background: 'transparent',
                margin: 0,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
