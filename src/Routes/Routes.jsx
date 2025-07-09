import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Users from "../Pages/Dashboard/Admin/Users";
import MyEnrollClasses from "../Pages/Dashboard/Customer/MyEnrollClasses";
import TeachAddCalsses from "../Pages/Dashboard/Teacher/TeachAddCalsses";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <p>Wrong page</p>,
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
        element: (
          <PrivateRoute>
            <TeachOn />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    errorElement: <p>Wrong DASH page</p>,
    children:[
      {
        index: true,
        element: <Users/>
      },
      {
        path: "my-classes",
        element: <MyEnrollClasses/>
      },
      {
        path: 'users',
        element: <Users/>
      },
      {
        path: 'teach-add-class',
        element: <TeachAddCalsses/>
      }
    ]
    
  }
]);
