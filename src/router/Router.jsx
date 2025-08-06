import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CardDetail from "../pages/CardDetail";
import Reading from "../pages/Reading";
import Layout from "../layout/Layout";

export const routerTarot = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/card/:id",
        element: <CardDetail />,
      },
      {
        path: "/reading",
        element: <Reading />,
      },
    ],
  },
]);

export default routerTarot;
