import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import ClassDetails from "../Pages/ClassDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MemberProfile from "../Pages/Dasgboard/MemberProfile";
import Admin from "../Pages/Dasgboard/Admin";
import AllUsers from "../Pages/Dasgboard/AllUsers";
import AdminRoute from "./AdminRoute";
import Gallery from "../Pages/Gallery";
import TrainersPage from "../Pages/TrainersPage";
import TrainerDetails from "../Pages/TrainerDetails";
import BeaTrainer from "../Pages/BeaTrainer";
import TrainerHandle from "../Pages/Dasgboard/TrainerHandle";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    loader: () => fetch("http://localhost:5000"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classdetails/:id",
        element: <ClassDetails></ClassDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
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
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/trainers/beatrainer",
        element: <BeaTrainer></BeaTrainer>
      },
      {
        path: "/trainers",
        element: <TrainersPage></TrainersPage>
      },
      {
        path: "/trainerdetails/:id",
        element: (
          <PrivateRoute>
            <TrainerDetails></TrainerDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "profile",
        element: <MemberProfile></MemberProfile>,
      },

      // admin routes
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <Admin></Admin>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "alltrainers",
        element: (
          <AdminRoute>
            <TrainerHandle></TrainerHandle>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
