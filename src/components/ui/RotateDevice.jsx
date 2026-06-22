import { useState, useEffect } from 'react'

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

export default function RotateDevice({ children }) {
  const [showPrompt, setShowPrompt] = useState(false)
  const [ios] = useState(isIOS)

  useEffect(() => {
    const check = () => {
      const portrait = window.innerHeight > window.innerWidth
      const mobile = window.innerWidth < 768
      setShowPrompt(portrait && mobile)
    }
    check()
    window.addEventListener('resize', check)
    window.addEventListener('orientationchange', check)
    return () => {
      window.removeEventListener('resize', check)
      window.removeEventListener('orientationchange', check)
    }
  }, [])

  if (!showPrompt) return children

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#171717',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 20,
        textAlign: 'center',
      }}
    >
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M8 4v2M16 4v2" />
        <path d="M2 12h20" strokeWidth="1" opacity="0.3" />
      </svg>
      <h2
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 22,
          color: '#f4f4f5',
        }}
      >
        Girá tu dispositivo
      </h2>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 500,
          fontStyle: 'italic',
          fontSize: 14,
          color: 'rgba(161,161,170,0.7)',
          maxWidth: 280,
        }}
      >
        Esta presentación está diseñada en horizontal. Rotá tu dispositivo para verla correctamente.
      </p>
      <div
        style={{
          width: 48,
          height: 48,
          border: '2px solid rgba(255,90,0,0.3)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'phoneRotate 2s ease-in-out infinite',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <style>{`
        @keyframes phoneRotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }
      `}</style>
    </div>
  )
}
