import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Chart from "./pages/Chart/Chart"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <div>ok</div>,
            },
            {
                path: "/chart",
                element: <Chart></Chart>,
            },
        ],
    },
])

export default router
