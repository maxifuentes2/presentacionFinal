import { useEffect, useRef } from 'react'

const VIDEOS = [
  'https://res.cloudinary.com/dycgwwgng/video/upload/v1781150748/demo_bgjpd9.mp4',
  'https://res.cloudinary.com/dfqedjx2l/video/upload/v1781123419/VNTG-HUB_INICIAR_SESION_giz51w.mp4',
  'https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415234/DIRECCIONES_VNTG_mxpl4b.mp4',
  'https://res.cloudinary.com/dhg3jbifk/video/upload/v1781151523/VNTG-HUB_ELDELLU_TRAIDOR_c1oyie.mp4',
  'https://res.cloudinary.com/dfqedjx2l/video/upload/v1781123432/VNTG-HUB_PAGOS_vrbpe9.mp4',
  'https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415243/FILTROS_VNTG_noajcp.mp4',
  'https://res.cloudinary.com/dhg3jbifk/video/upload/v1780415226/CHATBOT_VNTG_nfduei.mp4',
  'https://res.cloudinary.com/dybr8xxre/video/upload/v1781153558/VNTG-HUB_AMIGO_IMAK_oqtdqc.mp4',
]

export default function PreloadVideos() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = document.createElement('div')
    container.style.display = 'none'
    containerRef.current = container
    document.body.appendChild(container)

    VIDEOS.forEach((src) => {
      const video = document.createElement('video')
      video.preload = 'auto'
      video.src = src
      video.muted = true
      video.load()
      container.appendChild(video)
    })

    return () => {
      if (container.parentNode) container.parentNode.removeChild(container)
    }
  }, [])

  return null
}
