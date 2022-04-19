import RegistrationPage from "../pages/registration-page/RegistrationPage";
import {DEVELOPMENT_POSTS, REGISTRATION} from "./url";


export const publicRouters = [
    {
        path: REGISTRATION,
        element: <RegistrationPage/>,
        exact: true,
    }
]

export const privateRouters = [
    {
        path: DEVELOPMENT_POSTS,
        element: "",
        exact: true,
    }
]