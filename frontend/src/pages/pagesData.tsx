import { Navigate } from "react-router-dom";
import { routerType } from "../types/router.types";
import AboutPage from "./about/AboutPage";
import ErrorPage from "./error/ErrorPage";
import FAQPage from "./faq/FAQPage";

const pagesData: routerType[] = [
    {
        path: "/",
        element: <AboutPage/>,
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