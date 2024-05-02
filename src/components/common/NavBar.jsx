import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_EXE_COUNCIL, ROUTE_EVENTS, ROUTE_GALLERY, ROUTE_HOME, ROUTE_AASC_COUNCIL } from "../../constants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function NavBar({ isMobile }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCouncil, setShowCouncil] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(prevState => !prevState);
  }

  const closeMobileMenu = () => {
    setShowMenu(false);
  }

  const toggleCouncil = () => {
    setShowCouncil(prev => !prev)
  }

  return (
    <div className="z-50 fixed top-0 left-0 right-0 flex justify-between bg-white text-black h-16 md:h-20 opacity-90 p-4">
      <div className="flex gap-2 lg:gap-4 items-center">
        <a href="https://www.msijanakpuri.com/" target="_blank">
          <img src="/msiLogo.jpg" alt="Alumni Association" className="h-12 md:h-16" />
        </a>
        <Link to={ROUTE_HOME} onClick={closeMobileMenu}>
          <img src="/aascLogoMSI.png" alt="Alumni Association" className="h-12 md:h-16" />
        </Link>
      </div>


      {/* For Tab/Desktop screen */}
      {!isMobile && <div className="relative flex justify-between items-center px-7 lg:px-10 gap-14 text-xl font-medium uppercase">
        <Link to={ROUTE_HOME}>Home</Link>
        <Link to={ROUTE_ABOUT}>About Us</Link>
        <button onClick={toggleCouncil} className="relative uppercase">
          Council
          {!isMobile && showCouncil && <div className="absolute p-3 w-52 flex flex-col gap-2 bg-gray-100 top-10 right-[-75%] text-sm">
            <Link to={ROUTE_EXE_COUNCIL}>Executive Council</Link>
            <div className="w-full h-[1pt] bg-[#252525]"></div>
            <Link to={ROUTE_AASC_COUNCIL}>AASC Council</Link>
          </div>}
        </button>
        <Link to={ROUTE_EVENTS}>Events</Link>
        <Link to={ROUTE_GALLERY}>Gallery</Link>
      </div>}


      {/* Hamburger button to enable Mobile menu, only displays on mobile size res */}
      {isMobile && <button onClick={toggleMobileMenu} className={`z-10 text-black`}>
        {!showMenu ? <FontAwesomeIcon icon={faBars} size="xl" /> : <FontAwesomeIcon icon={faXmark} size="xl" />}
      </button>}

      {/* For Mobile, Menu Screen */}
      {isMobile && <div className={`fixed top-0 right-0 bottom-0 opacity-100 bg-white w-56 z-5 shadow-md overflow-y-auto transform transition-transform ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mt-20 flex flex-col gap-1 text-right p-4 font-light uppercase text-lg">
          <Link to={ROUTE_HOME} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Home</Link>
          <Link to={ROUTE_ABOUT} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">About Us</Link>
          <Link to={ROUTE_EXE_COUNCIL} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Executive Council</Link>
          <Link to={ROUTE_AASC_COUNCIL} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">AASC Council</Link>
          <Link to={ROUTE_EVENTS} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Events</Link>
          <Link to={ROUTE_GALLERY} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Gallery</Link>
        </div>
      </div>}

    </div>
  );
}