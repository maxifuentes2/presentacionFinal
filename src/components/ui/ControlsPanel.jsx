import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentationStore } from '../../store/presentationStore'

const btnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'rgba(244,244,245,0.8)',
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderRadius: 8,
  transition: 'all 0.15s',
}

const hoverIn = (e) => {
  e.currentTarget.style.background = 'rgba(255,90,0,0.12)'
  e.currentTarget.style.color = '#ff5a00'
}
const hoverOut = (e) => {
  e.currentTarget.style.background = 'none'
  e.currentTarget.style.color = 'rgba(244,244,245,0.8)'
}
const hoverInAA = (e) => {
  e.currentTarget.style.background = 'rgba(255,90,0,0.12)'
}
const hoverOutAA = (e) => {
  e.currentTarget.style.background = 'none'
}

export default function ControlsPanel() {
  const [open, setOpen] = useState(false)
  const [fs, setFs] = useState(false)

  const volume = usePresentationStore((s) => s.volume)
  const setVolume = usePresentationStore((s) => s.setVolume)
  const autoAdvance = usePresentationStore((s) => s.autoAdvance)
  const toggleAutoAdvance = usePresentationStore((s) => s.toggleAutoAdvance)
  const audioPaused = usePresentationStore((s) => s.audioPaused)
  const toggleAudioPaused = usePresentationStore((s) => s.toggleAudioPaused)
  const restartPresentation = usePresentationStore((s) => s.restartPresentation)

  useEffect(() => {
    const handler = () => setFs(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen()
  }

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        pointerEvents: 'all',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="Controles"
        style={{
          ...btnStyle,
          background: open ? 'rgba(255,90,0,0.12)' : 'rgba(23,23,23,0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 10,
          width: 36,
          height: 36,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,90,0,0.4)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              height: 36,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              background: 'rgba(23,23,23,0.75)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
              padding: '0 8px',
            }}
          >
            {/* Play / Pause */}
            <button
              onClick={toggleAudioPaused}
              title={audioPaused ? 'Reanudar audio' : 'Pausar audio'}
              style={{ ...btnStyle, width: 28, height: 28 }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              {audioPaused ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </button>

            {/* Volumen */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
                title={volume === 0 ? 'Activar sonido' : 'Silenciar'}
                style={{ ...btnStyle, width: 28, height: 28 }}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                {volume === 0 ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                title={`Volumen: ${Math.round(volume * 100)}%`}
                style={{
                  width: 64,
                  height: 3,
                  cursor: 'pointer',
                  accentColor: '#ff5a00',
                  background: 'transparent',
                  margin: 0,
                }}
              />
            </div>

            {/* Auto-avance */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingLeft: 4, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={toggleAutoAdvance}
                title={autoAdvance ? 'Auto-avance activado' : 'Auto-avance desactivado'}
                style={{
                  ...btnStyle,
                  color: autoAdvance ? '#ff5a00' : 'rgba(161,161,170,0.4)',
                  width: 28,
                  height: 28,
                  fontSize: 16,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1,
                }}
                onMouseEnter={hoverInAA}
                onMouseLeave={hoverOutAA}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="1 4 1 10 7 10" />
                  <polyline points="23 20 23 14 17 14" />
                  <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
                </svg>
              </button>
            </div>

            {/* Fullscreen */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingLeft: 4, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={toggleFs}
                title={fs ? 'Salir de pantalla completa' : 'Pantalla completa'}
                style={{ ...btnStyle, width: 28, height: 28 }}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                {fs ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="14" y1="10" x2="21" y2="3" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                )}
              </button>
            </div>

            {/* Reiniciar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingLeft: 4, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={restartPresentation}
                title="Reiniciar presentación"
                style={{ ...btnStyle, width: 28, height: 28 }}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
