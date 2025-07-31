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
import StudentClassDetails from "@/Pages/Dashboard/Customer/StudentClassDetails";
import TeacherClassDetails from "@/Pages/Dashboard/Teacher/TeacherClassDetails";
import TeacherRoute from "./TeacherRoute";
import AdminRoute from "./AdminRoute";
import DashBoard from "@/Pages/Dashboard/DashBoard";
import NotFound from "@/Pages/NotFound";
import InvoiceCard from "@/Components/Shared/Card/Invoice/InvoiceCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound/>,
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
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <ClassDetails />
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
        element: <DashBoard />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
      // Customer role
      {
        path: "my-courses",
        element: <MyEnrollClasses />,
      },
      {
        path: "my-classes/:id",
        element: <StudentClassDetails />,
      },
      // Admin role
      {
        path: "teach-req",
        element: (
          <AdminRoute>
            <TeachRequest />
          </AdminRoute>
        ),
      },
      {
        path: "courses",
        element: (
          <AdminRoute>
            <AdminAllClasses />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      // Teacher Role
      {
        path: "teach-add-class",
        element: (
          <TeacherRoute>
            <TeachAddCalsses />
          </TeacherRoute>
        ),
      },
      {
        path: "teach-my-class",
        element: (
          <TeacherRoute>
            <TeachMyClasses />
          </TeacherRoute>
        ),
      },
      {
        path: "teach-my-class/:id",
        element: (
          <TeacherRoute>
            <TeacherClassDetails />
          </TeacherRoute>
        ),
      },
    ],
  },
  {
    path: '/invoice-view',
    element: <InvoiceCard/>
  }
]);
