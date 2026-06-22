import { useState, useEffect } from 'react'

export default function ScrambleText({ text, delay = 0, duration = 800 }) {
  const [displayText, setDisplayText] = useState(text)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'

  useEffect(() => {
    let frame = 0
    const totalFrames = Math.max(Math.floor((duration / 1000) * 20), 1)
    let timeoutId, intervalId

    const startAnimation = () => {
      frame = 0
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const tick = () => {
          setDisplayText(
            text.split('').map((char, i) => {
              if (char === ' ') return ' '
              const progress = frame / totalFrames
              if (progress > i / text.length) return char
              return chars[Math.floor(Math.random() * chars.length)]
            }).join('')
          )
          frame++
          if (frame >= totalFrames) {
            setDisplayText(text)
            return
          }
          timeoutId = setTimeout(tick, 50)
        }
        tick()
      }, delay)
    }

    startAnimation()
    intervalId = setInterval(startAnimation, 10000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, delay, duration])

  return <>{displayText}</>
}
