import { createBrowserRouter } from "react-router-dom";
import Home from "../home/partials/home";
import { ErrorPage } from "../home/partials/error";

 export const router=createBrowserRouter([


{
    path:"/",
    element:<Home/>,
    errorElement:<ErrorPage/>
}

])