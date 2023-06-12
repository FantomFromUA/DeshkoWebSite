import { routerType } from "../types/router.types";
import AboutPage from "./about/AboutPage";

const pagesData: routerType[] = [
    {
        path: "/about",
        element: <AboutPage/>,
        title: "about"
    }
  ];
  
  export default pagesData;