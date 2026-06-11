import { AnimatePresence } from 'framer-motion'
import { usePresentationStore } from './store/presentationStore'
import { useKeyboard } from './hooks/useKeyboard'

import CanvasContainer from './components/canvas/CanvasContainer'
import LoadingScreen from './components/ui/LoadingScreen'
import NavBar from './components/ui/NavBar'
import ProgressBar from './components/ui/ProgressBar'

import HeroPanel from './components/panels/HeroPanel'
import IntroPanel from './components/panels/IntroPanel'
import CatalogPanel from './components/panels/CatalogPanel'
import AuthPanel from './components/panels/AuthPanel'
import ProfilePanel from './components/panels/ProfilePanel'
import CartPanel from './components/panels/CartPanel'
import PaymentsPanel from './components/panels/PaymentsPanel'
import IAPanel from './components/panels/IAPanel'
import AdminPanel from './components/panels/AdminPanel'
import ClosingPanel from './components/panels/ClosingPanel'
import TrollPanel from './components/panels/TrollPanel'

const PANELS = {
  1:  HeroPanel,
  2:  IntroPanel,
  3:  CatalogPanel,
  4:  AuthPanel,
  5:  ProfilePanel,
  6:  CartPanel,
  7:  PaymentsPanel,
  8:  IAPanel,
  9:  AdminPanel,
  10: ClosingPanel,
  11: TrollPanel,
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
