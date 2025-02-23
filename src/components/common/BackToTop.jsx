import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function BackToTop() {
  const { pathname } = useLocation()

  // component to scroll to top on routing
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
