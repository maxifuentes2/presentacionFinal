import { useEffect, useRef } from 'react'
import { usePresentationStore, SLIDE_AUDIO } from '../../store/presentationStore'

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

export default function SlideAudio() {
  const currentSlide = usePresentationStore((s) => s.currentSlide)
  const volume = usePresentationStore((s) => s.volume)
  const autoAdvance = usePresentationStore((s) => s.autoAdvance)
  const audioPaused = usePresentationStore((s) => s.audioPaused)
  const audioKey = usePresentationStore((s) => s.audioKey)
  const nextSlide = usePresentationStore((s) => s.nextSlide)
  const audioRef = useRef(null)
  const playTimer = useRef(null)
  const autoAdvanceRef = useRef(autoAdvance)
  const audioPausedRef = useRef(audioPaused)

  useEffect(() => { autoAdvanceRef.current = autoAdvance }, [autoAdvance])
  useEffect(() => { audioPausedRef.current = audioPaused }, [audioPaused])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audio.src) return
    if (audioPaused) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
  }, [audioPaused])

  useEffect(() => {
    if (!autoAdvance) clearTimeout(playTimer.current)
  }, [autoAdvance])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audio.src) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }, [audioKey])

  useEffect(() => {
    const src = SLIDE_AUDIO[currentSlide]
    if (!src) return

    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.style.display = 'none'
      document.body.appendChild(audioRef.current)
    }

    const audio = audioRef.current
    audio.preload = 'auto'
    audio.volume = volume
    audio.src = src
    audio.currentTime = 0

    const onEnded = () => {
      if (autoAdvanceRef.current) {
        playTimer.current = setTimeout(() => nextSlide(), 2000)
      }
    }
    audio.addEventListener('ended', onEnded)

    if (!audioPaused) {
      if (isIOS) {
        audio.play().catch(() => {})
      } else {
        playTimer.current = setTimeout(() => {
          audio.play().catch(() => {})
        }, 1500)
      }
    }

    return () => {
      clearTimeout(playTimer.current)
      audio.removeEventListener('ended', onEnded)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [currentSlide, volume, nextSlide])

  return null
}
