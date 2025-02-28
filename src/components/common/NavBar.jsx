import { Link, useLocation } from 'react-router-dom'
import {
  ROUTE_ABOUT,
  ROUTE_EXE_COUNCIL,
  ROUTE_EVENTS,
  ROUTE_GALLERY,
  ROUTE_HOME,
  ROUTE_AASC_COUNCIL,
  ROUTE_AASC_COMMITTEE,
  APP_ROUTES,
} from '../../constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useMemo, useState } from 'react'
import { cn, hoverLinkClasses } from '../../utils/utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import useIsHomePage from '../../hooks/isPageHome'

export default function NavBar({ isMobile }) {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const [showCouncil, setShowCouncil] = useState(false)
  const innerHeightThreshold = 100
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)
  const { isHome } = useIsHomePage()

  const toggleMobileMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  const closeMobileMenu = () => {
    setShowMenu(false)
  }

  const toggleCouncil = () => {
    setShowCouncil((prev) => !prev)
  }

  useMotionValueEvent(scrollY, 'change', (current) => {
    setIsVisible(current < 10 || current < scrollY.getPrevious())

    if (showMenu) {
      setShowMenu(false)
    }
  })

  const NavLink = ({ route, label }) => (
    <Link className={cn(hoverLinkClasses, 'before:bg-black')} to={route}>
      {label}
    </Link>
  )

  return (
    <>
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        className='z-50 fixed top-0 transition-all text-black duration-300 ease-in-out left-0 right-0 flex justify-between items-center h-14 md:h-20 p-4'
      >
        <div className='flex gap-2 lg:gap-4 items-center'>
          {/* <a href="https://www.msijanakpuri.com/" target="_blank">
          <img
            src="/msiLogo.png"
            alt="Alumni Association"
            className="h-12 md:h-16"
          />
        </a> */}
          <Link to={ROUTE_HOME} onClick={closeMobileMenu}>
            <img
              src='/aascLogoMSI-no-bg.png'
              alt='Alumni Association'
              className='h-12 md:h-16 p-2 bg-white/80 backdrop-blur-md px-3 overflow-visible md:px-6 rounded-full transition-colors duration-300 ease-in-out'
            />
          </Link>
        </div>

        {/* For Tab/Desktop screen */}
        {!isMobile && (
          <div className='relative py-3 bg-white/80 backdrop-blur-md rounded-full flex justify-between items-center px-7 lg:px-10 gap-10 md:gap-5 lg:gap-14 text-sm font-light uppercase'>
            <NavLink route={ROUTE_HOME} label={'Home'} />
            <NavLink route={ROUTE_ABOUT} label={'About'} />
            <NavLink route={ROUTE_AASC_COMMITTEE} label={'Committee'} />
            <NavLink route={ROUTE_AASC_COUNCIL} label={'Council'} />
            <NavLink route={ROUTE_EVENTS} label={'Events'} />
          </div>
        )}

        {/* Hamburger button to enable Mobile menu, only displays on mobile size res */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className={`z-10 text-black bg-white/50 backdrop-blur-md size-10 rounded-full flex justify-center items-center`}
          >
            {!showMenu ? (
              <FontAwesomeIcon
                icon={faBars}
                className='size-5'
                color='#000'
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                className='size-5'
                color='#000'
              />
            )}
          </button>
        )}
      </motion.div>

      {/* For Mobile, Menu Screen */}
      {isMobile && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: showMenu ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          className='fixed top-0 z-40 right-0 bottom-0 opacity-100 bg-white/70 backdrop-blur-md w-56 z-5 shadow-md overflow-y-auto transform transition-transform'
        >
          <div className='mt-20 flex flex-col gap-1 text-right p-4 font-light uppercase text-lg'>
            <Link
              to={ROUTE_HOME}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              Home
            </Link>
            <Link
              to={ROUTE_ABOUT}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              About Us
            </Link>
            <Link
              to={ROUTE_EXE_COUNCIL}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              Executive Council
            </Link>
            <Link
              to={ROUTE_AASC_COMMITTEE}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              Alumni Committee
            </Link>
            <Link
              to={ROUTE_AASC_COUNCIL}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              AASC Council
            </Link>
            <Link
              to={ROUTE_EVENTS}
              onClick={closeMobileMenu}
              className='border-b-[1pt] border-[#252525] p-2'
            >
              Events
            </Link>
            {/* <Link
              to={ROUTE_GALLERY}
              onClick={closeMobileMenu}
              className="border-b-[1pt] border-[#252525] p-2"
            >
              Gallery
            </Link> */}
          </div>
        </motion.div>
      )}
    </>
  )
}
