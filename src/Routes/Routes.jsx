import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Dashboard/Admin/Users";
import MyEnrollClasses from "../Pages/Dashboard/Customer/MyEnrollClasses";
import TeachAddCalsses from "../Pages/Dashboard/Teacher/TeachAddCalsses";
import DashboardLayout from "../Layouts/DashboardLayout";
import TeachMyClasses from "../Pages/Dashboard/Teacher/TeachMyClasses";
import TeachRequest from "../Pages/Dashboard/Admin/TeachRequest";
import Profile from "../Pages/Dashboard/Common/Profile";
import AdminAllClasses from "../Pages/Dashboard/Admin/AminAllClasses";
import ClassDetails from "../Components/AllClasses/ClassDetails";

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
        path: '/class/:id',
        element: <ClassDetails/>
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <p>Wrong DASH page</p>,
    children: [
      {
        index: true,
        element: <p>Welcome to Learnisty Dashboard</p>
      },
      {
        path: 'my-profile',
        element: <Profile/>
      },
      // Customer role
      {
        path: "my-classes",
        element: <MyEnrollClasses />,
      },
      // Admin role
      {
        path: "teach-req",
        element: <TeachRequest />,
      },
      {
        path: "all-class",
        element: <AdminAllClasses/>
      },
      {
        path: "users",
        element: <Users />,
      },
      // Teacher Role
      {
        path: "teach-add-class",
        element: <TeachAddCalsses />,
      },
      {
        path: "teach-my-class",
        element: <TeachMyClasses />,
      },
    ],
  },
]);
