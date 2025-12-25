import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy } from "react"
import SuspensePage from "../pages/SuspensePage";
import ProtectedRoute from "./ProtectedRoute";
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../Layouts/Layout"));
const Courses = lazy(() => import("../pages/Courses"));
const CourseDetails = lazy(() => import("../pages/CourseDetails"));
const Cart = lazy(() => import("../pages/Cart"));


const AppRouter = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Login /> },
        {
            path: "/home",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "courses", element: <Courses /> },
                { path: "courses/:id", element: <CourseDetails /> },
                {
                    path: "cart",
                    element: (<ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>)
                },
            ]
        },
    ])
    return (
        <SuspensePage>
            <RouterProvider router={router} />
        </SuspensePage>
    )
}

export default AppRouter