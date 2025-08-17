import InvoiceCard from "@/Components/Shared/Card/Invoice/InvoiceCard";
import Aboutus from "@/Pages/Aboutus/Aboutus";
import Certificate from "@/Pages/Dashboard/Customer/Certificate";
import StudentClassDetails from "@/Pages/Dashboard/Customer/StudentClassDetails";
import DashBoard from "@/Pages/Dashboard/DashBoard";
import ReviewsTeacher from "@/Pages/Dashboard/Teacher/ReviewsTeacher";
import Students from "@/Pages/Dashboard/Teacher/Students";
import TeacherClassDetails from "@/Pages/Dashboard/Teacher/TeacherClassDetails";
import NotFound from "@/Pages/NotFound";
import { createBrowserRouter } from "react-router";
import ClassDetails from "../Components/AllClasses/CourseDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import AllClasses from "../Pages/AllClasses/AllCourse";
import Career from "../Pages/career/Career";
import AdminAllClasses from "../Pages/Dashboard/Admin/AminAllClasses";
import TeachRequest from "../Pages/Dashboard/Admin/TeachRequest";
import Users from "../Pages/Dashboard/Admin/Users";
import Profile from "../Pages/Dashboard/Common/Profile";
import MyEnrollClasses from "../Pages/Dashboard/Customer/MyEnrollClasses";
import TeachAddCalsses from "../Pages/Dashboard/Teacher/TeachAddCalsses";
import TeachMyClasses from "../Pages/Dashboard/Teacher/TeachMyClasses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import TeacherRoute from "./TeacherRoute";
import Books from "@/Pages/book/Books";
import BookDetials from "@/Pages/book/BookDetials";
import Cart from "@/Pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Courses",
        element: <AllClasses />,
      },
      {
        path: "/course/:id",
        element: <ClassDetails />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetials />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/career",
        element: <Career />
      },
      {
        path: "/about",
        element: <Aboutus />,
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
      //Common routes for eney role
      {
        path: "my-profile",
        element: <Profile />,
      },
      {
        path: "messages",
        element: <p>Messages shows here...</p>,
      },
      // Student role
      {
        path: "my-courses",
        element: <MyEnrollClasses />,
      },
      {
        path: "my-classes/:id",
        element: <StudentClassDetails />,
      },
      // {
      //   path: "certificate",
      //   element: <Certificate />,
      // },
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
      {
        path: "reviews",
        element: (
          <TeacherRoute>
            <ReviewsTeacher />
          </TeacherRoute>
        ),
      },
      {
        path: "students",
        element: (
          <TeacherRoute>
            <Students />
          </TeacherRoute>
        ),
      },
    ],
  },
  {
    path: "/invoice-view",
    element: <InvoiceCard />,
  },
]);
