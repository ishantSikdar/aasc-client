import { Link } from 'react-router-dom'
import {
  ROUTE_ABOUT,
  ROUTE_EXE_COUNCIL,
  ROUTE_EVENTS,
  ROUTE_GALLERY,
  ROUTE_HOME,
  ROUTE_AASC_COUNCIL,
  ROUTE_AASC_COMMITTEE,
} from '../../constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './navbar.css'
import { cn } from '../../utils/utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function NavBar({ isMobile }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showCouncil, setShowCouncil] = useState(false)
  const innerHeightThreshold = 100

  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (current) => {
    setIsVisible(current < 10 || current < scrollY.getPrevious())

    if (showMenu) {
      setShowMenu(current < 10 || current < scrollY.getPrevious())
    }
  })

  const toggleMobileMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  const closeMobileMenu = () => {
    setShowMenu(false)
  }

  const toggleCouncil = () => {
    setShowCouncil((prev) => !prev)
  }

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className={cn(
          'z-50 fixed top-0 transition-all duration-300 ease-in-out left-0 right-0 flex justify-between  h-14 md:h-20 p-4',
          scrollY.get() > innerHeightThreshold
            ? 'bg-white/40 text-black backdrop-blur-md shadow-lg'
            : 'text-white'
        )}
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
              className={cn(
                'h-12 md:h-16 p-2 px-6 rounded-full transition-colors duration-300 ease-in-out',
                scrollY.get() < innerHeightThreshold
                  ? 'bg-white/40'
                  : 'bg-transparent'
              )}
            />
          </Link>
        </div>

        {/* For Tab/Desktop screen */}
        {!isMobile && (
          <div className='relative flex justify-between items-center px-7 lg:px-10 gap-10 md:gap-5 lg:gap-14 text-sm font-light uppercase'>
            <Link
              className={cn(
                'underline-animate',
                scrollY < innerHeightThreshold ? 'after:bg-white' : ''
              )}
              to={ROUTE_HOME}
            >
              Home
            </Link>
            <Link
              className={cn(
                'underline-animate',
                scrollY < innerHeightThreshold ? 'after:bg-white' : ''
              )}
              to={ROUTE_ABOUT}
            >
              About Us
            </Link>
            <button
              onClick={toggleCouncil}
              className={cn(
                'relative uppercase underline-animate',
                scrollY < innerHeightThreshold ? 'after:bg-white' : ''
              )}
            >
              Council
              {!isMobile && showCouncil && (
                <div className='absolute p-3 w-52 flex flex-col gap-2 shadow-md bg-white top-10 right-[-75%] text-sm'>
                  {/* <Link to={ROUTE_EXE_COUNCIL}>Executive Council</Link> */}
                  {/* <div className="w-full h-[0.5pt] bg-[#252525]"></div> */}
                  <Link to={ROUTE_AASC_COUNCIL}>AASC Council</Link>
                  <div className='w-full h-[0.5pt] bg-[#252525]'></div>
                  <Link to={ROUTE_AASC_COMMITTEE}>AASC Committee</Link>
                </div>
              )}
            </button>
            <Link
              className={cn(
                'underline-animate',
                scrollY < innerHeightThreshold ? 'after:bg-white' : ''
              )}
              to={ROUTE_EVENTS}
            >
              Events
            </Link>
            {/* <Link className="underline-animate" to={ROUTE_GALLERY}>Gallery</Link> */}
          </div>
        )}

        {/* Hamburger button to enable Mobile menu, only displays on mobile size res */}
        {isMobile && (
          <button onClick={toggleMobileMenu} className={`z-10 text-black`}>
            {!showMenu ? (
              <FontAwesomeIcon icon={faBars} size='xl' color={scrollY.get() < innerHeightThreshold ? '#FFFFFF90': '#000'}/>
            ) : (
              <FontAwesomeIcon icon={faXmark} size='xl'color={scrollY.get() < innerHeightThreshold ? '#FFFFFF90': '#000'} />
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
          className='fixed top-0 z-40 right-0 bottom-0 opacity-100 bg-white/40 backdrop-blur-md w-56 z-5 shadow-md overflow-y-auto transform transition-transform'
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
