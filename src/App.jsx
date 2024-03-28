import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Root from "./pages/Root/Root"
import ListedBooks from "./pages/ListedBooks/ListedBooks"
import PagesToRead from "./pages/PagesToRead/PagesToRead"
import About from "./pages/About/About"
import BookDetails from "./pages/BookDetails/BookDetails"
import NestedReadBooks from "./pages/NestedReadBooks/NestedReadBooks"
import NestedWishlist from "./pages/NestedWishlist/NestedWishlist"
import ContactUs from "./pages/ContactUs/ContactUs"

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
                path: "/book-details/:id",
                element: <BookDetails></BookDetails>,
            },
            {
                path: "/listed-books",
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        path: "read-books",
                        index: true,
                        element: <NestedReadBooks></NestedReadBooks>,
                    },
                    {
                        path: "wishlist-books",
                        element: <NestedWishlist></NestedWishlist>,
                    },
                ],
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ],
    },
])

export default router
