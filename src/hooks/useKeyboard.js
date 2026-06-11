import { useEffect } from 'react'

/**
 * Navegación por teclado y swipe táctil
 */
export function useKeyboard(onNext, onPrev) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') onNext()
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onNext, onPrev])

  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd   = (e) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev()
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend',   onEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend',   onEnd)
    }
  }, [onNext, onPrev])
}
