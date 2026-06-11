import { create } from 'zustand'

export const TOTAL_SLIDES = 11

// Posición y target de cámara para cada slide
export const CAMERA_CONFIG = [
  { position: [0,   0,  14], target: [0,  0,  0] },  // 1  Portada
  { position: [-6,  1,  10], target: [-2, 0,  0] },  // 2  Intro & Diseño
  { position: [5,   0,  10], target: [2,  0,  0] },  // 3  Catálogo
  { position: [-5,  1,   9], target: [-2, 0,  0] },  // 4  Autenticación
  { position: [5,   2,   9], target: [2,  0,  0] },  // 5  Perfil
  { position: [-4, -2,   9], target: [-1,-1,  0] },  // 6  Carrito
  { position: [0,   4,  10], target: [0,  1,  0] },  // 7  Pagos
  { position: [4,   1,   8], target: [1,  0,  0] },  // 8  IA
  { position: [-5, -1,   9], target: [-2, 0,  0] },  // 9  Admin
  { position: [0,   0,  12], target: [0,  0,  0] },  // 10 Cierre
  { position: [0,   0,  12], target: [0,  0,  0] },  // 11 Troll
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
