import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-classes",
        element: <AllClasses />,
      },
      {
        path: "/teachon",
        element: <TeachOn/>
      },
    ],
  },
  // Dashboard routes
  // {
  //     path: '/dash',
  //     Component:
  // }
]);
