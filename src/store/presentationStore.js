import { create } from 'zustand'

export const TOTAL_SLIDES = 15

export const SLIDE_AUDIO = {
  1:  '/audio/1.mpeg',
  2:  '/audio/2.mpeg',
  3:  '/audio/3.mpeg',
  4:  '/audio/4.mpeg',
  5:  '/audio/5.mpeg',
  6:  '/audio/6.mpeg',
  7:  '/audio/7.mpeg',
  8:  '/audio/8.mpeg',
  9:  '/audio/9.mpeg',
  10: '/audio/10.mpeg',
  11: '/audio/11.mpeg',
  12: '/audio/12.mpeg',
  13: '/audio/13.mpeg',
  14: '/audio/14.mpeg',
  15: '/audio/15.mpeg', // Espacio para agregar el audio de la diapositiva 15
}

export const CAMERA_CONFIG = [
  { position: [0,   0,  14], target: [0,  0,  0] },  // 1   Hero
  { position: [-6,  1,  10], target: [-2, 0,  0] },  // 2   Intro
  { position: [0,   4,  12], target: [0,  0,  0] },  // 3   Arquitectura
  { position: [6,   0,  10], target: [2,  0,  0] },  // 4   Tech Stack
  { position: [5,   0,  10], target: [2,  0,  0] },  // 5   Catálogo
  { position: [-5,  1,   9], target: [-2, 0,  0] },  // 6   Autenticación
  { position: [5,   2,   9], target: [2,  0,  0] },  // 7   Perfil
  { position: [-4, -2,   9], target: [-1,-1,  0] },  // 8   Carrito
  { position: [0,   4,  10], target: [0,  1,  0] },  // 9   Pagos
  { position: [4,   1,   8], target: [1,  0,  0] },  // 10  IA
  { position: [-5, -1,   9], target: [-2, 0,  0] },  // 11  Admin
  { position: [0,  -3,  11], target: [0, -1,  0] },  // 12  Base de Datos
  { position: [3,   1,   9], target: [1,  0,  0] },  // 13  API
  { position: [0,   0,  12], target: [0,  0,  0] },  // 14  Cierre
  { position: [0,   0,  14], target: [0,  0,  0] },  // 15  Agradecimientos
]

export const usePresentationStore = create((set) => ({
  currentSlide: 1,
  direction: 1,
  isTransitioning: false,
  loadingDone: false,
  volume: 0.5,
  autoAdvance: true,
  audioPaused: false,
  audioKey: 0,

  setVolume: (v) => set({ volume: v }),
  toggleAutoAdvance: () => set((s) => ({ autoAdvance: !s.autoAdvance, audioKey: s.audioKey + 1 })),
  toggleAudioPaused: () => set((s) => ({ audioPaused: !s.audioPaused })),

  goTo: (n) =>
    set((s) => {
      if (n === s.currentSlide || s.isTransitioning) return s
      return { currentSlide: n, direction: n > s.currentSlide ? 1 : -1, isTransitioning: true }
    }),

  nextSlide: () =>
    set((s) => {
      if (s.currentSlide >= TOTAL_SLIDES || s.isTransitioning) return s
      return { currentSlide: s.currentSlide + 1, direction: 1, isTransitioning: true }
    }),

  prevSlide: () =>
    set((s) => {
      if (s.currentSlide <= 1 || s.isTransitioning) return s
      return { currentSlide: s.currentSlide - 1, direction: -1, isTransitioning: true }
    }),

  restartPresentation: () =>
    set((s) => {
      if (s.isTransitioning) return s
      return { currentSlide: 1, direction: -1, isTransitioning: true, audioKey: s.audioKey + 1 }
    }),

  setTransitioning: (v) => set({ isTransitioning: v }),
  setLoadingDone: () => set({ loadingDone: true }),
}))
