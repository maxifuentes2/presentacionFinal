import { create } from 'zustand'

export const TOTAL_SLIDES = 10

// Posición y target de cámara para cada slide
export const CAMERA_CONFIG = [
  { position: [0,   0,  14], target: [0,  0,  0] },  // 1  Portada
  { position: [-6,  1,  10], target: [-2, 0,  0] },  // 2  Problema
  { position: [5,   0,  10], target: [2,  0,  0] },  // 3  Solución
  { position: [-5,  1,   9], target: [-2, 0,  0] },  // 4  UX & Auth
  { position: [5,   2,   9], target: [2,  0,  0] },  // 5  IA & Catálogo
  { position: [-4, -2,   9], target: [-1,-1,  0] },  // 6  Pagos
  { position: [0,   4,  10], target: [0,  1,  0] },  // 7  Stack
  { position: [4,   1,   8], target: [1,  0,  0] },  // 8  Diferenciadores
  { position: [-5, -1,   9], target: [-2, 0,  0] },  // 9  Visión
  { position: [0,   0,  12], target: [0,  0,  0] },  // 10 Cierre
]

export const usePresentationStore = create((set) => ({
  currentSlide: 1,
  isTransitioning: false,
  loadingDone: false,

  goTo: (n) =>
    set((s) => {
      if (n === s.currentSlide || s.isTransitioning) return s
      return { currentSlide: n, isTransitioning: true }
    }),

  nextSlide: () =>
    set((s) => {
      if (s.currentSlide >= TOTAL_SLIDES || s.isTransitioning) return s
      return { currentSlide: s.currentSlide + 1, isTransitioning: true }
    }),

  prevSlide: () =>
    set((s) => {
      if (s.currentSlide <= 1 || s.isTransitioning) return s
      return { currentSlide: s.currentSlide - 1, isTransitioning: true }
    }),

  setTransitioning: (v) => set({ isTransitioning: v }),
  setLoadingDone: () => set({ loadingDone: true }),
}))
