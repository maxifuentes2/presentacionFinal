import { useState, useEffect, useRef } from 'react'

/**
 * useTypewriter
 * @param {string} text       - Texto a escribir
 * @param {number} speed      - Ms entre caracteres (default 60)
 * @param {boolean} active    - Si false, no empieza
 * @param {number} delay      - Ms antes de iniciar (default 0)
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 60, active = true, delay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const timerRef = useRef(null)
  const delayRef = useRef(null)

  useEffect(() => {
    if (!active) return
    setDisplayed('')
    setDone(false)

    delayRef.current = setTimeout(() => {
      let i = 0
      timerRef.current = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(timerRef.current)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(delayRef.current)
      clearInterval(timerRef.current)
    }
  }, [text, speed, active, delay])

  return { displayed, done }
}
