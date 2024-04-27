import CouncilPage from "../../pages/council";
import HomePage from "../../pages/home";

export const ROUTE_HOME = "/";
export const ROUTE_ABOUT = "/about";
export const ROUTE_COUNCIL = "/council";
export const ROUTE_EVENTS = "/events";
export const ROUTE_GALLERY = "/gallery";
export const ROUTE_ANY = "*";



export const APP_ROUTES = [
    {
        id: 1,
        path: ROUTE_HOME,
        element: HomePage
    },{
        id: 2,
        path: ROUTE_COUNCIL,
        element: CouncilPage
    }

]