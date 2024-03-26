import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Root from "./pages/Root/Root"
import ListedBooks from "./pages/ListedBooks/ListedBooks"
import PagesToRead from "./pages/PagesToRead/PagesToRead"
import ExploreBook from "./pages/ExploreBook/ExploreBook"
import About from "./pages/About/About"
import BookDetails from "./pages/BookDetails/BookDetails"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/BookDetails/:bookId",
                element: <BookDetails></BookDetails>,
            },
            {
                path: "/ListedBooks",
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: "/PagesToRead",
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: "/ExploreBook",
                element: <ExploreBook></ExploreBook>,
            },
            {
                path: "/About",
                element: <About></About>,
            },
        ],
    },
])

export default router
