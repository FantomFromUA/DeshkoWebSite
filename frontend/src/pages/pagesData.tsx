import { routerType } from "../types/router.types";
import AboutPage from "./about/AboutPage";
import ErrorPage from "./error/ErrorPage";
import FAQPage from "./faq/FAQPage";
import ContactPage from "./contact/ContactPage";
import TaryfyPage from "./taryfy/TaryfyPage";
import MainPage from "./main/MainPage";
import TrackingPage from "./tracking/TrackingPage";
import SignIn from "./signIn/SignInPage";
import SignUp from "./signUp/SignUpPage";
import UserCabinetPage from "./userCabinet/UserCabinetPage";
import CalculatorPage from "./calculator/CalculatorPage";
import { Verify } from "crypto";
import VerifyPage from "./verifyPage/VerifyPage";

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
        path: "/signin",
        element: <SignIn/>,
        title: "signin"
    },
    {
        path: "/signup",
        element: <SignUp/>,
        title: "signup"
    },
    {
        path: "/user",
        element: <UserCabinetPage/>,
        title: "user"
    },
    {
        path: "/calculator",
        element: <CalculatorPage/>,
        title: "calculator"
    },
    {
        path: '/verify',
        element: <VerifyPage />,
        title: "verify"
    },
    {
      path: "*", 
      element: <ErrorPage/>,
      title: "error"
    }
  ];
  
  export default pagesData;