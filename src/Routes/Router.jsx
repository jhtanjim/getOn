import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";

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
        element: <Category/>,
      },
      {
        path: "/about",
        element: <About/> ,
      },
      {
        path: "/contact",
        element: <Contact/> ,
      },
    ],
  },
]);
export default router;
