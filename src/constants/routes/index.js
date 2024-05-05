import AboutPage from "../../pages/aboutUs/AboutPage";
import CouncilPage from "../../pages/council";
import AascCouncilPage from "../../pages/aascCouncil";
import HomePage from "../../pages/home";
import EventsPage from "../../pages/event";

export const ROUTE_HOME = "/";
export const ROUTE_ABOUT = "/about";
export const ROUTE_EXE_COUNCIL = "/exe-council";
export const ROUTE_AASC_COUNCIL = "/aasc-council";
export const ROUTE_EVENTS = "/events";
export const ROUTE_GALLERY = "/gallery";
export const ROUTE_ANY = "*";

export const APP_ROUTES = [
  {
    id: 1,
    path: ROUTE_HOME,
    element: HomePage,
  },
  {
    id: 2,
    path: ROUTE_EXE_COUNCIL,
    element: CouncilPage,
  },
  {
    id: 3,
    path: ROUTE_ABOUT,
    element: AboutPage,
  },
  {
    id: 4,
    path: ROUTE_AASC_COUNCIL,
    element: AascCouncilPage,
  },
  {
    id: 5,
    path: ROUTE_EVENTS,
    element: EventsPage,
  },
];
