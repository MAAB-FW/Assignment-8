import { IoIosArrowDown } from "react-icons/io"
import { NavLink, Outlet } from "react-router-dom"

const ListedBooks = () => {
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
                        <a>Rating</a>
                    </li>
                    <li>
                        <a>Number of pages</a>
                    </li>
                    <li>
                        <a>Publisher year</a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex border-[#b2b2b4] *:border-[#b2b2b4] *:rounded-t-lg *:rounded-b-sm *:py-[14px] *:px-[17px] *:text-nowrap">
                    <NavLink
                        className={({ isActive }) => (isActive ? "border-x border-t border-b-0" : "border-b")}
                        to={"/listed-books/read-books"}>
                        Read Books
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "border-x border-t border-b-0" : "border-b")}
                        to={"/listed-books/wishlist-books"}>
                        Wishlist Books
                    </NavLink>
                    <div className="border-b w-full"></div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default ListedBooks
