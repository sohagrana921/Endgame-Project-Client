import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDetails from "../Pages/UserDetails/UserDetails";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import AddReview from "../Pages/AddReview/AddReview";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/collegeDetails/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://endgame-server-amber.vercel.app/colleges/${params.id}`
          ),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/admissionForm/:id",
        element: (
          <PrivateRoute>
            <AdmissionForm></AdmissionForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://endgame-server-amber.vercel.app/colleges/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
