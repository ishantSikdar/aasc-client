import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { APP_ROUTES, ROUTE_ANY } from "./constants/routes";
import NotFoundPage from "./pages/common/NotFoundPage";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import BackToTop from "./components/common/BackToTop";

function App() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <BrowserRouter>
      <NavBar isMobile={isMobile} />
      <Routes>
        {APP_ROUTES.map((route) => (
          <Route path={route.path} element={<route.element isMobile={isMobile} />} key={route.id} />
        ))}
        <Route path={ROUTE_ANY} element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App;