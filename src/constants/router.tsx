import RegistrationPage from "../pages/registration-page/RegistrationPage";
import {registration} from "./url";


export const publicRouters = [
    {
        path: registration,
        element: <RegistrationPage/>,
        exact: true,
    }
]

export const privateRouters = [
    {
        path: "",
        element: "",
        exact: true,
    }
]