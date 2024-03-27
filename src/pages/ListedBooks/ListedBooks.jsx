import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { getFromLS } from "../../utils/localStorage"

const ListedBooks = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/listed-books/read-books")
    }, [navigate])

    const readBooks = getFromLS("read")
    const wishListBooks = getFromLS("wish")
    const [shortedReadList, setShortedReadList] = useState(readBooks)
    const [shortedWishList, setShortedWishList] = useState(wishListBooks)
    // useEffect(() => {
    // setShortedList(readBooks)
    // }, [])

    const handleShorted = (shorter) => {
        if (shorter === "rating") {
            // console.log(shorter)
            const ratingReadShorted = shortedReadList.sort((a, b) => b.rating - a.rating)
            const ratingWishShorted = shortedWishList.sort((a, b) => b.rating - a.rating)
            setShortedReadList(ratingReadShorted)
            setShortedWishList(ratingWishShorted)
        } else if (shorter === "numOfPages") {
            // console.log(shorter)
            const ratingReadShorted = shortedReadList.sort((a, b) => b.totalPages - a.totalPages)
            const ratingWishShorted = shortedWishList.sort((a, b) => b.totalPages - a.totalPages)
            setShortedReadList(ratingReadShorted)
            setShortedWishList(ratingWishShorted)
        } else if (shorter === "publisherYear") {
            // console.log(shorter)
            const ratingReadShorted = shortedReadList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            const ratingWishShorted = shortedWishList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setShortedReadList(ratingReadShorted)
            setShortedWishList(ratingWishShorted)
        }
    }

    return (
        <div>
            <div className="bg-[#1313130D] flex items-center justify-center text-[28px] font-bold text-[#131313] rounded-2xl h-[100px] mb-8">
                <h2> Books</h2>
            </div>
            <div className="dropdown dropdown-bottom flex items-center justify-center mb-14">
                <div tabIndex={0} role="button" className="btn m-1 text-lg font-semibold bg-[#23BE0A] text-white">
                    <p>Short By</p>
                    <span>
                        <IoIosArrowDown />
                    </span>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 bg-[#1313130D]">
                    <li>
                        <button onClick={() => handleShorted("rating")}>Rating</button>
                    </li>
                    <li>
                        <button onClick={() => handleShorted("numOfPages")}>Number of pages</button>
                    </li>
                    <li>
                        <button onClick={() => handleShorted("publisherYear")}>Publisher year</button>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex border-[#b2b2b4] *:border-[#b2b2b4] *:rounded-t-lg *:rounded-b-sm *:py-[14px] *:px-[17px] *:text-nowrap *:text-lg">
                    <NavLink
                        className={({ isActive }) => (isActive ? "border-x border-t border-b-0" : "border-b text-[#13131380]")}
                        to={"/listed-books/read-books"}>
                        Read Books
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "border-x border-t border-b-0" : "border-b text-[#13131380]")}
                        to={"/listed-books/wishlist-books"}>
                        Wishlist Books
                    </NavLink>
                    <div className="border-b w-full"></div>
                </div>
            </div>
            <Outlet context={{ shortedReadList, shortedWishList }}></Outlet>
        </div>
    )
}

export default ListedBooks
