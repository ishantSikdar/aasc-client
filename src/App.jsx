import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import { APP_ROUTES, ROUTE_ANY } from "./constants/routes";
import NotFoundPage from "./pages/common/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route path={route.path} element={<route.element />} key={route.id} />
          ))}
          <Route path={ROUTE_ANY} element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;