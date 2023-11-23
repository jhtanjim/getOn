import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Shared/Category/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);
export default router;
