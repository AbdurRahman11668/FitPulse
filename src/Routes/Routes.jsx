import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import ClassesSection from "../Pages/Home/Sections/ClassesSection";
import ClassDetails from "../Pages/ClassDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        element: (
            <ClassDetails></ClassDetails>
        ),
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
    ],
  },
]);

export default router;
