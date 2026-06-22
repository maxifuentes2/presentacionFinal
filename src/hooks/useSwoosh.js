import { useRef, useCallback } from 'react'
import { usePresentationStore } from '../store/presentationStore'

export default function useSwoosh() {
  const volume = usePresentationStore((s) => s.volume)
  const lastSlide = useRef(null)
  const audioRef = useRef(null)

  const play = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio()
        audioRef.current.preload = 'auto'
      }

      const a = audioRef.current
      a.src = '/audio/Swoosh.MP3'
      a.volume = volume * 0.2
      a.currentTime = 0
      a.play()
    } catch {
    }
  }, [volume])

  const swoosh = useCallback((newSlide) => {
    const prev = lastSlide.current
    lastSlide.current = newSlide
    if (prev !== null && prev !== newSlide) {
      play()
    }
  }, [play])

  return swoosh
}
