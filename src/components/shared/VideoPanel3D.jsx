import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, RoundedBox } from '@react-three/drei'

/**
 * VideoPanel3D
 * Renderiza un video HTML (o placeholder) como portal dentro del espacio 3D.
 *
 * Props:
 *   src          {string|null}  Ruta al MP4. Si null muestra placeholder.
 *   placeholder  {string}       Texto del placeholder.
 *   position     {[x,y,z]}      Posición en el mundo 3D.
 *   width        {number}       Ancho del panel (unidades Three.js).
 *   height       {number}       Alto del panel.
 *   rotationY    {number}       Rotación Y en radianes.
 *   autoplay     {boolean}      Reproducir al montar.
 *   floatAmp     {number}       Amplitud de la flotación (default 0.1).
 */
export default function VideoPanel3D({
  src = null,
  placeholder = 'VIDEO_PLACEHOLDER',
  position = [0, 0, 0],
  width = 4.2,
  height = 2.6,
  rotationY = 0,
  autoplay = false,
  floatAmp = 0.1,
}) {
  const groupRef = useRef()
  const videoRef = useRef()
  const baseY = position[1]
  const [playing, setPlaying] = useState(autoplay)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y =
      baseY + Math.sin(state.clock.elapsedTime * 0.65) * floatAmp
  })

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  // Pixel size del portal HTML (escala 96px por unidad Three.js)
  const PX_W = Math.round(width  * 96)
  const PX_H = Math.round(height * 96)

  return (
    <group
      ref={groupRef}
      position={[position[0], baseY, position[2]]}
      rotation={[0, rotationY, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Marco sólido */}
      <RoundedBox args={[width + 0.14, height + 0.14, 0.05]} radius={0.08}>
        <meshStandardMaterial
          color={hovered ? '#1c1c38' : '#0e0e20'}
          transparent
          opacity={0.88}
          metalness={0.35}
          roughness={0.55}
        />
      </RoundedBox>

      {/* Borde neón animado */}
      <RoundedBox args={[width + 0.18, height + 0.18, 0.04]} radius={0.09}>
        <meshStandardMaterial
          color={hovered ? '#ff5a00' : '#0056b3'}
          transparent
          opacity={hovered ? 0.65 : 0.28}
          emissive={hovered ? '#ff5a00' : '#0056b3'}
          emissiveIntensity={hovered ? 1.0 : 0.4}
          wireframe
        />
      </RoundedBox>

      {/* Portal HTML */}
      <Html
        transform
        position={[0, 0, 0.07]}
        style={{ width: `${PX_W}px`, height: `${PX_H}px` }}
        distanceFactor={1.5}
        zIndexRange={[1, 5]}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            overflow: 'hidden',
            background: 'rgba(4, 4, 14, 0.95)',
            border: '1px solid rgba(255,90,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: src ? 'pointer' : 'default',
          }}
          onClick={src ? togglePlay : undefined}
        >
          {src ? (
            <>
              <video
                ref={videoRef}
                src={src}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loop
                muted
                playsInline
                autoPlay={autoplay}
              />
              {/* Overlay play/pause */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.35)',
                  opacity: playing ? 0 : 1,
                  transition: 'opacity 0.3s',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(255,90,0,0.12)',
                    border: '2px solid #ff5a00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(255,90,0,0.4)',
                  }}
                >
                  <span style={{ color: '#ff5a00', fontSize: 22, marginLeft: 3 }}>▶</span>
                </div>
              </div>
            </>
          ) : (
            /* ── Placeholder ── */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                padding: 20,
                textAlign: 'center',
              }}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,90,0,0.45)"
                strokeWidth="1.4"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <polyline points="8,21 12,17 16,21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  letterSpacing: 2,
                  color: 'rgba(255,90,0,0.55)',
                  textTransform: 'uppercase',
                }}
              >
                {placeholder}
              </span>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: 1,
                }}
              >
                Insertar video MP4 aquí
              </span>
            </div>
          )}
        </div>
      </Html>

      {/* Luz de acento dinámica */}
      <pointLight
        position={[0, -(height / 2) - 0.4, 0.3]}
        color={hovered ? '#ff5a00' : '#0056b3'}
        intensity={hovered ? 1.8 : 0.7}
        distance={3.5}
      />
    </group>
  )
}
