import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_COUNCIL, ROUTE_EVENTS, ROUTE_GALLERY, ROUTE_HOME } from "../../constants/routes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMobileMenu = () => {
    setShowMenu(prevState => !prevState);
  }

  const closeMobileMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className="z-10 fixed top-0 left-0 right-0 flex justify-between bg-white text-black h-16 md:h-20 opacity-90 p-4">
      <Link to={ROUTE_HOME} className="flex items-center" onClick={closeMobileMenu}>
        <img src="/aascLogoWhite.png" alt="Alumni Association" className="h-12 md:h-16" />
      </Link>

      {/* For Tab/Desktop screen */}
      {!isMobile && <div className="flex justify-between items-center px-7 lg:px-10 gap-14 text-xl font-bold">
        <Link to={ROUTE_ABOUT}>About Us</Link>
        <Link to={ROUTE_COUNCIL}>Council</Link>
        <Link to={ROUTE_EVENTS}>Events</Link>
        <Link to={ROUTE_GALLERY}>Gallery</Link>
      </div>}

      {/* Hamburger button to enable Mobile menu, only displays on mobile size res */}
      {isMobile && <button onClick={toggleMobileMenu} className={`z-10 p-2 text-black`}>
        {!showMenu && <FontAwesomeIcon icon={faBars} size="xl" />}
        {showMenu && <FontAwesomeIcon icon={faXmark} size="xl" />}
      </button>}

      {/* For Mobile, Menu Screen */}
      {isMobile && <div className={`fixed top-0 right-0 bottom-0 opacity-100 bg-white w-56 z-5 shadow-md overflow-y-auto transform transition-transform ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mt-20 flex flex-col gap-1 text-right p-4 font-light uppercase text-lg">
          <Link to={ROUTE_HOME} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Home</Link>
          <Link to={ROUTE_ABOUT} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">About Us</Link>
          <Link to={ROUTE_COUNCIL} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Council</Link>
          <Link to={ROUTE_EVENTS} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Events</Link>
          <Link to={ROUTE_GALLERY} onClick={closeMobileMenu} className="border-b-[1pt] border-[#252525] p-2">Gallery</Link>
        </div>
      </div>}

    </div>
  );
}
