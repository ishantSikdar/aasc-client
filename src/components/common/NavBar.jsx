import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_COUNCIL, ROUTE_EVENTS, ROUTE_GALLERY, ROUTE_HOME } from "../../constants/routes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMobileMenu = () => {
    setShowMenu(prevState => !prevState)
  }

  const closeMobileMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className="z-10 fixed top-0 left-0 right-0 flex justify-between bg-white font-bold text-black h-16 opacity-80 p-4">
      <Link to={ROUTE_HOME} className="flex items-center" onClick={closeMobileMenu}>
        <img src="/aascLogoWhite.png" alt="Alumni Association" className="h-12" />
      </Link>

      {/* For Tab/Desktop screen */}
      {!isMobile && <div className="flex justify-between items-center gap-4">
        <Link to={ROUTE_ABOUT}>About Us</Link>
        <Link to={ROUTE_COUNCIL}>Council</Link>
        <Link to={ROUTE_EVENTS}>Events</Link>
        <Link to={ROUTE_GALLERY}>Gallery</Link>
      </div>}

      {/* Hamburger button to enable Mobile menu */}
      {isMobile && <button onClick={toggleMobileMenu} className="flex flex-col gap-1 my-auto">
        <div className="w-7 h-[4px] bg-black"></div>
        <div className="w-7 h-[4px] bg-black"></div>
        <div className="w-7 h-[4px] bg-black"></div>
      </button>}

      {/* For Mobile, Menu Screen */}
      {isMobile && showMenu && (
        <div className="absolute flex flex-col top-full right-0 bg-white border border-gray-200 shadow-md p-4 mx-2">
          <Link to={ROUTE_ABOUT} onClick={closeMobileMenu}>About Us</Link>
          <Link to={ROUTE_COUNCIL} onClick={closeMobileMenu}>Council</Link>
          <Link to={ROUTE_EVENTS} onClick={closeMobileMenu}>Events</Link>
          <Link to={ROUTE_GALLERY} onClick={closeMobileMenu}>Gallery</Link>
        </div>
      )}
    </div>
  );
}
