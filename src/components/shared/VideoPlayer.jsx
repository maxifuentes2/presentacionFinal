import { useRef, useState } from 'react'

export default function VideoPlayer({ src, style, ...props }) {
  const videoRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = async () => {
    const el = videoRef.current
    if (!el) return
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      } else {
        await el.requestFullscreen()
        setIsFullscreen(true)
      }
    } catch {
      // fallback para iOS/webkit
      if (el.webkitEnterFullscreen) {
        el.webkitEnterFullscreen()
        setIsFullscreen(true)
      }
    }
  }

  return (
    <div style={{ position: 'relative', ...style }}>
      <video
        ref={videoRef}
        src={src}
        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onFullscreenChange={() => setIsFullscreen(!!document.fullscreenElement)}
        {...props}
      />
      <button
        onClick={toggleFullscreen}
        aria-label="Fullscreen"
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 36,
          height: 36,
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(0,0,0,0.55)',
          color: '#fff',
          fontSize: 16,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          transition: 'all 0.2s',
          opacity: 0.7,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
      >
        {isFullscreen ? '⛶' : '⛶'}
      </button>
    </div>
  )
}
