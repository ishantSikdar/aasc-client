import { useMemo } from 'react'
import { APP_ROUTES } from '../constants/routes'
import { useLocation } from 'react-router-dom'

const useIsHomePage = () => {
  const location = useLocation()
  const isNotHome = useMemo(
    () =>
      APP_ROUTES.some(
        (route) => route.id !== 1 && location.pathname.includes(route.path)
      ),
    [location]
  )

  return {
    isHome: !isNotHome,
  }
}

export default useIsHomePage
