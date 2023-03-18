import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Cocktails from "../pages/Cocktails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/cocktails",
    element: <Cocktails />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
