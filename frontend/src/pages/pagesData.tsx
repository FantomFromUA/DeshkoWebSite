import { Navigate } from "react-router-dom";
import { routerType } from "../types/router.types";
import AboutPage from "./about/AboutPage";
import ErrorPage from "./error/ErrorPage";
import FAQPage from "./faq/FAQPage";
import ContactPage from "./contact/ContactPage";
import ServicesPage from "./services/ServicesPage";
import TaryfyPage from "./taryfy/TaryfyPage";
import MainPage from "./main/MainPage";
import TrackingPage from "./tracking/TrackingPage";

const pagesData: routerType[] = [
    {
        path: "/",
        element: <MainPage/>,
        title: "about"
    },{
        path: "/about",
        element: <AboutPage/>,
        title: "about"
    },
    {
        path: "/faq",
        element: <FAQPage/>,
        title: "faq"
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        title: "contact"
    },
    {
        path: "/services",
        element: <ServicesPage/>,
        title: "services"
    },
    {
        path: "/taryfy",
        element: <TaryfyPage/>,
        title: "taryfy"
    },
    {
        path: "/tracking",
        element: <TrackingPage/>,
        title: "tracking"
    },
    {
        path: "/404",
        element: <ErrorPage/>,
        title: "error"
    },
    {
      path: "*", 
      element: <Navigate to="/404" replace />,
      title: "error"
    }
  ];
  
  export default pagesData;