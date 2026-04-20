import { createBrowserRouter } from "react-router-dom";
import Home from "../home/partials/home";
import { ErrorPage } from "../home/partials/error";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
