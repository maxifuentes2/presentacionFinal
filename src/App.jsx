import { AnimatePresence } from 'framer-motion'
import { usePresentationStore } from './store/presentationStore'
import { useKeyboard } from './hooks/useKeyboard'

import CanvasContainer from './components/canvas/CanvasContainer'
import LoadingScreen from './components/ui/LoadingScreen'
import NavBar from './components/ui/NavBar'
import ProgressBar from './components/ui/ProgressBar'

import HeroPanel from './components/panels/HeroPanel'
import ProblemPanel from './components/panels/ProblemPanel'
import SolutionPanel from './components/panels/SolutionPanel'
import AuthPanel from './components/panels/AuthPanel'
import CatalogPanel from './components/panels/CatalogPanel'
import CryptoPanel from './components/panels/CryptoPanel'
import StackPanel from './components/panels/StackPanel'
import DifferentiatorsPanel from './components/panels/DifferentiatorsPanel'
import VisionPanel from './components/panels/VisionPanel'
import ClosingPanel from './components/panels/ClosingPanel'

const PANELS = {
  1:  HeroPanel,
  2:  ProblemPanel,
  3:  SolutionPanel,
  4:  AuthPanel,
  5:  CatalogPanel,
  6:  CryptoPanel,
  7:  StackPanel,
  8:  DifferentiatorsPanel,
  9:  VisionPanel,
  10: ClosingPanel,
}

export default function App() {
  const { currentSlide, nextSlide, prevSlide, loadingDone } = usePresentationStore()
  useKeyboard(nextSlide, prevSlide)

  const ActivePanel = PANELS[currentSlide]

  return (
    <>
      {/* Loading */}
      <LoadingScreen />

      {/* Canvas 3D de fondo */}
      <CanvasContainer />

      {/* UI superpuesta */}
      {loadingDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProgressBar />

          {/* Slide activo */}
          <AnimatePresence mode="wait">
            <ActivePanel key={currentSlide} />
          </AnimatePresence>

          <NavBar />
        </div>
      )}
    </>
  )
}
