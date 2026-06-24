import { useRef, useState, useLayoutEffect } from 'react'

export default function AutoFit({ children, style }) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const measure = () => {
      const ow = outer.clientWidth
      const oh = outer.clientHeight
      const iw = inner.scrollWidth
      const ih = inner.scrollHeight
      if (iw === 0 || ih === 0) return
      const sx = ow / iw
      const sy = oh / ih
      setScale(Math.min(sx, sy, 1))
    }

    const ro = new ResizeObserver(measure)
    ro.observe(outer)
    ro.observe(inner)
    measure()

    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={outerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        ref={innerRef}
        style={{
          transformOrigin: 'center center',
          transform: `scale(${scale})`,
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
